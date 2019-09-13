
const initialState =  [];

  export default function filterNews (state = initialState, action) {
    if (action.type === "FIND_KEYWORD") {
      return action.payload;
    } 
    return state;  
}

