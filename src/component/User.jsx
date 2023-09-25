import React,{ useContext} from 'react'
import { AppContext } from './Usecontext'

const User = () => {
  const {userName} = useContext(AppContext)
  return (
    <div>
        
        <h1>USER :{userName} </h1>
    </div>
  )
}

export default User