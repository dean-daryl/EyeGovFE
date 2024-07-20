import React from 'react';
import FroalaEditorComponent from 'react-froala-wysiwyg';
type Props = {};

function RichTextEditor({}: Props) {
  return (
    <div>
      <FroalaEditorComponent tag="textarea" />
    </div>
  );
}

export default RichTextEditor;
