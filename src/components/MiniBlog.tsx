import dean from '../assets/dean.jpg';

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

function MiniBlog({
  title,
  cover,
  categories,
  createdAt,
  author,
}: Props) {
  return (
    <div className="flex w-[100%] gap-5 py-[50px]">
      <div>
        <img
          src={cover}
          alt="picture"
          className="w-[150px] h-[96px] border-red-100 rounded-md"
        />
      </div>
      <div className="px-3 ">
        {/* CATEGORY AND DATE */}
        <div className="flex text-sm pb-1">
          <p className="font-bold">{categories?.[0]}</p>
          <p className="text-gray-500">-</p>
          <p className="text-gray-500">{createdAt}</p>
        </div>
        {/* Title */}
        <div>
          <h1 className="text-xl font-[700]">{title}</h1>
        </div>

        {/* Author Section */}
        <div>
          <div className="flex items-center py-1">
            <img src={dean} alt="picture" className="w-8 h-8 rounded-full" />
            <div className="pl-3 text-xs">
              <p className="font-[700]">{author.name}</p>
              <p className="text-gray-500">{author.avatar}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniBlog;
