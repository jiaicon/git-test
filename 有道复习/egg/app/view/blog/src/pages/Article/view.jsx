/**
 * Created by icon on 2021/3/10
 */
import React, {useEffect, useState} from 'react';
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
  const [image, setImage] = useState();
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
  if (loading) return null;
  return (
    <Card>
      <div>{data?.title}</div>
      <div dangerouslySetInnerHTML={{__html: data?.content}}/>
      <Button onClick={() => {props.history.push(`/admin/article/update/${props.match.params.id}`)}}>修改</Button>
      <QRCode
        size={200}
        value={window.location.href}
      />
    </Card>
  )
};

export default Index;

