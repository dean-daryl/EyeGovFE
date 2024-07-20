import React from 'react';
import user from '../assets/user.svg';
import dashboard from '../assets/dashboard.svg';
import notification from '../assets/notifications.svg';
import sports from '../assets/sports.svg';
import business from '../assets/business.svg';
import politics from '../assets/politics.svg';
import orange from '../assets/orange.svg';
import yellow from '../assets/yellow.svg';
import settings from '../assets/settings.svg';
import logout from '../assets/logout.svg';
import close from '../assets/close.svg';
import { Link } from 'react-router-dom';
const SideBar: React.FC = () => {
  return (
    <>
      <div>
        <div className="sticky top-0 py-4  flex items-center justify-between  bg-slate-50 w-[240px]">
          <div className="logo font-[1000] text-2xl px-[40px] z-50">
            <Link to={'/'}>
              {' '}
              <h2>EYEGOV</h2>
            </Link>
          </div>
          <div className="px-5">
            <img src={close} alt="" className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
        {/* Dashboard */}
        <div className=" flex flex-col gap-5 w-fit py-4 px-[30px] bg-slate-50">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className=" px-3 py-2 border border-gray-300 rounded-md  focus:outline-none w-[180px] h-[30px] text-sm "
            />
          </div>
          <ul className="flex flex-col gap-4">
            <Link to={'/dashboard'}>
              <li className="menu-item flex gap-3 pt-2 px-2 cursor-pointer rounded-sm  w-[180-px] h-[30px] text-sm">
                <span>
                  <img src={dashboard} alt="user" className="w-5 h-5" />
                </span>
                Dashboard
              </li>
            </Link>
            <li className="menu-item flex gap-3 pt-2 px-2 cursor-pointer rounded-sm  w-[180px] h-[30px] text-sm">
              <span>
                <img src={notification} alt="user" className="w-5 h-5" />
              </span>
              Notification
            </li>
            <li className="menu-item flex gap-3 pt-2 px-2 cursor-pointer rounded-sm  w-[180px] h-[30px] text-sm ">
              <span>
                <img src={user} alt="user" className="w-4 h-4" />
              </span>
              Users
            </li>
          </ul>
          {/* Tags */}

          <div className="text-sm text-gray-600  mr-0 mt-5 ">
            <h2> Tags</h2>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="menu-item flex gap-3 pt-2 px-2 cursor-pointer rounded-sm  w-[180-px] h-[30px] text-sm">
              <span>
                <img src={sports} alt="user" className="w-5 h-5" />
              </span>
              Sports
            </li>
            <li className="menu-item flex gap-3 pt-2 px-2 cursor-pointer rounded-sm  w-[180px] h-[30px] text-sm">
              <span>
                <img src={business} alt="user" className="w-5 h-5" />
              </span>
              Business
            </li>
            <li className="menu-item flex gap-3 pt-2 px-2 cursor-pointer rounded-sm  w-[180px] h-[30px] text-sm ">
              <span>
                <img src={politics} alt="user" className="w-4 h-4" />
              </span>
              Politics
            </li>
          </ul>
          <div className="text-sm text-gray-600  mr-0 mt-5 ">
            <h2>Top</h2>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="menu-item flex gap-3 pt-2 px-2 cursor-pointer rounded-sm  w-[18-px] h-[30px] text-sm">
              <span>
                <img src={orange} alt="user" className="w-4 h-5" />
              </span>
              Trending
            </li>
            <li className="menu-item flex gap-3 pt-2 px-2 cursor-pointer rounded-sm  w-[180px] h-[30px] text-sm">
              <span>
                <img src={yellow} alt="user" className="w-4 h-5" />
              </span>
              Most Liked
            </li>
          </ul>
          <div className="pt-5">
            <div className="flex gap-2 px-2 cursor-pointer text-sm">
              <img src={settings} alt="settings" className="w-5 h-5" />
              <h3>Settings</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center bg-slate-50  w-[220px] ">
          <div className=" border-t border-gray-300  w-[200px]"></div>
        </div>
        {/* User */}
        <div>
          <div className="flex justify-between bg-slate-50 w-[240px] px-[12px] py-4">
            <div className="flex gap-3">
              <img src={user} alt="" className="w-5 h-5" />
              <h3 className="text-sm">Richard Brown</h3>
            </div>
            <div>
              <img src={logout} alt="" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
