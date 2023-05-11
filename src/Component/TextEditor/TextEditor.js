import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TextEditor({content, setContent}) {
  // const [content, setContent] = useState('');

  const handleEditorChange = (value) => {
    setContent(value);
  };

  return (
    <div className='pb-5'>
      <ReactQuill
        value={content}
        onChange={handleEditorChange}
        modules={{
          toolbar: {
            container: [
              [{ 'header': [1, 2, false] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              ['link', 'image'],
              ['clean']
            ]
          }
        }}
        style={{ height: '300px'}}
      />
    </div>
  );
}

export default TextEditor;
