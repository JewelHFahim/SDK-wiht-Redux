import React, { useRef } from 'react';
import { Editor } from 'tinymce';
// import { Editor } from '@tinymce/tinymce-react';

const TyniMCE = ({ setTynimce }) => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      setTynimce(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey='your-api-key'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 400,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
    </>
  );
}

export default TyniMCE;