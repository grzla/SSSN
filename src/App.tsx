import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import Home from "./views/home.js";
import Login from "./views/auth/login";
import Signup from "./views/auth/signup";
import Feed from "./views/home/dashboard";

const App: React.FC = () => (
  <BrowserRouter>
    <UserProvider>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feed" element={<Feed />} /> */}
        <Route path="/" Component={Home} />
        <Route path="/home" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/feed" Component={Feed} />
        <Route path="/feed/:username" Component={Feed} />
      </Routes>
    </UserProvider>
  </BrowserRouter>
);

export default App;
