import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useUser } from "../../contexts/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const { setUsername: setContextUsername } = useUser(); // Use setUsername from UserContext at the top level
  // setContextUsername(username); // Update the username in the context
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });
      navigate("/posts");
      // set username in local storage
      localStorage.setItem("username", username);
    } catch (error) {
      console.error("Failed to login", error);
      // Handle error here
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
