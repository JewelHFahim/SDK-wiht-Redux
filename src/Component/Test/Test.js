import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react';


const Test = () => {


    const [data, setData] = useState();
    
    const handleEditorChange = (e) => {
        setData(e.target.getContent());
    }

    return (
        <div>
            <h2>CKEditor 5 React App</h2>
            <Editor
                initialValue="<p>This is the initial content of the editor</p>"
                init={{
                    plugins: 'link image code',
                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                }}
                onChange={handleEditorChange}
            />
        </div>
    );
};

export default Test;