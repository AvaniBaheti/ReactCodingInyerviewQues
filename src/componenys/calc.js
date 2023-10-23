import React, { useState } from 'react';

function Calc() {
  const [am,seAma]=useState("")
  const[ams,seAms]=useState("")

  const ans=['+','-','*','/']
  const updayeDisp=(a)=>{

    seAma(am+a)

    if(ans.includes(a)==false){
        seAms(eval(am+a).toString())
    }
  }
  const handleClick=()=>{

    seAma(ams)
    
  }

  const handleClearClick=()=>{
    seAma("");
    seAms("");
  }
  return (
    <div className="calculator">
      <input type="text"  value={am} readOnly />
      <div className="buttons">
        <div className="row">
          <button onClick={()=>updayeDisp('7')}>7</button>
          <button onClick={()=>updayeDisp('8')}>8</button>
          <button onClick={()=>updayeDisp('9')}>9</button>
          <button onClick={()=>updayeDisp('+')} >+</button>
        </div>
        <div className="row">
          <button onClick={()=>updayeDisp('4')}>4</button>
          <button onClick={()=>updayeDisp('5')}>5</button>
          <button onClick={()=>updayeDisp('6')}>6</button>
          <button onClick={()=>updayeDisp('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={()=>updayeDisp('1')}>1</button>
          <button onClick={()=>updayeDisp('2')}>2</button>
          <button onClick={()=>updayeDisp('3')}>3</button>
          <button onClick={()=>updayeDisp('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={handleClearClick}>C</button>
          <button onClick={()=>updayeDisp('0')}>0</button>
          <button onClick={()=>handleClick()}>=</button>
          <button onClick={()=>updayeDisp('/')}>/</button>
        </div>
      </div>
    </div>
  );
}

export default Calc;
