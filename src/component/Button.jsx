// forwordRef allows a function component to refer to its Parent component
import React,{ useState,forwardRef, useImperativeHandle } from 'react'

const Button = forwardRef((props,ref) => {
    const [toggle,setToggle] = useState(false)
    useImperativeHandle(ref,()=>{           //useImperativeHandle(ref, createHandle, dependencies?)
      alterToggle =()=>{
        setToggle(!toggle)
      };
    },[])
  return (
    <>
        <button>child Button</button>
    <Button />
      { toggle ? <h2>TOGGLE</h2> : "Disabled"}
        </>
    
    
  )
});

export default Button