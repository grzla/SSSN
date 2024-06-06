import React from "react";
import { useNavigate } from "react-router-dom";

const SignupButton: React.FC = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  return <button onClick={handleSignup}>Sign Up</button>;
};

export default SignupButton;
