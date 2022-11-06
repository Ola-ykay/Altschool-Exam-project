function useCounter(dispatch, inputRef) {

  const handleIncrement = () => {
   dispatch({
     type:'Increment',
   })
    
  }
 const handleDecrement = () => {
        dispatch({
          type:'Decrement'
        })
        // setState(state => state - 1)
      }

  const handleReset = () => {
    dispatch({
      type:'Reset'
    })
  // setState(state => state = 0) 
  }
    
  const handleSetValue = () => {
    if (inputRef.current.value) {
			dispatch({
				type: 'Set Value',
				value: inputRef.current.value,
			});

			inputRef.current.value = " ";

  }
    return;
  };
  
  return {handleIncrement, handleDecrement, handleReset, handleSetValue};
  
}

export default useCounter;