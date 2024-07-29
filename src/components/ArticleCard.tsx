import React from 'react';
import bin from '../assets/bin.svg';
import edit from '../assets/edit.svg';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { removeArticle } from '../slices/articlesReducer';
import { formatDate } from '../utils/formatDate';
import { truncateText } from '../utils/truncateText';

type Props = {
  id: string;
  title: string;
  description: string;
  cover: string;
  createdAt: string;
};

const ArticleCard: React.FC<Props> = ({
  id,
  title,
  description,
  cover,
  createdAt,
}) => {
  const dispatch = useDispatch<AppDispatch>();
 

  const handleDelete = (id: string) => {
    fetch(`${import.meta.env.VITE_BASE_URL}/articles/${id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) {
        toast.success('Article deleted successfully');
        dispatch(removeArticle(id));
      }
    });
  };

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
        <span className="text-sm">{formatDate(createdAt)}</span>
        <div className="flex gap-2">
          <Link to={`/edit/${id}`}>
            <div className="card-button">
              <img src={edit} alt="edit" className="w-5 h-5" />
            </div>
          </Link>
          <div className="card-button" onClick={() => handleDelete(id)}>
            <img src={bin} alt="bin" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
