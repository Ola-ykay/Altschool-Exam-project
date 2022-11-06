import React, { useReducer, useRef } from 'react';
import useCounter from '../Pages/useCounter'


const initialState = {count:0} ;
const reducer = (state, action) =>{
  switch (action.type) {
    case "Increment":
      return {count: state.count + 1};
    case "Decrement":
      return {count: (state.count) - 1};
    case "Reset": 
      return {count: (state.count = 0)};
    case "Set Value":
      return {count: Number(action.value)}
    default: 
    return {count: state.count};
  } 
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef();
  const { handleIncrement, handleDecrement, handleReset, handleSetValue } = useCounter(dispatch, inputRef);
  

  return (
    <div className='container'>

      
      <h2>Shopping Cart</h2>
    <h3>Quantity: <span> {state.count}</span></h3>
     
     <div className='btns'>
       <button className='buttons' onClick={handleIncrement}>Increment</button>
       
     <button className='buttons' onClick={handleDecrement}>Decrement
    </button>
       <button className='buttons' onClick={handleReset}>Reset
  </button>
       <div>
       <input  className='input' type='number' ref={inputRef} />
         <br></br>
         <button className='buttons' onClick={handleSetValue}>Set Value </button>
       </div>
    
     </div>
    
      </div>  
  )
}



export default Counter