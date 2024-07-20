import picture from '../assets/blob.jpeg';
import dean from '../assets/dean.jpg';

type Props = {};

function MiniBlog({}: Props) {
  return (
    <div className="flex w-[100%] gap-5 py-[50px]">
      <div>
        <img
          src={picture}
          alt="picture"
          className="w-[150px] h-[96px] border-red-100 rounded-md"
        />
      </div>
      <div className="px-3 ">
        {/* CATEGORY AND DATE */}
        <div className="flex text-sm pb-1">
          <p className="font-bold"> Business, Travel</p>
          <p className="text-gray-500">-</p>
          <p className="text-gray-500"> July 2, 2020</p>
        </div>
        {/* Title */}
        <div>
          <h1 className="text-xl font-[700]">
            Your most unhappy customers are your greatest source of learning.{' '}
          </h1>
        </div>
        
        {/* Author Section */}
        <div>
          <div className="flex items-center py-1">
            <img src={dean} alt="picture" className="w-8 h-8 rounded-full" />
            <div className="pl-3 text-xs">
              <p className="font-[700]">John Doe</p>
              <p className="text-gray-500">Author</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniBlog;
