// import axios from 'axios';

 const initialState =  [];
 
//  axios.get('http://localhost:3000/news')
//  .then(res => {
//    const sourceDB = res.data.allNews;
//    sourceDB.forEach(element => {
//      initialState.push(element.text);
//    });
//    console.log('top initialState', initialState);  
//  });

 console.log('initialState', initialState);  

 function news (state = initialState, action) {
    if (action.type === 'ADD_NEW') {
      return [
        ...state,
        action.payload
      ];
    } else if (action.type === 'DELETE_NEW') {
      return [        
          ...state,
        action.text]
    }
    return state;  
    
  }

  export default news