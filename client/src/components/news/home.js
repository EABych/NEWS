
import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './App';
import '../../components/index.css'
// import axios from 'axios';
import reducer from '../../reducers'
// import createSagaMiddleware from 'redux-saga'
// import fetchNews from '../../sagas';




function Home() {
  // const sagaMiddleware = createSagaMiddleware()

  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    
    // applyMiddleware(sagaMiddleware));

  // sagaMiddleware.run(fetchNews);

  return(
    <Provider store = {store}>
    <App />
    </Provider>
    )


}


export default Home; 


