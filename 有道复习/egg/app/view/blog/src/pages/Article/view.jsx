/**
 * Created by icon on 2021/3/10
 */
import React, {useEffect} from 'react';
import { Card, Button } from 'antd';
import { useRequest } from 'ahooks';
import request from '@/utils/request';

var QRCode = require('qrcode.react');
const getArticle = (id) => {
  return new Promise((resolve, reject) => {
    request({
      method: 'GET',
      url: `/api/article/${id}`,
    }).then(res => {
      resolve(res);
    })
  })
};
const Index = (props) => {
  const { run, data, loading } = useRequest(getArticle, {
    manual: true,
    onSuccess() {
      // 生成二维码
      console.log(window.location.href)
    }
  });
  useEffect(() => {
    run(props.match.params.id);
    return () => {

    }
  }, []);
  const onClick = () => {
    downLoad(saveAsPNG(document.getElementById('qrcode')))
  };
  //模拟a标签href下载
  const downLoad = (url) => {
    let a = document.createElement("a");
    a.download = '';// 设置下载的文件名，默认是'下载'
    a.href = url;
    document.body.appendChild(a);
    a.click();
    a.remove(); // 下载之后把创建的元素删除
  };
  // 保存成png格式的图片
  const saveAsPNG = (canvas) => {
    console.log(canvas);
    return canvas.toDataURL("image/png");
  };
  if (loading) return null;
  return (
    <Card>
      <div>{data?.title}</div>
      <div dangerouslySetInnerHTML={{__html: data?.content}}/>
      <Button onClick={() => {props.history.push(`/admin/article/update/${props.match.params.id}`)}}>修改</Button>
      <QRCode
        id={'qrcode'}
        size={200}
        value={window.location.href}
        onClick={onClick}
      />
    </Card>
  )
};

export default Index;

