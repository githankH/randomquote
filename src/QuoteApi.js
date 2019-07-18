import axios from 'axios';
/* 
source: https://github.com/lukePeavey/quotable 
api: https://api.quotable.io/random
*/

export default axios.create({
    baseURL:'https://api.quotable.io/'
});