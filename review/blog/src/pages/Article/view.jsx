/**
 * Created by icon on 2021/3/12
 */
import React, {useEffect} from 'react';
import { Card, Button, Row, Col } from 'antd';
import { useRequest } from 'ahooks';
import { articleInfo } from './services';
import 'react-quill/dist/quill.snow.css';

var QRCode = require('qrcode.react');
const Index = (props) => {
  const { run, data, loading } = useRequest(articleInfo, {
    manual: true,
    onSuccess(res) {
      document.title=res.title;
        // 生成二维码
      console.log(`${window.location.protocol}//${window.location.host}`)
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
    return canvas.toDataURL("image/png");
  };
  if (loading) return null;
  return (
    <Card>
      <div>{data?.title}</div>
      <div className="ql-container ql-snow">
        <div className="ql-editor" dangerouslySetInnerHTML={{__html: data?.content}}/>
      </div>
      <Row type="flex" justify="center" align="middle" style={{marginTop: 12}}>
        <Col>
          <Button type="primary" onClick={() => {props.history.push(`/article/update/${props.match.params.id}`)}}>修改</Button>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="middle" style={{marginTop: 12}}>
        <Col>
          <QRCode
            id={'qrcode'}
            size={200}
            value={`${window.location.protocol}//${window.location.host}/view/${props.match.params.id}`}
            onClick={onClick}
          />
        </Col>
      </Row>
    </Card>
  )
};

export default Index;

