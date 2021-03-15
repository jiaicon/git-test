/**
 * Created by icon on 2021/3/12
 */
import React, {useEffect, useRef} from 'react';
import { Card, Button, Input, message, Row, Col } from 'antd';
import { useRequest } from 'ahooks';
import { createArticle } from './services';
import { history } from "umi";
import uploadImage from '@/utils/uploadImage';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.core.css';
import 'react-quill/dist/quill.snow.css';

const Create = () => {
  const quillRef = useRef();
  const titleRef = useRef();
  const { run } = useRequest(createArticle, {
    manual: true,
    onSuccess: (result, params) => {
      if (result) {
        message.success('新建成功');
        history.push('/article/list');
      } else {
        message.error('新建失败')
      }
    },
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
    return () => {

    }
  }, []);
  const submit = () => {
    run({
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
        modules={{...modules,}}
        formats={formats}
        className=" ql-editor"
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


