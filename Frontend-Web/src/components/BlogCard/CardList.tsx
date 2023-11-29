import React from "react";
import CardListItem from "./CardListItem";
import { BlogData } from "../../context/mock-data";

type Props = {
  data: BlogData[];
};

const CardList: React.FC<Props> = ({ data }) => {
  return (
    <div className="p-blog__card-list">
      {data.map((blog, index) => {
        return (
          <CardListItem
            key={index}
            title={blog.title}
            src={blog.url}
            id={blog.id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
