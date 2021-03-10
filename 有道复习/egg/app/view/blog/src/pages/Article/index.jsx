/**
 * Created by icon on 2021/3/10
 */
import React, {useEffect, useState} from 'react';
import { Card, List } from 'antd';
import { useRequest } from 'ahooks';
import request from '@/utils/request';

const getArticle = (values) => {
  return new Promise((resolve, reject) => {
    request({
      method: 'GET',
      url: `/api/article/list`,
      data: values,
    }).then(res => {
      resolve(res);
    })
  })
};
const Index = (props) => {
  const { run, data, loading } = useRequest(getArticle, {
    manual: true,
  });
  useEffect(() => {
    run();
    return () => {

    }
  }, []);
  return (
    <Card>
      <List
        header={<div>文章列表</div>}
        bordered
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item onClick={() => {props.history.push(`/admin/article/${item.id}`)}}>
            {index + 1}. {item.title}
          </List.Item>
        )}
      />
    </Card>
  )
};

export default Index;

