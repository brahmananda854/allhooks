//useContext API is used to statemanegement suppose there are child to child component
//Now we want to pass the value to grand schild component not to child component

import React, { createContext,useState } from 'react'
import Login from '../component/Login';
import User from './User';
export const AppContext = createContext(null)
const Usecontext = () => {
    const [userName,setUserName] = useState('')
  return (
    <AppContext.Provider value ={ {userName,setUserName} }>
        <Login />
        <User />
    </AppContext.Provider>
  )
}

export default Usecontext