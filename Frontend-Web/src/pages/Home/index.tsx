import React from "react";
import Navbar from "../../components/Navbar";
import BlogCard from "../../components/BlogCard";
import Footer from "../../components/Footer";

const HomePage: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Navbar />
      <BlogCard />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
