import React, { useState } from 'react';
import style from '../../styles/Convertor.module.css'
import coins from '../../data/crypto.json'
import change from '/change.png'
import dropdown from '/dropdown.png'
const Convertor = () => {
    var reg = /^\d+$/;
    const [selectedItem1 , setSelectedItem1] = useState(coins[0])
    const [selectedItem2 , setSelectedItem2] = useState(coins[4])
    const [value1 , setValue1] = useState()
    const [value2 , setValue2] = useState()
    const [showList , setShowList]= useState({
        1 : false,
        2 : false
    })
    const changeHandler = () =>{
        setSelectedItem1(selectedItem2)
        setSelectedItem2(selectedItem1)
    }
    return (
        <div className={style.main}>
          <div className={style.Convertor}>
          <div className={style.top} >
               <p>convertor</p>
          </div>
          <div className={style.line}></div>
          <div className={style.datatop}>
            1 {selectedItem1.nikname} = {(selectedItem1.price / selectedItem2.price).toFixed(2)} {selectedItem2.nikname}
          </div>
          <div className={style.selectedItemMain}>
            <div onClick={()=>setShowList({1 : !showList[1]})} className={`${style.selectedItem} ${showList[1] ? style.selectedItemT : style.selectedItemF}`}>
            {selectedItem1.nikname} <img src={dropdown} alt="dropdown" />
            <div className={`${style.list} ${showList[1] ? style.listT : style.listF}`}>
             {coins.map(item => <p key={item.id} onClick={()=>setSelectedItem1(item)}>{item.nikname}</p>)}
            </div>
            </div>
            <div className={style.selectedItem}>
             <input type="text" value={value1} onChange={(e)=> reg.test(e.target.value) || e.target.value === '' ? setValue1(e.target.value): '' } placeholder='0.00' name="" id="" />
            </div>
          </div>
          <div className={style.line}>
            <div onClick={changeHandler} className={style.circel}>
            <img src={change} alt="" />
            </div>
          </div>
          <div className={`${style.selectedItemMain} ${style.selectedItemMain2}`}>
            <div onClick={()=>setShowList({2: !showList[2]})} className={`${style.selectedItem} ${showList[2] ? style.selectedItemT : style.selectedItemF}`}>
            {selectedItem2.nikname} <img src={dropdown} alt="dropdown" />
            <div className={`${style.list} ${showList[2] ? style.listT : style.listF}`}>
             {coins.map(item => <p key={item.id} onClick={()=>setSelectedItem2(item)}>{item.nikname}</p>)}
            </div>
            </div>
            <div className={style.selectedItem}>
            <input type="text" value={value2} onChange={(e)=> reg.test(e.target.value) || e.target.value === '' ? setValue2(e.target.value): '' } placeholder='0.00' name="" id="" />
            </div>
          </div>
          <button className={style.btn}>
            exchange
          </button>
          </div>

        </div>
    );
};

export default Convertor;