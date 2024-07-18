import picture from '../assets/blob.jpeg';

type Props = {};

function Blog({}: Props) {
  return (
    <div className="gap-5 py-[50px]">
      <div>
        <img
          src={picture}
          alt="picture"
          className="w-[800px] h-[514px] border-red-100 rounded-md"
        />
      </div>
      <div className="justify-center  px-3 ">
        {/* CATEGORY AND DATE */}
        <div className="flex text-sm py-2">
          <p className="font-bold"> Business, Travel</p>
          <p className="text-gray-500">-</p>
          <p className="text-gray-500"> July 2, 2020</p>
        </div>
        {/* Title */}
        <div>
          <h1 className="text-lg font-[800] pb-4">
            Your most unhappy customers are your greatest source of learning.{' '}
          </h1>
        </div>
        {/* Description */}
        <div className="text-gray-500 text-sm">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </div>
        {/* Author Section */}
        <div>
          <div className="flex items-center py-5">
            <img src={picture} alt="picture" className="w-8 h-8 rounded-full" />
            <div className="pl-3 text-sm">
              <p className="font-[700]">John Doe</p>
              <p className="text-gray-500">Author</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
