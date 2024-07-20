import React from 'react';
import bin from '../assets/bin.svg';
import edit from '../assets/edit.svg';

type Props = {};

const truncateText = (text: string, maxLength: number): string => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

const ArticleCard: React.FC<Props> = () => {
  const title = 'Article title is super long and will overlap anytime soon';
  const description =
    'This is a super small description that I dont expect to be long';

  return (
    <div className="card border border-gray-200 m-4">
      <div className="card-img"></div>
      <div className="card-info">
        <p className="text-title text-sm font-bold">
          {truncateText(title, 50)}
        </p>
        <p className="text-xs">{truncateText(description, 50)}</p>
      </div>
      <div className="card-footer">
        <span className="text-sm">7/19/2024</span>
        <div className='flex gap-2'>
          <div className="card-button">
            <img src={edit} alt="edit" className="w-5 h-5" />
          </div>
          <div className="card-button">
            <img src={bin} alt="bin" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
