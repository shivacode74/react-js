import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {


  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  function aChanging(){
    console.log("changing value of Num1")

  }
  function bChanging (){
    console.log("changing value of Num2");   
  
  }
  useEffect(()=>{
    console.log('use effect is running...');
  },[num1,num2])
  


  return (
    <div>
      <div className="val">
      <h1>{num1}</h1>
      <h1>{num2}</h1>
      </div>
      <button onClick={()=>{
            setNum1(num1+1);
      }}>fist</button>
      <button onClick={()=>{
         setNum2(num2-1) ;
      }}>second</button>
    </div>
  )
}

export default App
