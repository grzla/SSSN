import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../components/LoginButton";
import SignupButton from "../components/SignupButton";
// import { UserProvider } from './UserContext';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Super Simple Social Network</h1>
      <p>Start connecting with your friends by creating a new post.</p>
      {/* <Link to="/login">Log In</Link>
      <Link to="/signup">Sign In</Link> */}
      <LoginButton />
      <SignupButton />
    </div>
  );
};

export default Home;
