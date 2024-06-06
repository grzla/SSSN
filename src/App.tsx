import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import Home from "./views/home.js";
import Login from "./views/auth/login";
import Signup from "./views/auth/signup";

const App: React.FC = () => (
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/home" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
      </Routes>
    </BrowserRouter>
  </UserProvider>
);

export default App;
