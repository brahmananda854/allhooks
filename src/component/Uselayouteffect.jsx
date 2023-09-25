//USELAYOUT EFFECT ---- IT is very similar to useEffect hook but useLayoutEffect always called before
//the useEffect hook reson is sometimes we want to render some content before API loads data
// cause useEffect loads after the render of the diffrent content on page

import React, { useEffect, useLayoutEffect, useRef } from 'react'

function Uselayouteffect() {

    const inputRef = useRef(null)
    useLayoutEffect(()=>{
    //   console.log("useelayouteffect") 
    console.log(inputRef.current.value) 
    },[]);

    useEffect(()=>{
        console.log(inputRef.current.value="Adyasha")  
      },[])


  return (
    <>
    <div>Uselayouteffect</div>
       <div>
            <input type="text" value='Adwik' ref={inputRef} style={{width:'400px', background:"green",height:'50px'}}/>
        </div> 
       </>
    )
}

export default Uselayouteffect