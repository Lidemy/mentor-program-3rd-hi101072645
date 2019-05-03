// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('request');

let nextPage = '';
request(
  {
    url: 'https://api.twitch.tv/helix/streams?game_id=21779&first=100',
    headers: {
      'Client-ID': '8x25m0rmkmapk5rcpzjw169kedlbhj',
    },
  },
  (err, res, body) => {
    const topList = JSON.parse(body).data;
    for (let i = 0; i < topList.length; i += 1) {
      console.log(`${i + 1}. ${topList[i].title} id:${topList[i].id}`);
    }
    nextPage = JSON.parse(body).pagination.cursor;
  },
);
request(
  {
    url: `https://api.twitch.tv/helix/streams?game_id=21779&first=100&after${nextPage}`,
    headers: {
      'Client-ID': '8x25m0rmkmapk5rcpzjw169kedlbhj',
    },
  },
  (err, res, body) => {
    const topList = JSON.parse(body).data;
    for (let i = 0; i < topList.length; i += 1) {
      console.log(`${i + 101}. ${topList[i].title} id:${topList[i].id}`);
    }
  },
);
