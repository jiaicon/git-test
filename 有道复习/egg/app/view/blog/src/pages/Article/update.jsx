/**
 * Created by icon on 2021/3/9
 */
import React, {useEffect, useState, useRef} from 'react';
import { Card, Button, Input, message } from 'antd';
import { useRequest } from 'ahooks';
import request from '@/utils/request';
import uploadImage from '@/utils/uploadImage';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.core.css';
import 'react-quill/dist/quill.snow.css';

const createArticle = (values) => {
  return new Promise((resolve, reject) => {
    const { id } = values;
    delete values.id;
    request({
      method: 'PUT',
      url: `/api/article/update/${id}`,
      data: values,
    }).then(res => {
      resolve(res);
    })
  })
};
const getArticle = (id) => {
  return new Promise((resolve, reject) => {
    request({
      method: 'GET',
      url: `/api/article/${id}`,
    }).then(res => {
      resolve(res);
    })
  })
};
const Update = (props) => {
  const quillRef = useRef();
  const titleRef = useRef();
  const [value, setValue] = useState('');
  const { run: create } = useRequest(createArticle, {
    manual: true,
    onSuccess: (result, params) => {
      if (result) {
        message.success('修改成功')
        
      } else {
        message.error('修改失败')
      }
    },
  });

  const { run, data, loading } = useRequest(getArticle, {
    manual: true,
    onSuccess: (result) => {
      if (result) {
        titleRef.current.state.value = result.title;
        setValue(result.content);
      }
    }
  });

  const imageHandler = async () => {
    const quillEditor = quillRef.current.getEditor();
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('file', file, file.name);
      const res = await uploadImage(formData);
      const range = quillEditor.getSelection();

      // this part the image is inserted
      // by 'image' option below, you just have to put src(link) of img here.
      quillEditor.insertEmbed(range.index, 'image', res);
    }
  };
  /*
   * Quill modules to attach to editor
   * See https://quilljs.com/docs/modules/ for complete options
   */
  const modules = {
    toolbar: {
      container: [
        [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
        [{ 'font': [] }],
        [{ 'header': 1 }, { 'header': 2 }],        // custom button values
        ['bold', 'italic', 'underline', 'strike'],    // toggled buttons
        [{ 'align': [] }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],     // outdent/indent
        [{ 'direction': 'rtl' }],             // text direction
        [{ 'script': 'sub' }, { 'script': 'super' }],   // superscript/subscript
        ['blockquote', 'code-block'],

        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'color': [] }, { 'background': [] }],
        ['image', 'video', 'link'],

        ['clean', ],
      ],
      handlers: {
        image: imageHandler,
      }
    },
  };
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  const formats = [
    "align",
    "header",
    "font",
    "size",
    "color",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "background",
    "list",
    "script",
    "bullet",
    "indent",
    "link",
    "image",
    "direction",
    "clean",
    "video"
  ];
  useEffect(() => {
    run(props.match.params.id);
    return () => {

    }
  }, []);
  const submit = () => {
    create({
      id: props.match.params.id,
      title: titleRef.current.state.value,
      content: quillRef.current.state.value,
    });
  };
  return (
    <Card>
      <Input ref={titleRef} placeholder={'请输入标题'} />
      <ReactQuill
        theme="snow"
        ref={quillRef}
        value={value}
        modules={{...modules,}}
        formats={formats}
        className="ql-editor"
      />
      <Button onClick={submit}>提交</Button>
    </Card>
  )
};

export default Update;

