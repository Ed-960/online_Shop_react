import React, { useState, useEffect } from "react";
import styles from "./logBody.module.css";

import passwordShow from "../../../images/password_right.svg"
import passwordHide from "../../../images/hide.svg"
import { NavLink } from "react-router-dom";

const LogBody = (props) => {

   const [passState, setpassState] = useState(false);
   const [errMessage, seterrMessage] = useState(false);

   const hideShow = () => {
      setpassState((state) => !state);
   }

   const changeType = passState ? "text" : "password";
   const changeImgPassword = passState ? passwordHide : passwordShow;

   const [login, setLogin] = useState('');
   const [password, setPassword] = useState('');

   const [isLoged, setisLoged] = useState(false);
   const successLog = isLoged ? '/Account' : '/';

   let errorMessage = errMessage ? 'mail or password is invalid' : '';

   const errorMessageFunc = () => {
      seterrMessage(true);
   }

   const isTrueLoged = () => {
      for (let i = 0; i < props.Users.length; i++) {
         if (login === props.Users[i].login) {
            if (password === props.Users[i].password) {
               return setisLoged(true);
            } else {
               setisLoged(false);
            }
         } else {
            setisLoged(false);
         }
      }
   }

   useEffect(() => {
      isTrueLoged();
   })
   
   const onChangeLogin = (evt) => {
      setLogin(evt.target.value);
   }

   const onChangePassword = (evt) => {
      setPassword(evt.target.value);
   }

   return (
      <div>
         <main className={styles.main}>
            <div className={styles.container}>
               <div className={styles.form__info}>
                  <h1 className={styles.form__info_login}>
                     Login
                  </h1>
                  <p className={styles.form__info_text}>
                     Sign in with your data that you
                     entered during your registration.
                  </p>
               </div>
               <form className={styles.main__form}>
                  <div className={styles.main__form_mail}>
                     <label className={styles.mail__label}>Email</label>
                     <input type="text" onChange={onChangeLogin} value={login} placeholder="name@example.com" />
                  </div>
                  <div className={styles.main__form_password}>
                     <label>Password</label>
                     <input type={changeType} onChange={onChangePassword} value={password} placeholder="min. 8 characters" />
                     <img onClick={hideShow} alt='img' src={changeImgPassword} />
                     <span className={styles.errMessage}>{errorMessage}</span>
                  </div>
                  <div className={styles.main__form_checkbox}>
                     <input type="checkbox" />
                     <label className={styles.checkbox__label}>keep me logged in</label>
                     <NavLink to={successLog}><button onClick={errorMessageFunc} className={styles.checkbox__btn} type="button">Login</button></NavLink>
                  </div>
               </form>
               <a className={styles.form__forget} href="/">Forgot password</a>
            </div>
         </main>
         <div className={styles.footer}>
            <div className={styles.container}>
               <div className={styles.footer__inner}>
                  <p>Don't have an account? <a href="/">Sign up</a></p>
               </div>
            </div>
         </div>
      </div>
   )
}


export default LogBody;