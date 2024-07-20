import React, { useState } from 'react';
import EditorComponent from '../components/EditorComponent';
import SideBar from '../components/SideBar';
import close from '../assets/close.svg';
import info from '../assets/info.svg';

type Props = {};

function RichTextEditor({}: Props) {
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState<string>('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    // Add other fields as needed
  });

  const handleCategoryAdd = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  const handleCategoryRemove = (categoryToRemove: string) => {
    setCategories(
      categories.filter((category) => category !== categoryToRemove),
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
            <form>
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
                  value={formData.title}
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
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter a description"
                  className="mt-1 px-2 block w-[50%] max-h-[80px] border border-gray-300 rounded-md focus:outline-none sm:text-sm"
                ></textarea>
              </div>

              <div className="mb-10">
                <label
                  htmlFor="category"
                  className="block  pb-2 text-sm font-medium text-gray-700"
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
                    onClick={handleCategoryAdd}
                    className="ml-2 px-3 py-1 w-[8%] h-7 text-sm bg-slate-100  rounded-md"
                  >
                    Add
                  </button>
                </div>
                <ul className="flex flex-wrap gap-3 mt-4">
                  {categories.map((category) => (
                    <li key={category} className="">
                      <div className="info bg-slate-300">
                        <div className="info__title">{category} </div>
                        <div className="info__close">
                          <img
                            onClick={() => handleCategoryRemove(category)}
                            src={close}
                            alt="w-5 h-5"
                          />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </form>
          </div>
          <EditorComponent />
        </div>
      </div>
    </div>
  );
}

export default RichTextEditor;
