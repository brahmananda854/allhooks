import React, { useEffect } from 'react'

const Child = ({ returncomment }) => {
    useEffect(()=>{
        console.log("function was called")
    },[returncomment])    //returncomment as a function when changes it will effect
  return (
    <div>
        {returncomment()}
    </div>
  )
}

export default Child