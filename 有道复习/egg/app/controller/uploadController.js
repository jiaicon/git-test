/**
 * Created by icon on 2021/3/4
 */
'use strict';

const BasicController = require('./basicController');
const fs = require('fs');
const path = require('path');
const moment = require('moment');
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');

class uploadController extends BasicController {
  async upload_img() {
    const { url, error_msg } = await this.upload('img');
    if (url) {
      await this.fail(url, 0, error_msg);
    } else {
      await this.success(null, 500, '上传失败');
    }
  }
  async upload_file() {
    const { url, error_msg } = await this.upload('file');
    if (url) {
      await this.success(url, 0, error_msg);
    } else {
      await this.fail(null, 500, '上传文件失败');
    }
  }
  // 上传
  async upload(category = '') {
    const stream = await this.ctx.getFileStream();
    return await this.basicUpload(stream, category);
  }

  async multiUpload() {
    const { ctx } = this;
    const parts = ctx.multipart();
    let part;
    const result = [];
    while ((part = await parts()) != null) {
      if (part.length) {
        // 复杂格式的上传，不管
      } else {
        if (!part.filename) {
          await this.fail(null, 500, '存在空简历');
          return;
        }
        let part_save;
        try {
          part_save = await this.basicUpload(part, 'file');
        } catch (err) {
          await sendToWormhole(part);
          throw err;
        }
        result.push(part_save);
      }
    }
    return result;
  }

  async basicUpload(stream, category) {
    // 基础的目录
    const uplaodBasePath = 'app/public/uploads';
    const { ctx } = this;
    // 生成文件名
    const filename = `${Date.now()}${Number.parseInt(
      Math.random() * 1000
    )}${path.extname(stream.filename).toLocaleLowerCase()}`;
    // 生成文件夹
    const dirname = moment().format('YYYY/MM/DD');
    function mkdirsSync(dirname) {
      if (fs.existsSync(dirname)) {
        return true;
      }
      if (mkdirsSync(path.dirname(dirname))) {
        fs.mkdirSync(dirname);
        return true;
      }

    }
    mkdirsSync(path.join(uplaodBasePath, category, dirname));
    // 生成写入路径
    const target = path.join(uplaodBasePath, category, dirname, filename);
    // 写入流
    const writeStream = fs.createWriteStream(target);
    try {
      // 异步把文件流 写入
      await awaitWriteStream(stream.pipe(writeStream));
      // 测试上传成功，关闭通道，
      await sendToWormhole(stream);
      ctx.logger.info('上传一个文件');
    } catch (err) {
      ctx.logger.error(err);
      // 如果出现错误，关闭管道
      await sendToWormhole(stream);
      return {
        error_msg: '发送错误，上传失败',
      };
    }
    return {
      url: path.join('/public/uploads', category, dirname, filename),
      fields: stream,
      error_msg: '上传成功',
    };
  }
}

module.exports = uploadController;

