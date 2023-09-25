//Suppose we have to control our child component from parent component in a situation where we want to
//toggle child component button from parent- in this case we use ImparativeHandle use case
// in this case we will make the child component as refrence here it is button
import React,{ useRef } from 'react'
import Button from './Button'
const Imparativehandle = () => {
  const buttonRef  = useRef(null);

  return (
    <>
     <button onClick={()=>{buttonRef.current.alterToggle()}}>Parent Button</button>  <br />
      <Button ref={buttonRef}/>
    </>
    
  )
}

export default Imparativehandle