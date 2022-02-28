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
    onSuccess(result) {
      // 生成二维码
      document.title=result.title;
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

