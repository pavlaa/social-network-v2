import React from 'react';
import style from "./Header.module.scss";
import logo from '../../img/logo.svg';
import {Link} from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className={ style.header }>
      <div className={ `${style.header__container} _container` }>
        <div className={ style.header__logo }>
          <Link to="/profile">
            <img src={ logo } alt={ "logo" }/>
          </Link>
        </div>
        {/*<div className={ style.header__login }>
          { isLogin
            ?
            <>
              <img src={!userProfile ? userSmall : userProfile.photos.small} alt=""/>
              <span>{ login }</span>
              <button className={style.header__logout} onClick={ onLogout }>Logout</button>
            </>
            :
            <NavLink to="/login">
              <button className={style.header__logout} >Login</button>
            </NavLink>
          }
        </div>*/}
      </div>
    </header>
  );
};

export default Header;