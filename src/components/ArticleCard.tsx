import React from 'react';
import bin from '../assets/bin.svg';
import edit from '../assets/edit.svg';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

type Props = {
  id: string;
  title: string;
  description: string;
  cover: string;
};

const truncateText = (text: string, maxLength: number): string => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};
const handleDelete = (id: string) => {
  fetch(`${import.meta.env.VITE_BASE_URL}/articles/${id}`, {
    method: 'DELETE',
  }).then((response) => {
    if (response.ok) {
      toast.success('Article deleted successfully');
    }
  });
};

const ArticleCard: React.FC<Props> = ({ id, title, description, cover }) => {
  return (
    <div className="card border border-gray-200 m-4">
      <Link to={`/${id}`}>
        <div className="card-img">
          <img src={cover} alt="" />
        </div>
        <div className="card-info">
          <p className="text-title text-sm font-[500]">
            {truncateText(title, 50)}
          </p>
          <p className="text-xs">{truncateText(description, 50)}</p>
        </div>
      </Link>
      <div className="card-footer">
        <span className="text-sm">7/19/2024</span>
        <div className="flex gap-2">
          <div className="card-button">
            <img src={edit} alt="edit" className="w-5 h-5" />
          </div>
          <div className="card-button" onClick={() => handleDelete(id)}>
            <img src={bin} alt="bin" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
