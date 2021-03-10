/**
 * Created by icon on 2021/3/5
 */
import axios from 'axios';
import { notification } from 'antd';

export default (options) => {
  const { method, url, data, headers } = options;
  return new Promise((resolve, reject) => {
    try {
      axios[method.toLowerCase()](url, data, {headers}).then(res => {
        const { data, status } = res;
        if (status === 200) {
          const { status, error_msg, data: json } = data;
          if (status !== 0) {
            notification.error({
              message: status,
              description: error_msg,
            });
            reject(error_msg);
          } else {
            resolve(json);
          }
        } else {
          notification.error({
            message: `请求错误 ${status}`,
            description: '无权访问！请确认内容！',
          });
          throw new Error(res.statusText);
        }
      })
    } catch (e) {
      notification.error({
        message: '请求错误',
        description: '网络错误，请稍后重试！',
      });
    }
  })
}

