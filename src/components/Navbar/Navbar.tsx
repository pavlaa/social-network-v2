import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Navbar.module.scss';
import user from '../../img/icon/user.png';
import users from '../../img/icon/friends.png';
import messages from '../../img/icon/messages.png';
import settings from '../../img/icon/settings.png';

const Navbar: React.FC = () => {

  const setActive = ({isActive}: any) => isActive ? `${style.active}` : '';

  return (
    <nav className={ style.menu }>
      <div className={ style.menu__container }>
        <div className={ style.menu__list }>
          <div className={ style.menu__item }>
            <NavLink to="/profile" className={ setActive }>
              <img src={ user } alt="user"/>
              <span>My profile</span>
            </NavLink>
          </div>
          <div className={ style.menu__item }>
            <NavLink to="/messages" className={ setActive }>
              <img src={ messages } alt="messages"/>
              <span>Messages</span>
            </NavLink>
          </div>
          <div className={ style.menu__item }>
            <NavLink to="/users" className={ setActive }>
              <img src={ users } alt="users"/>
              <span>Users</span>
            </NavLink>
          </div>
          <div className={ style.menu__item }>
            <NavLink to="/settings" className={ setActive }>
              <img src={ settings } alt="settings"/>
              <span>Settings</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
    // <nav>
    //   <Link to="/">Home</Link>
    //   <Link to="/profile">Profile</Link>
    //   <Link to="/users">Users</Link>
    // </nav>
  );
};

export default Navbar;