import React, { useState } from 'react';
import search from '../assets/search.svg';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="px-4 py-2 border border-gray-300 rounded-md pl-8 focus:outline-none"
      />
      <img src={search} alt="search" className="absolute left-[255px] top-[42px] w-5 h-5" />
    </div>
  );
};

export default SearchBar;
