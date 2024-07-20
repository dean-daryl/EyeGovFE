import { Link } from 'react-router-dom';
import article from '../assets/article.svg';
import plus from '../assets/plus.svg';

type Props = {};

function NewArticleCard({}: Props) {
  return (
    <>
      <Link to={'/article'}>
        <div className="border border-gray-300 w-[110px] h-[126px] flex flex-col gap-5 items-center justify-center m-4">
          <img src={article} alt="" className="w-[50px] h-[50px]" />
          <div className="flex gap-2 justify-center items-center cursor-pointer">
            <h2>New</h2>
            <img src={plus} alt="" className="w-5 h-5" />
          </div>
        </div>
      </Link>
    </>
  );
}

export default NewArticleCard;
