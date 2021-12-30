import React from 'react';
import './App.scss';
import { Routes, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import UserList from "./components/UserList";
import ProfilePage from "./components/ProfilePage";
import HomePage from "./components/HomePage";


const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="body _container">
        <div className="navbar">
          <Navbar/>
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="profile/" element={<ProfilePage/>}/>
            <Route path="profile/:id" element={<ProfilePage/>}/>
            <Route path="users" element={<UserList/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;