// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
// import Api from '...';
import axios from 'axios';


function* fetchNews(action) {
  try {
    yield axios.get('http://localhost:3000/news')
    .then(res => {
      const initialState =  [];
      const sourceDB = res.data.allNews;
      sourceDB.forEach(element => {
        initialState.push(element.text);
      }); 
      return initialState;

    });
 }
 catch (e) {
  console.log(e); 
}
}


 export default fetchNews;