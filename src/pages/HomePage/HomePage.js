import React from "react";
import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to Linkedin App</h1>
      <Link to="/users" className="home-link">
        Click to get user profiles!
      </Link>
    </div>
  );
}

export default HomePage;
