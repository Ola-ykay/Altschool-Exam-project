const initialState = {count:0} ;

const reducer = (state, action) => {
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


export default reducer