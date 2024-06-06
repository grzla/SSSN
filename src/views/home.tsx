import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Super Simple Social Network</h1>
      <p>Start connecting with your friends by creating a new post.</p>
      <Link to="/create-post">Create a new post</Link>
    </div>
  );
};

export default Home;
