import React, {useEffect, useState} from 'react';
import './App.scss';
import { Routes, Route, Navigate} from 'react-router-dom';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import UserList from "./components/Main/UsersPage/UserList";
import ProfilePage from "./components/Main/ProfilePage/ProfilePage";
import {useDispatch} from "react-redux";
import {AuthFetch} from "./store/action-creators/authAction";
import {useTypedSelector} from "./hooks/useTypedSelector";
import LoginPage from "./components/Main/LoginPage/LoginPage";
import MessagesPage from "./components/Main/MessagePage/MessagesPage";

const App = () => {
  let {initialized} = useTypedSelector(state => state.auth)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AuthFetch())
  }, [])

  if (!initialized) {
    return <div>LOADINGGG</div>
  }
  return (
    <div className="wrapper">
      <Header />
      <div className="body _container">
        <div className="navbar">
          <Navbar/>
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<Navigate to="/profile" />}/>
            <Route path="profile" element={<ProfilePage />}/>
            <Route path="profile/:id" element={<ProfilePage />}/>
            <Route path="messages" element={<MessagesPage />}/>
            <Route path="users" element={<UserList />}/>
            <Route path="login" element={<LoginPage />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;