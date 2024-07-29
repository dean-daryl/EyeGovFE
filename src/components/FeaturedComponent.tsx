import { Link } from 'react-router-dom';
import picture from '../assets/avatar.svg';
import { formatDate } from '../utils/formatDate';

type Props = {
  id: string;
  title: string;
  description: string;
  cover: string;
  categories: string[];
  createdAt: string;
  author: {
    fullName: string;
    avatar: string;
  };
};

function FeaturedComponent({
  id,
  title,
  description,
  cover,
  categories,
  createdAt,
  author,
}: Props) {
  return (
    <Link to={`${id}`}>
      <div className="w-[100%] items-center md:items-start md:px-[100px] flex flex-col md:flex-row gap-5 md:py-[50px]">
        <div>
          <img
            src={cover}
            alt="picture"
            className="w-[300px] md:w-[650px] md:h-[385px] border-red-100 rounded-md object-cover"
          />
        </div>
        <div className="flex justify-center flex-col px-3 ">
          {/* CATEGORY AND DATE */}
          <div className="flex justify-center md:justify-start">
            <p className="font-bold ">
              {categories?.[0]}, {categories?.[1]}
            </p>
            <p className="text-gray-500">-</p>
            <p className="text-gray-500">{formatDate(createdAt)}</p>
          </div>
          {/* Title */}
          <div className="px-6 md:px-0">
            <h1 className="text-xl md:text-5xl font-bold py-5">{title}</h1>
          </div>
          {/* Description */}
          <div className="px-6 md:px-0 text-gray-500">{description}</div>
          {/* Author Section */}
          <div>
            <div className="px-6 md:px-0 flex items-center py-5 cursor-default">
              <img
                src={picture}
                alt="picture"
                className="w-10 h-10 rounded-full"
              />
              <div className="pl-3">
                <p className="font-medium">{author?.fullName}</p>
                <p className="text-gray-500">Author</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FeaturedComponent;
