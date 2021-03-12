/** Request 网络请求工具 更详细的 api 文档: https://github.com/umijs/umi-request */
import { extend } from 'umi-request';
import { notification } from 'antd';
import { history as router, getDvaApp } from 'umi';
import { isLogged } from './authority';
// eslint-disable-next-line import/named
import { apiHost } from './config';

/**
 * 异常处理程序
 */
const errorHandler = (error) => {
  console.log(error);
  const { response = {} } = error;
  const { status } = response;
  if (status === 401) {
    response
      .clone()
      .json()
      .then(() => {
        // eslint-disable-next-line
        getDvaApp()._store.dispatch({
          type: 'login/logout',
          payload: {
            act: 'voluntary',
          },
        });
      });
    return response.clone().json();
  }

  if (!isLogged()) {
    // 未登录的所有提示信息不需要弹框提醒，直接返回错误信息
    if (status <= 504 && status >= 500) {
      return {
        error: { message: '服务器出错了', type: 'ServerError' },
        status: false,
      };
    }
    return response.clone().json();
  }

  if (status === 403) {
    // 未授权界面或接口
    notification.error({
      message: `请求错误 ${status}`,
      description: '无权访问！请确认是否有权限！',
    });
    // router.push('/exception/403');
    return response.clone().json(); // 返回错误信息
  }
  if (status <= 504 && status >= 500) {
    // 服务器出错
    return router.push('/exception/500');
  }
  if (status > 404 && status < 422 && status !== 409) {
    // 资源未找到
    return router.push('/exception/404');
  }
  response // 错误信息弹窗提醒针对code = 400或上述判断条件以外的
    .clone()
    .json()
    .then((res) => {
      const errortext = (res.error && res.error.msg) || res.msg || res.message || res.error.message;
      notification.error({
        message: `请求错误 ${status}`,
        description: errortext,
      });
    });
  return response.clone().json(); // 返回错误信息
};

const Request = async (api, params) => {
  /**
   * 配置request请求时的默认参数
   */
  const prefixFn = () => {

    return apiHost;
  };
  const settings = {
    // prefix: prefixFn(),
    // errorHandler, // 默认错误处理
    credentials: 'include', // 默认请求是否带上cookie
    getResponse: true,
    headers: {
      authorization: localStorage.getItem('authorization'),
    }
  };

  const request = extend(settings);
  return request(api, { ...params }).then((other) => {
    const correctCode = [200, 201, 204];
    const { response, data, error } = other;
    if (error) {
      return {
        error,
        status: false,
      };
    }
    if (response) {
      const newData = response.clone();
      const filename = response.headers.get('Content-Disposition');
      if (filename && filename.includes('attachment')) {
        newData.blob().then((blob) => {
          const blobUrl = window.URL.createObjectURL(blob);
          // 不能直接创建一个<a>标签
          const a = document.createElement('a');
          // const a = document.getElementById('a_id');
          let newFilename = 'file.txt';
          if (filename) {
            newFilename = filename.split('filename=')[1] || 'file.txt';
          }
          // const filename = 'file.txt';RRAWBy5cieZBlXQw
          a.href = blobUrl;
          a.download = newFilename;
          a.click();
          window.URL.revokeObjectURL(blobUrl);
        });
      }

      if (response && correctCode.indexOf(response.status) === -1) {
        return {
          ...data,
          status: false,
        };
      }
      if (data) {
        return data;
      }
    }
    return {
      error: {
        message: '网络异常',
      },
      status: false,
    };
  });
};

export default Request;

