/**
 * Created by icon on 2021/3/15
 */
import React, {useEffect, useState, useRef} from 'react';
import { Button, Card, Statistic } from 'antd';

const Index = () => {
  const a = useRef(1);
  const [num, setBum] = useState(0);
  useEffect(() => {
    return () => {

    }
  }, []);
  return (
    <Card>
      <Statistic title="Active Users" value={num} />
      <Statistic title="a" value={a.current} />
      <Button onClick={() => setBum(num + 1)}>点击</Button>
      <Button onClick={() => {a.current=10}}>设置为10</Button>
    </Card>
  )
};

export default Index;

