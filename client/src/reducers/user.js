
 const initialState =  ['Elena_Bychkova'];
 
 function user (state = initialState, action) {
    if (action.type === 'ADD_NEW') {
      return [
        ...state,
        action.text
      ];
    } else if (action.type === 'DELETE_NEW') {
      return [        
          ...state,
        action.text]
    }
    return state;  
    
  }

  export default user