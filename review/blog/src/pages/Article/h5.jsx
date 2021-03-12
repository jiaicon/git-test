/**
 * Created by icon on 2021/3/12
 */
import React, {useEffect, useState} from 'react';
import { useRequest } from 'ahooks';
import { Divider } from 'antd';
import { articleInfo } from './services';
import 'react-quill/dist/quill.snow.css';
import { browserRedirect } from '@/utils/utils';
import styles from './h5.less';

const Index = (props) => {
  const [ua, setUa] = useState('pc');
  const { run, data, loading } = useRequest(articleInfo, {
    manual: true,
    onSuccess() {
      // 生成二维码
      console.log(`${window.location.protocol}//${window.location.host}`)
    }
  });
  useEffect(() => {
    run(props.match.params.id);
    judgeUa();
    window.addEventListener('resize', judgeUa);
    return () => {
      window.removeEventListener('resize', judgeUa);
    }
  }, []);
  const judgeUa = () => {
    setUa(browserRedirect())
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
    <div className={styles.box}>
      <div className={`ql-container ql-snow ${styles.articleContainer}  ${ua === 'phone' ? styles.mobile : ''}`}>
        <h2 style={{fontWeight: 'bold'}}>{data?.title}</h2>
        <Divider />
        <div className="ql-editor" dangerouslySetInnerHTML={{__html: data?.content}}/>
      </div>
    </div>
  )
};

export default Index;

