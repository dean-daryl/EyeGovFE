import { useState } from 'react';
import NavBar from '../components/NavBar';
import FeaturedComponent from '../components/FeaturedComponent';
import MiniBlog from '../components/MiniBlog';
import BlogCard from '../components/BlogCard';
import Blog from '../components/Blog';
import { Link } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';

type Props = {};

function Home({}: Props) {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);

  return (
    <div className="">
      <NavBar onLogin={() => setIsLoginVisible(true)} />
      <div>
        <h1 className="trending pt-10 pb-6 text-3xl text-center font-bold">
          Trending
        </h1>
      </div>
      <FeaturedComponent />
      {/* blog Cards */}
      <div className="px-[100px] flex justify-center items-center">
        <div className="grid grid-cols-3 gap-4">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
      {/* blogs by category */}
      <div className="px-[100px] flex items-center justify-start gap-10">
        <div>
          <div>
            <h2 className="categoryName font-bold text-2xl font-poppins">
              Sports
            </h2>
          </div>
          <div>
            <MiniBlog />
            <MiniBlog />
          </div>
        </div>
        <div>
          <div>
            <h2 className="categoryName font-bold text-2xl font-poppins">
              Business
            </h2>
          </div>
          <div>
            <MiniBlog />
            <MiniBlog />
          </div>
        </div>
      </div>

      {/* Most Popular blogs */}
      <div className="flex justify-center items-center">
        <Blog />
      </div>
      {/*Subscribe to our news letter */}
      <div className="flex justify-center items-center py-10 bg-slate-200">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">Subscribe to our newsletter</h1>
          <p className="text-gray-500 text-sm py-3">
            Get the latest news from my blog and exclusive content straight to
            your inbox.
          </p>
          <div className="flex items-center gap-3">
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
  );
}

export default Home;
