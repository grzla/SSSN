import React from "react";
import { useNavigate } from "react-router-dom";

const LoginButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return <button onClick={handleLogin}>Sign In</button>;
};

export default LoginButton;
