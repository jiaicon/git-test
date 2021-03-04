/**
 * Created by icon on 2021/3/4
 */
import React, {useEffect} from 'react';
import BGParticle from './../../utils/BGParticle'

const Index = () => {
  useEffect(() => {
    const background = new BGParticle('backgroundBox');
    background.init();
    return () => {

    }
  }, []);

  return (
    <div>
      <div id='backgroundBox' style={styles.backgroundBox} />
    </div>
  )
};

const styles = {
  backgroundBox: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    backgroundImage: 'url(https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/bg1.jpg?raw=true)',
    backgroundSize: '100% 100%',
    transition:'all .5s'
  },
};

export default Index;

