// USEEFFECT HOOK---its used to handle or manage the side effect means when a API data is fetched the backend 
//then instead of rendering again and again it will render only once or when we mnetion any state variable
//on its dependency [] then it will only run when that state changes.
import React, { useEffect,useState } from 'react'
import axios from 'axios';
function Useeffect() {
    const [data,setData] = useState('');
    const [count,setCount] = useState(0);
    useEffect(()=>{
        // console.log('Hi.....')
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{setData(response.data[0].email)})
        console.log("API WAS CALLED...")
        },[])
        const increment = () =>
                    {
                        setCount(count+1);   
                    }
        
        return (
        <>
        <h1>{count}</h1> <br />
        <button onClick={()=>{increment()}}>CLICK ME</button>
        <div>Useeffect....{data}</div>
    </>
  )
}

export default Useeffect