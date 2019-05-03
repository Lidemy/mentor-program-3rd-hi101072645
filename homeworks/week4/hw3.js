// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('request');
const process = require('process');

const doWhat = process.argv[2];
const bookId = process.argv[3];

if (doWhat === 'list') {
  request({
    url: 'https://lidemy-book-store.herokuapp.com/books?_limit=20',
  },
  (err, res, body) => {
    const listJSON = JSON.parse(body);
    for (let i = 0; i < listJSON.length; i += 1) {
      console.log(`${listJSON[i].id} ${listJSON[i].name}`);
    }
  });
}

if (doWhat === 'read') {
  request({
    url: `https://lidemy-book-store.herokuapp.com/books/${bookId}`,
  },
  (err, res, body) => {
    const listJSON = JSON.parse(body);
    console.log(listJSON.name);
  });
}

if (doWhat === 'delete') {
  request.del({
    url: `https://lidemy-book-store.herokuapp.com/books/${bookId}`,
  });
}

if (doWhat === 'update') {
  request.patch(
    `https://lidemy-book-store.herokuapp.com/books/${bookId}`,
    {
      form: {
        name: process.argv[4],
      },
    },
  );
}

if (doWhat === 'create') {
  request.post(
    'https://lidemy-book-store.herokuapp.com/books',
    {
      form: {
        name: process.argv[3],
      },
    },
    (err, res, body) => {
      console.log(body);
    },
  );
}
