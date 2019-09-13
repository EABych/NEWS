import { combineReducers } from 'redux';
import news from './news';
import user from './user';
import filterNews from './FIndFilterNews';


export default combineReducers({
  user,
  news,
  filterNews
})