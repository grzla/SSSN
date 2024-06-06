import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home.jsx";
import Login from "./views/auth/login";
import Signup from "./views/auth/signup";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Login} />
      <Route path="/home" Component={Home} />
      <Route path="/login" Component={Login} />
      <Route path="/signup" Component={Signup} />
    </Routes>
  </BrowserRouter>
);

export default App;
