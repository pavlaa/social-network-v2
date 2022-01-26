import React, {useEffect} from 'react';
import style from "./Header.module.scss";
import logo from '../../img/logo.svg';
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import userSmall from "../../img/user.svg"
import {useDispatch} from "react-redux";
import {GetLogout} from "../../store/action-creators/authAction";


const Header: React.FC = () => {
  let {isLogin, login} = useTypedSelector(state => state.auth)
  let {profile} = useTypedSelector(state => state.profile)
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(GetLogout())
  }

  return (
    <header className={ style.header }>
      <div className={ `${style.header__container} _container` }>
        <div className={ style.header__logo }>
          <Link to="/profile">
            <img src={ logo } alt={ "logo" }/>
          </Link>
        </div>
        <div className={ style.header__login }>
          { isLogin
            ?
            <>
              <img src={profile ? profile.photos?.small : userSmall} alt=""/>
              <span>{ login }</span>
              <button className={style.header__logout} onClick={ onLogout }>Logout</button>
            </>
            :
            <Link to="/login">
              <button className={style.header__logout}>Login</button>
            </Link>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;