import search from '../assets/search.svg';

type Props = {};

function SearchBar({}: Props){

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="w-[100px] text-sm pl-2 md:w-[200px] md:px-4 py-2 border border-gray-300 rounded-md md:pl-8 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
