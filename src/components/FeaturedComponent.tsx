import React from 'react';
import picture from '../assets/blob.jpeg';

type Props = {};

function FeaturedComponent({}: Props) {
  return (
    <div className="w-[100%] px-[100px] flex gap-5 py-[50px]">
      <div>
        <img
          src={picture}
          alt="picture"
          className="w-[650px] h-[385px] border-red-100 rounded-md"
        />
      </div>
      <div className="flex justify-center flex-col px-3 ">
        {/* CATEGORY AND DATE */}
        <div className="flex">
          <p className="font-bold "> Business, Travel</p>
          <p className="text-gray-500">-</p>
          <p className="text-gray-500"> July 2, 2020</p>
        </div>
        {/* Title */}
        <div>
          <h1 className="text-5xl font-bold py-5">
            Your most unhappy customers are your greatest source of learning.{' '}
          </h1>
        </div>
        {/* Description */}
        <div className="text-gray-500">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </div>
        {/* Author Section */}
        <div>
          <div className="flex items-center py-5">
            <img
              src={picture}
              alt="picture"
              className="w-10 h-10 rounded-full"
            />
            <div className="pl-3">
              <p className="font-medium">John Doe</p>
              <p className="text-gray-500">Author</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedComponent;
