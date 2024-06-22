import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import Home from "./views/home.js";
import Login from "./views/auth/login";
import Signup from "./views/auth/signup";
import Feed from "./views/home/feed";
// import FeedContainer from "./components/FeedContainer";

const App: React.FC = () => (
  <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/home" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/posts" Component={Feed} />
        <Route path="/posts/user/:username" Component={Feed} />
      </Routes>
    </UserProvider>
  </BrowserRouter>
);

export default App;
