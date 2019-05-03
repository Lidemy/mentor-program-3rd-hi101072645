// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('request');

request({
  url: 'https://lidemy-book-store.herokuapp.com/books?_limit=10',
},
(err, res, body) => {
  const listJSON = JSON.parse(body);
  for (let i = 0; i < listJSON.length; i += 1) {
    console.log(`${listJSON[i].id} ${listJSON[i].name}`);
  }
});
