import { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

type Props = {};

function RichTextEditor({}: Props) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </div>
  );
}

export default RichTextEditor;
