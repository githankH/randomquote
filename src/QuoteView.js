import React from 'react';
import {connect} from 'react-redux';

import {fetchOneQuote} from './QuoteAction';


const QuoteView = (props)=>{
  return(
    <div className='ui cards' id="quote-box">
      <div className='card'>
        <div className='content'>
          <div className='header' id="text"> {props.quote.content}</div>
          <div className='description' id='author'>{`~~~ ${props.quote.author} ~~~`}</div>
        </div>
        <div class="ui three bottom attached  buttons">
        
        <div class="ui button" >
          <a href='https://twitter.com/intent/tweet' >
          <i class="twitter icon" />
          </a>
        </div>
        <div class="ui button" >
          <a href='https://github.com/githankH/randomquote' >
          <i class="github icon" />
          </a>
        </div>

        <div class="ui button" id='new-quote' onClick={props.getRandomQuote}>
          <i class="hand point up outline icon" />
        </div>
        </div>
      </div>
    </div>

    /*<div>
      <div id="text">
        <h1>{props.quote.content}</h1>
      </div>
      <div id="author">
      <h5>{`~~~ ${props.quote.author} ~~~`}</h5>
      </div>
      <button id='new-quote' onClick={props.getRandomQuote}>random</button>
      <a href='https://twitter.com/intent/tweet' >tweet it</a>
    </div>*/
  );
}

const mapStateToProps = (state)=>({
  quote: state.quote,
});
/*
const mapDispatchToProps = (dispatch)=>({
    getRandomQuote: ()=>dispatch(fetchOneQuote())
});
export default connect(mapStateToProps,mapDispatchToProps)(QuoteView);
*/
export default connect(mapStateToProps,{getRandomQuote:fetchOneQuote})(QuoteView);
