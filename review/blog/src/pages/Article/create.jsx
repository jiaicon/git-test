/**
 * Created by icon on 2021/3/12
 */
import React, {useEffect, useRef} from 'react';
import { Card, Button, Input, message, Row, Col } from 'antd';
import { useRequest } from 'ahooks';
import { createArticle } from './services';
import { history } from "umi";
import Editor from '@/components/Editor';

const Create = () => {
  const titleRef = useRef();
  const editorRef = useRef();
  const { run } = useRequest(createArticle, {
    manual: true,
    onSuccess: (result, params) => {
      if (result.status === 0) {
        message.success('新建成功');
        history.push('/article/list');
      } else {
        message.error(`新建失败，${result.msg}`)
      }
    },
  });

  useEffect(() => {
    return () => {

    }
  }, []);
  const submit = async () => {
    await editorRef.current.getContent().then((content) => {
      const title = titleRef.current.state.value;
      if (!title) {
        message.error('标题不能为空');
        return;
      }
      if (!content) {
        message.error('内容不能为空');
        return;
      }
      run({
        title,
        content,
      });
    });
  };
  return (
    <Card>
      <Input ref={titleRef} placeholder={'请输入标题'} />
      <Editor
        ref={editorRef}
        theme="snow"
      />
      <Row type="flex" justify="center" align="middle">
        <Col>
          <Button onClick={submit}>提交</Button>
        </Col>
      </Row>
    </Card>
  )
};

export default Create;


