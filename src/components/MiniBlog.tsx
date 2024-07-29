import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.svg';
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

function MiniBlog({ id, title, cover, categories, createdAt, author }: Props) {
  return (
    <Link to={`/${id}`}>
      <div className="flex flex-col md:flex-row w-[100%] gap-5 py-[50px]">
        <div>
          <img
            src={cover}
            alt="picture"
            className="w-[150px] h-[96px]  rounded-md object-cover"
          />
        </div>
        <div className="px-3 ">
          {/* CATEGORY AND DATE */}
          <div className="flex text-sm pb-1">
            <p className="font-bold">{categories?.[1]}</p>
            <p className="text-gray-500">-</p>
            <p className="text-gray-500">{formatDate(createdAt)}</p>
          </div>
          {/* Title */}
          <div>
            <h1 className="text-sm font-[600] md:text-lg md:font-[700]">{title}</h1>
          </div>

          {/* Author Section */}
          <div>
            <div className="flex items-center py-1">
              <img
                src={avatar}
                alt="picture"
                className="w-8 h-8 rounded-full"
              />
              <div className="pl-3 text-xs">
                <p className="font-[700]">{author.fullName}</p>
                <p className="text-gray-500">Author</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MiniBlog;
