/**
 * Created by icon on 2021/3/9
 */
import request from './request';

const uploadImage = async (formData) => {
  return new Promise((resolve, reject) => {
    request('/api/upload_img', {
      data: formData,
      method: 'POST',
      headers: {
        // 'Content-Type': 'multipart/form-data;charset=UTF-8',
      }
    }).then(response => {
      const { status, data, msg } = response;
      if (status === 0) {
        resolve(`${window.location.protocol}//${window.location.host}${data}`)
      } else {
        reject(msg)
      }
    }).catch(e => {
      reject(e);
    })
  })
};

export default uploadImage;
