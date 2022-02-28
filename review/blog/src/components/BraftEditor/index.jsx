/* eslint-disable */
import React, { useRef, useState } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import uploadImage from '@/utils/uploadImage';
import { message } from 'antd';

const Index = (props) => {
  const { value, onChange, width = '100%', id = 'braft_editor', height = 600 } = props;
  const [propValue, setPropValue] = useState('');
  const [editorState, setEditorState] = useState(BraftEditor.createEditorState(null));
  const [outputHTML, setOutputHTML] = useState(null);
  const editorRef = useRef();

  if (value && value !== propValue) {
    if (propValue === '') {
      // 上层传入的是字符串结构的数据，所以需要使用BraftEditor.createEditorState来包裹它
      setEditorState(BraftEditor.createEditorState(value));
      setPropValue(value);
    }
  }

  // 编辑器发生变化
  const handleChange = async (editorState) => {
    await setEditorState(editorState);
    await setOutputHTML(editorState.toHTML());
    onChange && onChange(editorState.toHTML());
  };

  const imageHandler = async param => {
    try {
      const file = param.file;
      const formData = new FormData();
      formData.append('file', file, file.name);
      const res = await uploadImage(formData);
      if (res.status === 0) {
        console.log(res)
        const link = window.apiHost ? `${window.apiHost}${res.data.value}` : res.data.url;
        param.progress(100) // 显示完成上传的进度条
        param.success({
          url: link,
          meta: {
            alt: res.data.name,
          },
        });
        const { getValue } = editorRef.current;
        handleChange(getValue());
      }
    } catch (error) {
      let msg = error + '，上传失败';
      message.error(msg);
    }
  };

  const changeImage = async file => {
    console.log(file)
  };
  const controls: any[] = [
    'bold',
    'text-color',
    'text-align',
    'list-ul', 'list-ol',
    'media',
    'clear'
  ];
  return (
    <div
      className='editor-wrapper'
      style={{ width: width, border: '1px solid #999999' }}
      id={id}
    >
      <BraftEditor
        ref={editorRef}
        value={editorState}
        onChange={handleChange}
        externals={false}
        controls={controls}
        contentStyle={{ height: 200, boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)' }}
        media={{
          accepts: {
            video: false,
            audio: false,
          },
          pasteImage: true,
          externals: {
            video: false,
            audio: false,
            embed: false,
          },
          uploadFn: imageHandler,
          onChange: changeImage
        }}
      />
    </div>
  )
};

export default Index;
