import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import dean from '../assets/dean.jpg';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import Login from '../components/Login';
import Register from '../components/Register';
import { useParams } from 'react-router-dom';
type Props = {};
type Article = {
  id: string;
  title: string;
  description: string;
  cover: string;
  content: string;
  categories: string[];
  createdAt: string;
  author: {
    name: string;
    avatar: string;
  };
};
export default function Blog({}: Props) {
  const formatDateToFull = (dateString: string | undefined): string => {
    if (dateString === undefined) return '';
    const date = new Date(dateString);

    // List of month names
    const monthNames: string[] = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    // Extract the day, month, and year
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  };
  const id = useParams<{ id: string }>().id;
  console.log(id);
  const [articles, setArticle] = useState<Article>();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/articles/${id}`,
          {
            method: 'GET',
          },
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Article = await response.json();
        setArticle(data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, []);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);

  return (
    <div>
      <NavBar onLogin={() => setIsLoginVisible(true)} />
      <div>
        <div className="flex flex-col items-center bg-white p-10">
          {/* Author information */}
          <div className="text-center">
            <img
              src={dean}
              alt="Author"
              className="rounded-full bg-auto w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Sergy Campbell</h3>
            <p className="text-gray-600">
              {formatDateToFull(articles?.createdAt)}
            </p>
          </div>
          {/* ARTICLE */}
          <h1 className="text-4xl font-bold mt-6 w-[68%] text-center">
            {articles?.title}
          </h1>
          <p className="text-lg text-gray-600 mt-4 w-[50%] text-center">
            {articles?.description}
          </p>
          <div className="mt-6">
            <img
              src={articles?.cover}
              alt="Article"
              className="w-[696px] h-[447px]"
            />
          </div>
          <div className="w-[65%] mt-10  text-sm">
            <FroalaEditorView  model={articles?.content} />
          </div>
        </div>
      </div>
      {/* Authorisation pop up */}
      <div
        className={`fixed mx-auto inset-0 flex justify-center items-center z-50 ${
          isLoginVisible || isRegisterVisible
            ? 'bg-black bg-opacity-25'
            : 'hidden'
        }`}
      >
        {isLoginVisible && (
          <div className=" p-4 rounded-lg">
            <Login
              onSignUp={() => {
                setIsRegisterVisible(true);
                setIsLoginVisible(false);
              }}
              onClose={() => setIsLoginVisible(false)}
            />
          </div>
        )}
        {isRegisterVisible && (
          <div>
            <Register
              onSignIn={() => {
                setIsLoginVisible(true);
                setIsRegisterVisible(false);
              }}
              onClose={() => setIsRegisterVisible(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
