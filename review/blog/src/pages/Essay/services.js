/**
 * Created by icon on 2021/3/11
 */
import request from '@/utils/request';

export async function createArticle(values) {
  return new Promise((resolve, reject) => {
    request('/api/article/create', {
      method: 'POST',
      data: values,
    }).then(res => {
      resolve(res);
    })
  })
}

export async function getArticle(values) {
  return await new Promise((resolve, reject) => {
    request('/api/article/list', {
      method: 'GET',
      body: values,
    }).then((response) => {
      const { status, data, msg } = response;
      if (status === 0) {
        resolve(data)
      } else {
        reject(msg)
      }
    })
  })
}

export async function articleInfo(id) {
  return new Promise((resolve, reject) => {
    request(`/api/article/${id}`, {
      method: 'GET',
    }).then(response => {
      const { status, data, msg } = response;
      if (status === 0) {
        resolve(data)
      } else {
        reject(msg)
      }
    })
  })
}

export async function updateArticle(values) {
  return new Promise((resolve, reject) => {
    const { id } = values;
    delete values.id;
    request(`/api/article/update/${id}`, {
      method: 'PUT',
      data: values,
    }).then(response => {
      const { status, data, msg } = response;
      if (status === 0) {
        resolve(data)
      } else {
        reject(msg)
      }
    })
  })
}

export async function deleteArticle(id) {
  return new Promise((resolve, reject) => {
    request(`/api/article/destroy/${id}`, {
      method: 'DELETE',
    }).then(response => {
      const { status, data, msg } = response;
      if (status === 0) {
        resolve(true)
      } else {
        reject(msg)
      }
    })
  })
}

