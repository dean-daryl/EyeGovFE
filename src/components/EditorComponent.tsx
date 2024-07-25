import { useState } from 'react';

import '../../node_modules/froala-editor/css/froala_style.min.css';

import '../../node_modules/froala-editor/css/froala_editor.pkgd.min.css';


import FroalaEditorComponent from 'react-froala-wysiwyg';

function EditorComponent() {
  const [content, setContent] = useState('');

  return (
    <div className="editor w-[80%]">
      <FroalaEditorComponent
        tag="textarea"
        model={content}
        onModelChange={setContent}
      />
    </div>
  );
}

export default EditorComponent;
