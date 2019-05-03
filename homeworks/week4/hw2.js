// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('request');
const process = require('process');

request({
  url: 'https://lidemy-book-store.herokuapp.com/books?_limit=20',
},
(err, res, body) => {
  const listJSON = JSON.parse(body);
  const doWhat = process.argv[2];
  const bookId = process.argv[3];
  if (doWhat === 'list') {
    for (let i = 0; i < listJSON.length; i += 1) {
      console.log(`${listJSON[i].id} ${listJSON[i].name}`);
    }
  }
  if (doWhat === 'read') {
    console.log(listJSON[bookId].name);
  }
});
