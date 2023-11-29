import React from "react";
import { Link } from "react-router-dom";

type Props = {
  src: string;
  title: string;
  id: number;
};

const CardListItem: React.FC<Props> = ({ id, src, title }) => {
  return (
    <div className="p-blog__inner">
      <Link to={`/detail/${id}`} title={title}>
        <div className="p-blog__img">
          <img src={src} alt={title} />
        </div>
        <div className="p-blog__icon">
          <i className="fa-brands fa-readme"></i>
        </div>
        <div className="p-blog__text">
          <p>{title.length > 50 ? title.substring(0, 40) + "..." : title}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardListItem;
