import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/users">Users</Link>
      </header>
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;