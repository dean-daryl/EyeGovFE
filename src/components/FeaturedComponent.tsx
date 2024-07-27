import picture from '../assets/blob.jpeg';
import { formatDate } from '../utils/formatDate';

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

function FeaturedComponent({
  title,
  description,
  cover,
  categories,
  createdAt,
}: Props) {

  return (
    <div className="w-[100%] px-[100px] flex gap-5 py-[50px]">
      <div>
        <img
          src={cover}
          alt="picture"
          className="w-[650px] h-[385px] border-red-100 rounded-md object-cover"
        />
      </div>
      <div className="flex justify-center flex-col px-3 ">
        {/* CATEGORY AND DATE */}
        <div className="flex">
          <p className="font-bold ">
            {categories?.[0]}, {categories?.[1]}
          </p>
          <p className="text-gray-500">-</p>
          <p className="text-gray-500">{formatDate(createdAt)}</p>
        </div>
        {/* Title */}
        <div>
          <h1 className="text-5xl font-bold py-5">{title}</h1>
        </div>
        {/* Description */}
        <div className="text-gray-500">{description}</div>
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
