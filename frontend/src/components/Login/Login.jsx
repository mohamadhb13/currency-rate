import React, { useState } from 'react';
import style from '../../styles/Signup.module.css'
import UserIconO from '/Sample_User_Icon.png'
import UserIcon from '/Sample_User_Icon_F.png'
import iconPassword from '/icon_password.png'
import { Link } from 'react-router-dom';
import back from '/back.png'
import { Validation } from '../../validation/Validation.JS';
const Login = () => {
    document.body.style.overflow='hidden'
    const [error , setError] = useState()
    const [values , setValues] = useState({
        email : '',
        password : '',
    });
    const inputHandler = (e) => {
        setValues({
            ...values,
            [e.target.id] : e.target.value,
        })
    }
    return (
        <div className={style.main}>
          
          <div className={style.Signup}>
            <Link className={style.back} to={'/'}> 
            <img  src={back} alt="" />
            <p>back to home</p>
            </Link>
            <div className={style.userCircel}>
              <img src={UserIconO} alt="" />
            </div>
            <form>
                <label className={style.label} htmlFor="">
                    <div className={style.divinp}>
                    <div className={style.divIconInp} ><img src={UserIcon} alt="" /></div>
                    <input value={values.email} onChange={inputHandler} id='email' placeholder='email' type="text" />
                    </div>
                    <p>{error && error.email}</p>

                </label>
                <label className={style.label} htmlFor="">
                    <div className={style.divinp}>
                    <div className={style.divIconInp} ><img src={iconPassword} alt="" /></div>
                    <input value={values.password} onChange={inputHandler} id='password' placeholder='password' type="password" />
                    </div>
                    <p>{error && error.password}</p>
                </label>
            </form>
            <div className={style.divB}>
            <Link to={'/signup'} className={style.login}>sing up</Link>
            <p className={style.fogatP}>forgat password</p>
            </div>
            <div onClick={()=>{setError(Validation('login', values ))}} className={style.SignupBtn}>
                <button >Login</button>
            </div>
          </div>

        </div>
    );
};

export default Login;