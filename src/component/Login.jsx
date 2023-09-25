import React, { useContext } from 'react'
import { AppContext } from './Usecontext';

const Login = () => {
    const {setUserName} = useContext(AppContext);
  return (
    <div>
       
        <input type="text" placeholder='enter name.....' onChange={(e)=>{setUserName(e.target.value)}}/>
    </div>
  )
}

export default Login