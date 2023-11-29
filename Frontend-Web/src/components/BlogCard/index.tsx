import React, { useContext } from "react";
import CardList from "./CardList";
import { AppContext } from "../../context/appContext";

const BlogCard = () => {
  const { blogData } = useContext(AppContext);

  return (
    <section className="p-blog">
      <CardList data={blogData} />
    </section>
  );
};

export default BlogCard;
