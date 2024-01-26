import React, { useState } from 'react';
import style from '../../styles/Home.module.css'
import btc from '/btc.png'
import c from '/C.png'
import gold from '/gold.png'
import Dollar from '/Dollar.png'
import Header from '../Header/Header';
import coins from '../../data/coins.json'
import crypto from '../../data/crypto.json'
import currency from '../../data/currency.json'
import goldD from '../../data/gold.json'
import fav from '/fav.png'
import alert from '/alert.png'
import cov from '/cov.png'
import apk from '/apk.png'
import insta from '/insta.png'
import wats from '/wats.png'
import telegram from '/telegram.png'
import { Link } from 'react-router-dom';
const Home = () => {
   const [showPart , setShowPart] = useState(crypto) 
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
                    <p>24h</p>
                    <p>price</p>
                  </div>
                  <div className={style.listvalue}>
                   {
                    showPart.map(item =>
                    <div key={item.id} className={style.coin}>
                        <p>{item.id + 1}</p>
                        <p>{item.name}</p>
                        <p className={item.state === '+' ? style.p : style.n} >{item.percent} % </p>
                        <p>{item.price.toLocaleString()} {showPart !== crypto ? <small className={style.small}>تومان</small> : "$" }</p>
                    </div>    
                    )
                   }
                  </div>
                 </div>
                 </div>
                 <div className={style.div2}>
                  <div className={style.top}>
                    <div className={style.topdivs}>
                    <div className={style.divL}>
                    <img src={fav} alt="" />
                    <p>favorite</p>
                    </div>
                    <Link to={'/alert'} className={style.divB}>
                        <img src={alert} alt="" />
                        <p>price alert</p>
                    </Link>
                    </div>
                    <div className={style.topdivs}>
                    <Link to={'/convertor'}  className={style.divBL}>
                        <img src={cov} alt="" />
                        <p>convertor</p>
                    </Link>
                    <div className={style.divL}>
                    <img src={apk} alt="" />
                    <p >android apk</p>
                    </div>
                    </div>
                  </div>
                  <div className={style.btm}>
                   <img src={insta} alt="" />
                   <img src={wats} alt="" />
                   <img src={telegram} alt="" />
                  </div>
                 </div>
               </div>
           </div>
        </div>
    );
};

export default Home;