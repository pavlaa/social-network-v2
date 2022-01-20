import React from 'react';
import style from "./LoginPage.module.scss"
import LoginForm from "./LoginForm";
import {LoginDataTypes} from "../../../types/types";
import {useDispatch} from "react-redux";
import {GetLogin} from "../../../store/action-creators/authAction";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import { Navigate } from 'react-router-dom';


const LoginPage: React.FC = (props: any) => {
  const {captchaUrl, isLogin} = useTypedSelector(state => state.auth)
  const dispatch = useDispatch()

  const onSubmit = (formData: LoginDataTypes) => {
    dispatch(GetLogin(formData))
  }

  if (isLogin) {
    return <Navigate to="/profile" replace />
  }

  return (
    <div className={ style.login }>
      <div className={ style.login__container }>
        <h2>Sing In</h2>
        <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
      </div>
      <div style={{marginTop: 20}}>
        <p>If you want to join</p>
        <p>Login: free@samuraijs.com</p>
        <p>Password: free</p>
      </div>
    </div>
  );
};

export default LoginPage;