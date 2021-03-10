/**
 * Created by icon on 2021/3/9
 */
import request from './request';
import config from '@/config/config';

const uploadImage = async (formData) => {
  return new Promise((resolve, reject) => {
    request({
      url: '/api/upload_img',
      data: formData,
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data;charset=UTF-8',
      }
    }).then(res => {
      resolve(`${config.apiHost}${res}`)
    }).catch(e => {
      reject(e);
    })
  })
};

export default uploadImage;
