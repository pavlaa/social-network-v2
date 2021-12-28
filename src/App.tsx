import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import UserList from "./components/UserList";
import ProfilePage from "./components/ProfilePage";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/users" element={<UserList />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;