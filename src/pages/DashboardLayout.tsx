import SideBar from '../components/SideBar';
import search from '../assets/search.svg';
import NewArticleCard from '../components/NewArticleCard';
import ArticleCard from '../components/ArticleCard';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, useTypedSelector } from '../store/store';
import { setArticles } from '../slices/articlesReducer';
import toast from 'react-hot-toast';

type Props = {};

function DashboardLayout({}: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const { articles } = useTypedSelector((state) => state.articles);
  type Article = {
    id: string;
    title: string;
    description: string;
    cover: string;
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/articles`,
          {
            method: 'GET',
          },
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Article[] = await response.json();
        dispatch(setArticles(data));
      } catch (error) {
        toast.error('Failed to fetch articles');
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="flex">
      <div className="sticky top-0 h-[100vh] overflow-y-auto">
        <SideBar />
      </div>
      <div className="flex-1 overflow-y-auto">
        {/* Welcome message */}
        <div className="p-5 border-t border-gray-100 ml-3 mr-3 mt-3 mb-0 bg-white rounded-t-md">
          <h1 className="text-2xl mb-5">Welcome back Richard 🎉!</h1>
          <hr />
        </div>
        <div className="p-5 border-gray-100 ml-3 mr-3 mb-0 bg-white">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="py-1 w-[300px] text-sm border border-gray-300 rounded-md pl-8 focus:outline-none"
            />
            <img
              src={search}
              alt="search"
              className="absolute left-[282px] top-[132px] w-4 h-4"
            />
          </div>
        </div>
        <div className="p-5 border-gray-100 ml-3 mr-3 mb-0 bg-white">
          <NewArticleCard />
        </div>
        {/* Main content */}
        <div className="flex flex-wrap gap-5 p-5 border-gray-100 ml-3 mr-3 mb-0 bg-white h-[80vh]">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              description={article.description}
              cover={article.cover}
              createdAt={article.createdAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
