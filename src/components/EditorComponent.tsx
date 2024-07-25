import { useState } from 'react';

import '../../node_modules/froala-editor/css/froala_style.min.css';

import '../../node_modules/froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';

type Props = {
  // Add props as needed
  onEditorChange: (content: string) => void;
};

function EditorComponent({ onEditorChange }: Props) {
  const [content, setContent] = useState('');

  const handleModelChange = (newContent: string) => {
    setContent(newContent);
    onEditorChange(newContent);
  };
  const handleImageUpload = (files: FileList, editor: any) => {

    const file = files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result as string;
      editor.image.insert(base64String, null, null, editor.image.get());
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="editor w-[80%]">
      <FroalaEditorComponent
        tag="textarea"
        model={content}
        onModelChange={handleModelChange}
        config={{
          imageUpload: true,
          imageDefaultAlign: 'left',
          placeholderText: 'Edit Your Content Here!',
          imageAllowedTypes: ['jpeg', 'jpg', 'png'],
          events: {
            'image.beforeUpload': function (images: any) {
              handleImageUpload(images, this);
              return false;
            },
          },
        }}
      />
    </div>
  );
}

export default EditorComponent;
