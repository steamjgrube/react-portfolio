import React from "react";
import PortfolioCard from "../PortfolioCard";
// import projects from "../../assets/projects.json";


function Blog() {
  return (
    <div>



      <div className="container portfolio-container">
        <h1 className="title">Projects List</h1>
        <div className="row">
          <PortfolioCard
          />
          <PortfolioCard
          />
        </div>
        <div className="row">
          <PortfolioCard
          />

          <PortfolioCard
          />
        </div>

        <div className="row">

          <PortfolioCard
          />

          <PortfolioCard
          />

        </div>
      </div>



    </div >
  );
}

export default Blog;