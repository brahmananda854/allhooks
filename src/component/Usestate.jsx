// ***************************************************************************************************
// USESTATE HOOK always used when there is a state change the component got re-render and we get the 
//updated value below is the use of USESTATE hook for both Buttons onChange and input onChange
// ****************************************************************************************************

import React,{ useState } from 'react'

function Usestate(){
    const [counter,setcounter] = useState(0);
    const [inputValue,setInputValue] = useState('')
    const [showText,setShowText] = useState();
    // let counter = 0;
        const Increment =() =>{
          setcounter(counter+1); 
          // counter = counter+1;
          // console.log(counter)
        }

        const inputChange = (e) =>{
            const newValue = e.target.value;
            setInputValue(newValue);
        }

        const showHideFunc=() =>{
          setShowText(!showText);
  }
          return (
      <div>
        {counter}
        <input  placeholder='Enter name......' onChange={inputChange}/> <br />
        <h1>{inputValue}</h1> 
        <button onClick={Increment}>
            CLICK ME
        </button>
        <button onClick={showHideFunc}>CLICK ME</button>
            {showText ? <p>Hi I am here...wow</p> :"hidden" }
      </div>
  )
}

export default Usestate;
