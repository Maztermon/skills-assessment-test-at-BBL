import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/appContext";

const Detail = () => {
  const { id } = useParams();
  const { blogData } = useContext(AppContext);
  const [selectedData] = blogData.filter((i) => i.id === Number(id));
  const { desc, recipe, title, url } = selectedData;

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <section className="p-detail">
      <div className="p-detail__image">
        <img
          src={url}
          alt="blur-img"
          title="blur-img"
          style={{
            objectFit: "cover",
            position: "relative",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 5,
          }}
        />
      </div>
      <div className="p-detail__recipes-bloc">
        <div>Title: </div>
        <div> {recipe} </div>
      </div>

      <div className="p-detail__text">
        <h1>{title}</h1>
        <p className="p-detail__text-description">{desc}</p>
      </div>
    </section>
  );
};

export default Detail;
