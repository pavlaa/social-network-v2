import React from 'react';
import style from "./LoginForm.module.scss"
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {LoginDataTypes} from "../../../types/types";


interface LoginProps {
  captchaUrl: string | null
}

const Login: React.FC<LoginProps & InjectedFormProps<LoginDataTypes, LoginProps>> =
  ({handleSubmit, captchaUrl, error}) => {

  return (
    <div className={style.form}>
      <form onSubmit={handleSubmit}>
        <div className={style.form__login}>
          <Field name="email" component="input" type="text" placeholder="Login"/>
        </div>
        <div className={style.form__password}>
          <Field name="password" component="input" type="password" placeholder="Password"/>
        </div>
        <div className={style.form__remember}>
          <Field name="rememberMe" component="input" type="checkbox" />
          <span>Remember Me</span>
        </div>
        { captchaUrl &&
        <>
          <img src={ captchaUrl }/>
          <Field name="captcha" component="input" type="text" />
        </>
        }
        { error &&
        <div className={ style.form__summaryError }>
          <span>{ error }</span>
        </div>
        }
        <div className={style.form__submit}>
          <button>Sing In</button>
        </div>
      </form>
    </div>
  );
};

const LoginForm = reduxForm<LoginDataTypes, LoginProps>({form: 'login'})(Login)

export default LoginForm;