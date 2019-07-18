import {combineReducers} from 'redux';

const quoteReducer = (state={content:'hi there !',author:'someone'},action)=>{
  switch(action.type){
    case 'FETCH_QUTOE':
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
    quote: quoteReducer,
});