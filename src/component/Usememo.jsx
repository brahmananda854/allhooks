//TO Optimize the React application we use UseMemo
//TO reduce the number of re computations we need useMemo Hooks

import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios';
const Usememo = () => {
    const [data,setData] = useState(null)
    const [toggle,setToggle] = useState(false)
    
    const changeToggle =() =>{
        setToggle(!toggle);
    }
    
    useEffect(()=>{axios.get('https://jsonplaceholder.typicode.com/comments')
    .then((response)=>{setData(response.data)})},[]);
    
    const findLongerName = (Comments) =>{if(!Comments) return null;
    let longestName = '';
    for(let i=0;i<Comments.length;i++){
        let currentName  = Comments[i].name;
        if(currentName.length>longestName.length){
            longestName=currentName;
        }
    }
        console.log("This was COMPUTED...")
        return longestName;
    };
        const usememo1 = useMemo( () => findLongerName(data),[toggle]);
    return (
        <>
          <h1>{usememo1}</h1>
        <button onClick={changeToggle}>Toggle</button> <br /> <br />
            { toggle ? "Toggle": "NONE"}
      
    </>
        
  )
}

export default Usememo