import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Convertor from './components/Convertor/Convertor';
import Home from './components/Home/Home';
import Alert from './components/Alert/Alert';

const App = () => {
  return (
    <div>
      <Routes>
               <Route path='/home' element={<Navigate to="/"/>}></Route>
               <Route path='/signup' element={<Signup/>}/>
               <Route path='/' element={<Home/>}/>
               <Route path='/login' element={<Login/>}/>
               <Route path='/convertor' element={<Convertor/>}/>
               <Route path='/alert' element={<Alert/>}/>
      </Routes>
      
    </div>
  );
};

export default App;