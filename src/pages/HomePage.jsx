import React from "react";
import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";
import AppNav from "../components/AppNav";

const HomePage = () => {
  return (
    <div>
      <PageNav />
      <AppNav/>
      <h1>WorldWise</h1>

      <Link to='/app'>Go to the App</Link>
    </div>
  );
};

export default HomePage;
