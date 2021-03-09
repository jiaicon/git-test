/**
 * Created by icon on 2021/3/5
 */
import React, {useEffect, useState} from 'react';
import request from '@/utils/request';

const Index = () => {

  useEffect(() => {
    console.log('userInfo', window.userInfo);
    request({
      method: 'GET',
      url: '/api/user'
    }).then(res => {
      console.log(res);
    }).catch(err => {});
    return () => {

    }
  }, []);

  return (
    <div>

    </div>
  )
};

export default Index;

