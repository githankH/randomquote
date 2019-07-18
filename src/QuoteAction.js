import QuoteApi from './QuoteApi';

export const fetchOneQuote = ()=> async (dispatch) => {
  const resp = await QuoteApi.get('/random')
  const {content,author} = resp.data;
  console.log(resp);
  dispatch({        
      type: 'FETCH_QUTOE',
      payload: {content,author},
  });
}
/*
export const fetchDefaultQuote = () => {
    return ({
        type: 'FETCH_QUTOE',
        payload: 'what the quote !!'
    });
};*/