import React, { useState } from 'react';
import style from '../../styles/Signup.module.css'
import UserIconO from '/Sample_User_Icon.png'
import UserIcon from '/Sample_User_Icon_F.png'
import iconPassword from '/icon_password.png'
import { Link } from 'react-router-dom';
import back from '/back.png'
import { Validation } from '../../validation/Validation.JS';
const Signup = () => {
    document.body.style.overflow='hidden'
    const [error , setError] = useState()
    const [values , setValues] = useState({
        email : '',
        password : '',
        confirmPassword : ''
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
            <div className={`${style.userCircel} ${style.userCircelS}`}>
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
                <label className={style.label} htmlFor="">
                <div className={style.divinp}>
                <div className={style.divIconInp} ><img src={iconPassword} alt="" /></div>
                    <input value={values.confirmPassword} onChange={inputHandler} id='confirmPassword' placeholder='confirm password' type="password" />
                 </div>
                 <p>{error && error.confirmPassword}</p>

                </label>
            </form>
            <Link to={'/login'} className={style.login}>login</Link>
            <div onClick={()=>{setError(Validation('signin', values ))}}  className={style.SignupBtn}>
                <button>Sign up</button>
            </div>
          </div>

        </div>
    );
};

export default Signup;