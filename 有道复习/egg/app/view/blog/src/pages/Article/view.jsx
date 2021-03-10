/**
 * Created by icon on 2021/3/10
 */
import React, {useEffect} from 'react';
import { Card, Button } from 'antd';
import { useRequest } from 'ahooks';
import request from '@/utils/request';

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
    </Card>
  )
};

export default Index;

