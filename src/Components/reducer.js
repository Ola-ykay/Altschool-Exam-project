const initialState = {count:0} ;

const reducer = (state, action) =>{
  switch (action.type) {
    case "increment":
      return{count: Number(state.count) + 1};
    case "decrement":
      return {count : Number(state.count) - 1};
    case "reset": 
      return {count: (state.count = 0)};
    case "setValue":
      return {count: Number(action.value)}
    default: 
    return {count: state.count};
  } 
}

export default reducer