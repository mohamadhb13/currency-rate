import React, { useState  } from 'react';
import style from '../../styles/Header.module.css'
import userIco from '/userB.png'
import { Link } from 'react-router-dom';
const Header = () => {
    const [date , setDate] = useState()
    setInterval(() => {
        var dateString = new Date().toLocaleString();
        var formattedString = dateString.replace(", ", " - " ,':');    
        setDate(formattedString)

    }, 1000);
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayIndex = new Date().getDay()
    return (
     <div className={style.w100}>
           <div className={style.main}>
           <div className={style.date}>
           {dayNames[dayIndex]} - {date} 
           </div>
           <div className={style.user}>
                <p><Link to={'/signup'}>signup</Link></p>
                <div className={style.circel}>
                    <img src={userIco} alt="" />
                </div>
           </div>
        </div>
        <hr className={style.hr} />

     </div>
    );
};

export default Header;