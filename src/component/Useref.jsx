//USEREF----IT is the hook used to easily access and manupulate DOM elements
//focus on input 
import React,{ useRef } from 'react'

function Useref() {
  const inputRef = useRef(null);
  const onclick =()=>{
    // console.log(inputRef.current.value)
    // inputRef.current.focus();
    inputRef.current.value= " ";
  }
  return (
    <div>
      <h1>Brahma</h1>
      <input type="text" placeholder='example.....' ref={inputRef} />
      <button onClick={()=>{onclick()}}>ChangeName</button>
    </div>
  )
}

export default Useref