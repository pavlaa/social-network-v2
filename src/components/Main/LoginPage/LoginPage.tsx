import React from 'react';
import style from "./LoginPage.module.scss"
import LoginForm from "./LoginForm";
import {LoginDataTypes} from "../../../types/types";
import {useDispatch} from "react-redux";
import {GetLogin} from "../../../store/action-creators/authAction";


const LoginPage: React.FC = (props: any) => {
  const dispatch = useDispatch()

  const onSubmit = (formData: LoginDataTypes) => {
    dispatch(GetLogin(formData))
    console.log(formData)
  }

  return (
    <div className={ style.login }>
      <div className={ style.login__container }>
        <h2>Sing In</h2>
        <LoginForm onSubmit={onSubmit} />
      </div>
      <div>
        <p>If you want join</p>
        <p>Login: free@samuraijs.com</p>
        <p>Password: free</p>
      </div>
    </div>
  );
};

export default LoginPage;