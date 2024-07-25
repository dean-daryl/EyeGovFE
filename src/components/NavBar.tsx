import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import SocialMediaComponents from './SocialMediaComponents';

type Props = {
  onLogin: () => void;
};

function NavBar({onLogin}: Props) {
  return (
    <nav className="navbar flex items-center justify-between px-[100px] py-[30px] border">
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="logo font-[1000] text-2xl px-[40px] z-50">
        <Link to={'/'}>
          {' '}
          <h2>EYEGOV</h2>
        </Link>
      </div>
      <div className="social-icons">
        <SocialMediaComponents />
      </div>
      <div className="cursor-pointer" onClick={onLogin}>
        <button className="bg-[#f79918] text-white py-2 px-4 rounded cursor-pointer">
          Login
        </button>
      </div>
      <div className="burger-menu">
        <button className="text-2xl">&#9776;</button>
      </div>
    </nav>
  );
}

export default NavBar;
