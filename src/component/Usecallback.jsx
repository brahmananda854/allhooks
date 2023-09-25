//USECALLBACK Hook is similar to UseMemo but when we have a some short of function that is passed to
//child componennt it will recreate everytime when it render as functions are pointing to diffrent address
// when it generate with same set of code  ,here we can store the memoized function *itself


import React, { useCallback, useState } from 'react'
import Child from './Child';
const Usecallback = () => {
   const [toggle,setToggle] = useState(false);
    const [data,setData]= useState("Hello Brahma.....");
  
    const returncomment = useCallback( () =>{
        return data;
    },[data])
  return (
    <>
    <Child returncomment = {returncomment}/>
    <button onClick={()=>{setToggle(!toggle)}}>Hi TOGGLE</button>
        { toggle && <h1>toggle</h1>}
    </>
  )
}

export default Usecallback