import React from "react";
import { Link } from "react-router-dom";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <h1>home</h1>
      <Link to="Products" className="btn btn-accent">
        Productsss
      </Link>
    </>
  );
};

export default Home;
