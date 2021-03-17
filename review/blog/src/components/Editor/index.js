/**
 * Created by icon on 2021/3/16
 */
import React, {useEffect, forwardRef, useRef, useImperativeHandle} from 'react';
import { DashOutlined, MinusOutlined, ColumnHeightOutlined, VerticalAlignMiddleOutlined } from '@ant-design/icons';
import ReactQuill, { Quill } from 'react-quill';
import uploadImage from '@/utils/uploadImage';
import 'react-quill/dist/quill.core.css';
import 'react-quill/dist/quill.snow.css';
import './line';
import './space';

const Index = (props, ref) => {
  const { initialValues='' } = props;
  const quillRef = useRef();

  const getContent = async () => {
    return new Promise((resolve, reject) => {
      resolve(quillRef.current.state.value)
    })
  };
  useEffect(() => {
    return () => {

    }
  }, []);
  useImperativeHandle(ref, () => ({
    getContent,
  }));
  const CustomerToolbar = () => (
    <div id="custom-toolbar">
      <span className="ql-formats">
        <select className="ql-size ql-picker" defaultValue={'normal'}>
          <option value="small" />
          <option value="normal" />
          <option value="large" />
          <option value="huge" />
        </select>
      </span>
      <span className="ql-formats">
        <select className="ql-font ql-picker">
          <option value="sans serif" />
          <option value="serif" />
          <option value="monospace" />
        </select>
      </span>
      <span className="ql-formats">
        <select className="ql-header ql-picker" defaultValue={false}>
          <option value="1" />
          <option value="2" />
          <option value="3" />
          <option value="4" />
          <option value="5" />
          <option value="6" />
          <option value={false} />
        </select>
      </span>
      <span className="ql-formats">
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button className="ql-strike" />
      </span>
      <span className="ql-formats">
        <select className="ql-align ql-picker ql-icon-picker">
          <option value="" />
          <option value="center" />
          <option value="right" />
          <option value="justify" />
        </select>
      </span>
      <span className="ql-formats">
        <button className="ql-indent" value={"-1"} />
        <button className="ql-indent" value={"+1"} />
      </span>
      <span className="ql-formats">
        <button className="ql-direction" value={"rtl"} />
      </span>
      <span className="ql-formats">
        <button className="ql-script" value="sub" />
        <button className="ql-script" value="super" />
      </span>
      <span className="ql-formats">
        <button className="ql-blockquote" />
        <button className="ql-code-block" value="super" />
      </span>
      <span className="ql-formats">
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
      </span>
      <span className="ql-formats">
        <select className="ql-color ql-picker ql-color-picker">
          <option value="" />
          <option value="#e60000" />
          <option value="#ff9900" />
          <option value="#008a00" />
          <option value="#0066cc" />
          <option value="#9933ff" />
          <option value="#ffffff" />
          <option value="#facccc" />
          <option value="#ffebcc" />
          <option value="#ffffcc" />
          <option value="#cce8cc" />
          <option value="#cce0f5" />
          <option value="#ebd6ff" />
          <option value="#bbbbbb" />
          <option value="#f06666" />
          <option value="#ffc266" />
          <option value="#ffff66" />
          <option value="#66b966" />
          <option value="#66a3e0" />
          <option value="#c285ff" />
          <option value="#888888" />
          <option value="#a10000" />
          <option value="#b26b00" />
          <option value="#b2b200" />
          <option value="#006100" />
          <option value="#0047b2" />
          <option value="#6b24b2" />
          <option value="#444444" />
          <option value="#5c0000" />
          <option value="#663d00" />
          <option value="#666600" />
          <option value="#003700" />
          <option value="#002966" />
          <option value="#3d1466" />
        </select>
      </span>
      <span className="ql-formats">
        <button className="ql-image" />
        <button className="ql-video" />
        <button className="ql-link" />
        <button className="ql-space" value="+1">
          <ColumnHeightOutlined style={{fontSize: 18}} />
        </button>
        <button className="ql-space" value="-1">
          <VerticalAlignMiddleOutlined style={{fontSize: 18}} />
        </button>
      </span>
      <span className="ql-formats">
        <button className="ql-line-solid" value="line-solid" >
          <MinusOutlined style={{fontSize: 18}} />
        </button>
        <button className="ql-line-dashed" value="line-dashed">
          <DashOutlined style={{fontSize: 18}} />
        </button>
      </span>
      <span className="ql-formats">
        <button className="ql-clean" />
      </span>
    </div>
  );
  const buttonLine = async (v) => {
    const quillEditor = quillRef.current.getEditor();
    quillEditor.format(v);
    const range = quillEditor.getSelection();
    quillEditor.insertEmbed(range.index, v, '');
    quillEditor.setSelection(range.index + 1,range.index + 2, 'silent');
  };
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
  const addSpace = async (v) => {
    const quillEditor = quillRef.current.getEditor();
    let range = quillEditor.getSelection();
    let formats = quillEditor.getFormat(range);
    let space = parseInt(formats.space || 0);
    if (v === '+1' || v === '-1') {
      let modifier = (v === '+1') ? 1 : -1;
      if (formats.direction === 'rtl') modifier *= -1;
      quillEditor.format('space', space + modifier, Quill.sources.USER);
    }
  };
  const modules = {
    toolbar: {
      container: "#custom-toolbar",
      handlers: {
        image: imageHandler,
        space: addSpace,
        'line-solid': (v) => {
          buttonLine(v);
        },
        'line-dashed': v => {
          buttonLine(v);
        }
      }
    },
  };
  return (
    <React.Fragment>
      <CustomerToolbar />
      <ReactQuill
        theme="snow"
        ref={quillRef}
        value={initialValues}
        modules={{...modules}}
        className=" ql-editor"
      />
    </React.Fragment>
  )
};

export default forwardRef(Index);

