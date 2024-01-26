import React, { useState } from 'react';
import style from '../../styles/Home.module.css'
import btc from '/btc.png'
import c from '/C.png'
import gold from '/gold.png'
import Dollar from '/Dollar.png'
import goldD from '../../data/gold.json'
import Header from '../Header/Header';
import crypto from '../../data/crypto.json'
import alertz from '/alertz.png'
import coins from '../../data/coins.json'
import currency from '../../data/currency.json'
const Alert = () => {
  const [showPart , setShowPart] = useState(crypto) 
  const [mute , setMute] = useState({

  })
    return (
  
        <div className={style.main}>
           <div className={style.main2}>
               <Header/>
               <div className={style.home}>
                 <div className={style.listDiv}>
                 <div className={style.list}>
                 <div className={style.listTop}>
                    <div onClick={()=>setShowPart(crypto)} className={style.topitem}><img src={btc} alt="" /></div>
                    <div onClick={()=>setShowPart(coins)} className={style.topitem}><img src={c} alt="" /></div>
                    <div onClick={()=>setShowPart(currency)} className={style.topitem}><img src={Dollar} alt="" /></div>
                    <div onClick={()=>setShowPart(goldD)} className={style.topitem}><img src={gold} alt="" /></div>
                   </div>
                  <div className={style.listOption}>
                    <p>#</p>
                    <p>name</p>
                    <p>alert</p>
                  </div>
                  <div className={style.listvalue}>
                   {
                 showPart.map(item =>
                  <div className={style.coin}>
                      <p>{item.id + 1}</p>
                      <p>{item.name}</p>
                      <p onClick={()=> { mute[item.name] ? setMute({...mute , [item.name] : false}) : setMute({...mute, [item.name] : true})} } className={style.alert}><img src={alertz} alt="" /><div style={{display : mute[item.name] ? 'none' : 'block'}} className={style.line}></div></p>
                  </div>   
                    )
                   }
                  </div>
                 </div>
                 </div>
                 <div className={`${style.div2} ${style.div2a}`}>
                   <p>alert time</p>
                   <div>02:00 AM</div>
                 </div>
               </div>
           </div>
        </div>
    );
};

export default Alert;
       
