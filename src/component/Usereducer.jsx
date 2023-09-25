// USEREDUCER HOOK----This hooks is used to replace the useState hooks where *its using multiple 
//state management on single click suppose for button
//Below we are using useReducer where we declare an object and tow state varivbles are declared under it
//Dispatch is just like a method to call when there is a change in state
import React,{ useReducer } from 'react'
const reducer=(state,action) =>{
        switch(action.type){
            case "INCREMENT":
                return {count:state.count+1, showText:state.showText};
            case "TOGGLE":
                return {count:state.count, showText:!state.showText}
            default:
                return state;

        }    
}
function Usereducer() {
  const [state,dispatch] = useReducer(reducer,
    {count:0,showText:true});
  return (
    <div>
            
    <h1>{state.count}</h1>
    <button onClick={()=>{
        dispatch({type:"INCREMENT"});
        dispatch({type:"TOGGLE"});
    }}>CLICKME</button>
    {state.showText ? <p>I am here12345....</p> : "hidden"}
    </div>
  )
}

export default Usereducer