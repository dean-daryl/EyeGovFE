import { Link } from 'react-router-dom';
import picture from '../assets/blob.jpeg';

type Props = {
  id: string;
  title: string;
  description: string;
  cover: string;
  categories: string[];
  createdAt: string;
  author: {
    name: string;
    avatar: string;
  };
};

function BlogCard({
  id,
  title,
  description,
  cover,
  categories,
  createdAt,
  author,
}: Props) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    // Extract the day, month, and year
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2); // Get last 2 digits of the year

    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <Link to={`${id}`}>
        <div className="w-[80%] gap-5 py-[50px]">
          <div>
            <img
              src={cover}
              alt="picture"
              className="w-[399px] h-[256px] border-red-100 rounded-md object-cover"
            />
          </div>
          <div className="justify-center  px-3 ">
            {/* CATEGORY AND DATE */}
            <div className="flex text-sm py-2">
              <p className="font-bold">
                {categories?.[0]}, {categories?.[1]}
              </p>
              <p className="text-gray-500">-</p>
              <p className="text-gray-500">{formatDate(createdAt)}</p>
            </div>
            {/* Title */}
            <div>
              <h1 className="text-md font-[800] py-1">{title}</h1>
            </div>
            {/* Description */}
            <div className="text-gray-500 text-sm">{description}</div>
            {/* Author Section */}
            <div>
              <div className="flex items-center py-5">
                <img
                  src={picture}
                  alt="picture"
                  className="w-8 h-8 rounded-full"
                />
                <div className="pl-3 text-sm">
                  <p className="font-[700]">{author.name}</p>
                  <p className="text-gray-500">Author</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default BlogCard;
