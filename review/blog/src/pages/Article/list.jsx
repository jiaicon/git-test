/**
 * Created by icon on 2021/3/11
 */
import React, {useEffect, useState} from 'react';
import { Card, Table, Space, Popconfirm, message, Image, Modal } from 'antd';
import { Link } from 'umi';
import { useRequest } from 'ahooks';
import { getArticle, deleteArticle } from './services';

const qrImg = require('./qrcode.png');
const QRCode = require('qrcode.react');
const Index = () => {
  const [modal, setModal] = useState({
    visible: false,
    src: ''
  });
  const { run, data=[], loading } = useRequest(getArticle, {
    manual: true,
  });
  const { run: deleteThis } = useRequest(deleteArticle, {
    manual: true,
    onSuccess: (r) => {
      if (r) {
        message.success('删除成功');
        run();
      } else {
        message.success('删除失败');
      }
    }
  });
  useEffect(() => {
    run();
    return () => {

    }
  }, []);
  const confirm = (id) => {
    if (!id) return;
    deleteThis(id);
  };
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      render: (d, r) => <Link to={`/article/view/${r.id}`}>{d}</Link>
    },
    {
      title: '操作',
      key: 'operate',
      render: (d, r) => (<Space size="middle">
        <Link to={`/view/${r.id}`} className="ant-dropdown-link">
          查看
        </Link>
        <Popconfirm
          placement="top"
          title={'您确定要删除吗？'}
          onConfirm={() => {confirm(r.id)}}
          okText="确定"
          cancelText="取消"
        >
          <a>删除</a>
        </Popconfirm>
        <Link to={`/article/update/${r.id}`} className="ant-dropdown-link">
          编辑
        </Link>
        <Image
          width={20}
          height={20}
          preview={false}
          src={qrImg}
          style={{cursor: 'pointer'}}
          onClick={() => setModal({
            visible: true,
            src: `${window.location.protocol}//${window.location.host}/view/${r.id}`
          })}
        />
      </Space>),
    },
  ];
  return (
    <Card
      title={'文章列表'}
    >
      {/*<List*/}
      {/*  bordered*/}
      {/*  dataSource={data}*/}
      {/*  renderItem={(item, index) => (*/}
      {/*    <List.Item onClick={() => {props.history.push(`/admin/article/${item.id}`)}}>*/}
      {/*      {index + 1}. {item.title}*/}
      {/*    </List.Item>*/}
      {/*  )}*/}
      {/*/>*/}
      <Table
        rowKey={'id'}
        columns={columns}
        loading={loading}
        dataSource={data}
      />
      <Modal
        footer={false}
        onCancel={() => setModal({
          visible: false,
          src: ''
        })}
        width={'auto'}
        centered
        visible={modal.visible}
      >
        <QRCode
          id={'qrcode'}
          size={200}
          value={modal.src}
        />
      </Modal>
    </Card>
  )
};

export default Index;

