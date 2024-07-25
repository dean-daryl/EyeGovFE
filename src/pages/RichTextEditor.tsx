import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import {
  setTitle,
  setDescription,
  addCategory,
  removeCategory,
  setCover,
  setContent,
  resetForm,
} from '../slices/singleArticleReducer';
import EditorComponent from '../components/EditorComponent';
import SideBar from '../components/SideBar';
import close from '../assets/close.svg';
import toast from 'react-hot-toast';

function RichTextEditor() {
  const [newCategory, setNewCategory] = React.useState('');
  const dispatch = useDispatch<AppDispatch>();
  const { title, description, categories, cover, content } = useSelector(
    (state: RootState) => state.singleArticle,
  );

  const handleEditorChange = (newContent: string) => {
    dispatch(setContent(newContent));
  };

  const handleCategoryAdd = (newCategory: string) => {
    if (newCategory) {
      dispatch(addCategory(newCategory));
    }
  };

  const handleCategoryRemove = (categoryToRemove: string) => {
    dispatch(removeCategory(categoryToRemove));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (name === 'title') dispatch(setTitle(value));
    if (name === 'description') dispatch(setDescription(value));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
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
        dispatch(setCover(imageUrl));
      } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/articles`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title,
            description,
            categories,
            cover,
            content,
            userId: localStorage.getItem('user_id'),
          }),
        },
      );

      if (response.ok) {
        const result = await response.json();
        console.log('Article created successfully:', result);
        toast.success('Article created successfully');
        window.location.href = '/dashboard';
        dispatch(resetForm()); // Reset form on success
        // Handle success, e.g., show a success message or redirect
      } else {
        console.error('Error creating article:', response.statusText);
        toast.error(response.statusText);
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error('Error creating article:', error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div>
      <div className="flex gap-[80px] bg-white">
        <div className="sticky top-0 h-[100vh] w-fit overflow-y-auto">
          <SideBar />
        </div>
        <div className="flex flex-col pt-[100px] overflow-y-auto bg-white w-[75%]">
          <div className="pb-10">
            <h2 className="text-3xl cursor-pointer underline font-bold">
              Add Article
            </h2>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block pb-1 text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleInputChange}
                  placeholder="Enter Title"
                  className="mt-1 px-2 block w-[50%] h-7 border border-gray-300 rounded-md focus:outline-none sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block pb-1 text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  value={description}
                  onChange={handleInputChange}
                  placeholder="Enter a description"
                  className="mt-1 px-2 block w-[50%] max-h-[80px] border border-gray-300 rounded-md focus:outline-none sm:text-sm"
                ></textarea>
              </div>
              <div className="mb-10">
                <label
                  htmlFor="category"
                  className="block pb-2 text-sm font-medium text-gray-700"
                >
                  Categories
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="Enter Category Name"
                    className="mt-1 px-2 block w-[50%] h-7 border border-gray-300 rounded-md focus:outline-none sm:text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => handleCategoryAdd(newCategory)}
                    className="ml-2 px-3 py-1 w-[8%] h-7 text-sm bg-slate-100 rounded-md"
                  >
                    Add
                  </button>
                </div>
                <ul className="flex flex-wrap gap-3 mt-4">
                  {categories.map((category) => (
                    <li key={category}>
                      <div className="info bg-slate-300">
                        <div className="info__title">{category}</div>
                        <div className="info__close">
                          <img
                            onClick={() => handleCategoryRemove(category)}
                            src={close}
                            alt="close"
                            className="w-5 h-5"
                          />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="cover"
                  className="block pb-1 text-sm font-medium text-gray-700"
                >
                  Cover Photo
                </label>
                <input
                  name="cover"
                  type="file"
                  onChange={handleFileChange}
                  className="mt-1 px-3 py-3 block w-[50%] max-h-[80px] border border-gray-300 rounded-md focus:outline-none sm:text-sm"
                />
              </div>
              <EditorComponent onEditorChange={handleEditorChange} />
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-[#f79918] px-4 py-2 text-white rounded-md my-4"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RichTextEditor;
