import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from "./pages/chatHome/chatPage";
import ProfilePage from "./pages/profilePage/profilePage";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/profiles" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
