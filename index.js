const axios = require('axios');
const fs = require('fs');

axios.get('https://stoicquotesapi.com/v1/api/quotes/random')
  .then(response => {
    const quote = response.data.body;
    fs.writeFileSync('quote.txt', quote);
  })
  .catch(error => {
    console.log(error);
  });
