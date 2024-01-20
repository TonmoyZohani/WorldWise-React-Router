import React from "react";
import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <PageNav />
      <div>WorldWise</div>

      <Link to='/app'>Go to the App</Link>
    </div>
  );
};

export default HomePage;
