// import React from "react";
import {useState} from "react";
import Functional from "./Component/Functional";
import Class from "./Component/Class";


const App=()=>{
   
  const [show, setShow] =useState(false);
  const [show2, setShow2] =useState(false);
  const handleClick =()=>{
    setShow(!show)
  }
  const handleClick2 =()=>{
    setShow2(!show2)
  }
  return  (
    <div id="body">
    <div className="container">
      <div> <h1 id="heading">Styling using Functional and Component</h1></div>
      </div>
      
    <div className="btn-container" >
    <button className="click" onClick={handleClick}>To see using functionl Component</button>
    
      <button className="click" onClick={handleClick2}>To see using Class Component</button>
      </div>
     {show && <Functional/>  }
     {show2 &&  <Class/> }
      </div>
    )
}
export default App

