import React, { useEffect, useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import { Outlet } from 'react-router-dom';

function App() {
  
  return (
    <>
      <Navbar/>
      
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;



