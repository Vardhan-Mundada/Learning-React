
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react'

function App() {
  const [mode, setMode]= useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#031e39'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='#b2c4da'
    }
  }
  return (
    <>
      <Navbar title="Texutils" mode={mode} toggleMode={toggleMode}/>

        <div className="container">
        <TextForm heading="Enter Text to analyze" mode={mode}/>
        </div>
  
      {/* <About/> */}
    </>
  );
}

export default App;
