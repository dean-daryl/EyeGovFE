import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import avatar from '../assets/avatar.svg';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import Login from '../components/Login';
import Register from '../components/Register';
import {useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import applaud from '../assets/applaud.svg';
import toast from 'react-hot-toast';
import { formatDate } from '../utils/formatDate';
type Props = {};
type Article = {
  id: string;
  title: string;
  description: string;
  cover: string;
  content: string;
  categories: string[];
  createdAt: string;
  applause: number;
  author: {
    name: string;
    avatar: string;
  };
};
type Review = {
  id: string;
  content: string;
  createdAt: string;  
  user: {
    fullName: string;
    avatar: string;
  };
}
type Reviews ={
  id: string;
  content: Review [];
}
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
  const [articles, setArticle] = useState<Article>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [content, setContent] = useState('');
  const [applause, setApplause] = useState(articles?.applause);
  const handleApplaud = async (id: string) => {
    setApplause(applause && applause + 1);
    const respone = await fetch(`${import.meta.env.VITE_BASE_URL}/articles/${id}/applause?numberOfApplause=1`, 
      {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if(respone.ok){
      toast.success('Applauded');
    }
    else{
      toast.error('Whoops! Something went wrong😯');
    }
  }
  const handleReview =  async () => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/reviews`, 
      {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        articleId: id,
        content,
        userId: localStorage.getItem('user_id'),

      }),
      })
      if(response.ok){
        toast.success('Review added');
        setContent('');
        setReviews([await response.json(), ...reviews]);
      }
      }
  const checkAuthStatus =  async () => {
    if(!localStorage.getItem('token')){
      setIsLoginVisible(true);
    }
  }
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
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
        setApplause(data.applause);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };
    const fetchReviews = async() => {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/reviews/article/${id}?pageNumber=1&pageSize=10`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      });
      if(response.ok){
        const data: Reviews = await response.json();
        console.log(data?.content)
        setReviews(data?.content);
      }

      }
    fetchReviews();
    fetchArticle();
  }, []);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <NavBar onLogin={() => setIsLoginVisible(true)} />
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full pt-[40vh]">
          <Loader />
        </div>
      ) : (
        <div>
          <div>
            <div className="flex flex-col items-center bg-white p-10">
              {/* Author information */}
              <div className="text-center">
                <img
                  src={avatar}
                  alt="Author"
                  className="rounded-full bg-auto w-24 h-24 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">Sergy Campbell</h3>
                <p className="text-gray-600">
                  {formatDateToFull(articles?.createdAt)}
                </p>
              </div>
              {/* ARTICLE */}
              <h1 className="text-xl md:text-4xl font-bold mt-6 md:w-[68%] md:text-center">
                {articles?.title}
              </h1>
              <p className="text-lg text-gray-600 mt-4 md:w-[50%] md:text-center">
                {articles?.description}
              </p>
              <div className="mt-6">
                <img
                  src={articles?.cover}
                  alt="Article"
                  className="md:w-[696px] md:h-[447px]"
                />
              </div>
              <div className="md:w-[65%] mt-10  text-sm">
                <FroalaEditorView model={articles?.content} />
              </div>
              {/* Review Section */}
              <div className='w-[65%]'>

              <div className='flex items-center justify-between'>
                <h2 className="text-2xl font-semibold mt-10">Reviews</h2>               
              <div className='flex items-center gap-2'>
                <p className='font-bold text-md'>{applause}</p>
                <img src={applaud} alt="" className='w-[40px] h-[40px] cursor-pointer' onClick={() => id && handleApplaud(id)}/>

              </div>
              </div>
              <div className='mb-8'>
                <div className='flex gap-5 mt-10 px-9'>
                <img src={avatar} alt="" className='w-[30px] h-[30px]' />
                <div className='flex flex-col w-full gap-2'>
                <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder='Add your review' className='border border-gray-300 rounded-md w-[70%] h-[70px] px-5 py-1 focus:outline-none' onClick={checkAuthStatus} />  
                <button className="bg-[#f79918] text-white text-sm font-bold w-[15%] py-2 px-4 rounded" onClick={handleReview}>
                  Add Review
                </button>
                </div>
                </div>            
                
              </div>
              {reviews.map((review) => (

                <div key={review.id} className='border border-gray-300 px-5 py-3 m-3'>
                <div className="flex items-center mt-4" >
                  <img
                    src={avatar}
                    alt="Author"
                    className="rounded-full bg-auto w-12 h-12"
                  />
                  <div className="ml-4 flex items-center gap-4">
                    <h3 className="text-lg font-semibold">{review.user.fullName}</h3>
                    <p className='text-gray-900'>-</p>
                    <p className="text-gray-600">{formatDate(review.createdAt)}</p>
                  </div>
                </div>
                <p className="text-md text-gray-600 mt-4 w-[60%]">
                  {review.content}
                </p>
                </div>
               )
              )}

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
      )}
    </div>
  );
}
