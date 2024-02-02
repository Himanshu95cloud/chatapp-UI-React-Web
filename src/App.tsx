import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Outlet,
} from "react-router-dom";
import ProfilePage from "./pages/profilePage/profilePage";
import ChatPage from "./pages/chatPage/chatPage";
import Users from "./pages/usersPage/userPage";
import HomePage from "./pages/homePage/homePage";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profiles" element={<ProfilePage />}>
          <Route path="user" element={<ChatPage />} />
          <Route path="chatpage" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
