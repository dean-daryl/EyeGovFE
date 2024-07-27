import FroalaEditorComponent from 'react-froala-wysiwyg';
import '../../node_modules/froala-editor/css/froala_style.min.css';
import '../../node_modules/froala-editor/css/froala_editor.pkgd.min.css';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

type Props = {
  onEditorChange: (content: string) => void;
};

function EditorComponent({ onEditorChange }: Props) {
  const { content } = useSelector((state: RootState) => state.article);

  const handleModelChange = (newContent: string) => {
    onEditorChange(newContent);
  };

  const handleImageUpload = async (files: FileList, editor: any) => {
    const file = files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'upload_preset',
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
    );

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
        }/image/upload`,
        {
          method: 'POST',
          body: formData,
        },
      );
      const data = await response.json();
      const imageUrl = data.secure_url;
      console.log('Image URL:', imageUrl);
      editor.image.insert(imageUrl, null, null, editor.image.get());
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    }
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
