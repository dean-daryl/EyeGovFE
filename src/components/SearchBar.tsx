import search from '../assets/search.svg';

type Props = {};

function SearchBar({}: Props){

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 border border-gray-300 rounded-md pl-8 focus:outline-none"
      />
      <img src={search} alt="search" className="absolute left-[255px] top-[42px] w-5 h-5" />
    </div>
  );
};

export default SearchBar;
