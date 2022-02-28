/**
 * Created by icon on 2021/3/12
 */
import React, {useEffect, useState, useRef} from 'react';
import { Card, Button, Input, message, Row, Col } from 'antd';
import { useRequest } from 'ahooks';
import { articleInfo, updateArticle } from './services';
import Editor from '@/components/Editor';

const Update = (props) => {
  const titleRef = useRef();
  const editorRef = useRef();

  const [value, setValue] = useState('');
  const { run: create } = useRequest(updateArticle, {
    manual: true,
    onSuccess: (result, params) => {
      if (result) {
        setValue(result.content);
        message.success('修改成功')
      } else {
        message.error('修改失败')
      }
    },
  });

  const { run, data, loading } = useRequest(articleInfo, {
    manual: true,
    onSuccess: (result) => {
      if (result) {
        titleRef.current.state.value = result.title;
        document.title=result.title;
        setValue(result.content);
      }
    }
  });

  useEffect(() => {
    run(props.match.params.id);
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
      create({
        id: props.match.params.id,
        title,
        content,
      });
    });
  };
  return (
    <Card>
      <Input ref={titleRef} placeholder={'请输入标题'} />
      <Editor
        initialValues={value}
        ref={editorRef}
        theme="snow"
      />
      <Row type="flex" justify="center" align="middle" style={{marginTop: 12}}>
        <Col>
          <Button onClick={submit}>提交</Button>
        </Col>
      </Row>
    </Card>
  )
};

export default Update;
