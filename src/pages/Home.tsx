import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import FeaturedComponent from '../components/FeaturedComponent';
import MiniBlog from '../components/MiniBlog';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import toast from 'react-hot-toast';
import Loader from '../components/Loader';

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
    fullName: string;
    avatar: string;
  };
};
function Home({}: Props) {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [sportsArticles, setSportsArticles] = useState<Article[]>([]);
  const [businessArticles, setBusinessArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
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
        setArticles(data);
        setIsLoading(false);
      } catch (error) {
        toast.error('Error fetching articles');
      }
    };
    const fetchSportArticles = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/articles/category/Sports`,
          {
            method: 'GET',
          },
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Article[] = await response.json();
        setSportsArticles(data);
      } catch (error) {
        toast.error('Error fetching articles');
      }
    };
    const fetchBusinessArticles = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/articles/category/Business`,
          {
            method: 'GET',
          },
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Article[] = await response.json();
        setBusinessArticles(data);
      } catch (error) {
        toast.error('Error fetching articles');
      }
    };
    fetchArticles();
    fetchSportArticles();
    fetchBusinessArticles();
  }, []);
  return (
    <div className="w-[100%]">
      <NavBar onLogin={() => setIsLoginVisible(true)} />
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full pt-[40vh]">
          <Loader />
        </div>
      ) : (
        <div>
          <div>
            <h1 className="trending pt-10 pb-6 text-3xl text-center font-bold">
              Trending Articles
            </h1>
          </div>
          <div>
            <FeaturedComponent
              key={articles[0]?.id}
              id={articles[0]?.id}
              title={articles[0]?.title}
              description={articles[0]?.description}
              cover={articles[0]?.cover}
              author={articles[0]?.author}
              categories={articles[0]?.categories}
              createdAt={articles[0]?.createdAt}
            />
          </div>

          {/* blog Cards */}
          <div className="px-[50px] pt-[80px] md:px-[100px] flex justify-center items-center w-[100%] md:pt-[80px]">
            <div className="flex flex-col items-center justify-center  sm:grid sm:grid-cols-3 sm:gap-[80px] ">
              {articles.map((article) => (
                <BlogCard
                  key={article.id}
                  id={article.id}
                  title={article.title}
                  description={article.description}
                  cover={article.cover}
                  author={article.author}
                  categories={article.categories}
                  createdAt={article.createdAt}
                />
              ))}
            </div>
          </div>
          {/* blogs by category */}
          <div className=" flex-col md:items-start  md:px-[100px] flex md:flex-row  md:justify-start gap-10">
            <div className="px-10 md:w-[50%]">
              <div>
                <h2 className="categoryName font-bold text-2xl">Sports</h2>
              </div>
              <div>
                {sportsArticles.map((article) => (
                  <MiniBlog
                    key={article?.id}
                    id={article?.id}
                    title={article?.title}
                    description={article?.description}
                    cover={article?.cover}
                    author={article?.author}
                    categories={article?.categories}
                    createdAt={article?.createdAt}
                  />
                ))}
                {/* <MiniBlog />
            <MiniBlog /> */}
              </div>
            </div>
            <div className="px-10 md:w-[50%]">
              <div>
                <h2 className="categoryName font-bold text-2xl font-poppins">
                  Business
                </h2>
              </div>
              <div>
                <div>
                  {businessArticles.map((article) => (
                    <MiniBlog
                      key={article?.id}
                      id={article?.id}
                      title={article?.title}
                      description={article?.description}
                      cover={article?.cover}
                      author={article?.author}
                      categories={article?.categories}
                      createdAt={article?.createdAt}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Most Popular blogs */}
          {/* <div className="flex justify-center items-center">
        <Blog />
      </div> */}
          {/*Subscribe to our news letter */}
          <div className="flex justify-center items-center py-10 bg-slate-200">
            <div className="flex flex-col items-center">
              <h1 className="text-xl md:text-3xl font-bold">
                Subscribe to our newsletter
              </h1>
              <p className=" text-center px-2 md:text-left md:px-0 text-gray-500 text-sm py-3">
                Get the latest news from my blog and exclusive content straight
                to your inbox.
              </p>
              <div className="gap-1 flex items-center md:gap-3">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="border-2 border-gray-300 p-2 rounded-md focus:outline-none"
                />
                <Link to={'/dashboard'}>
                  <button className="bg-[#f79918] text-white px-4 py-2 rounded-lg">
                    Subscribe
                  </button>
                </Link>
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

export default Home;
