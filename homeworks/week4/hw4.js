// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('request');

request(
  {
    url: 'https://api.twitch.tv/helix/games/top',
    headers: {
      'Client-ID': '8x25m0rmkmapk5rcpzjw169kedlbhj',
    },
  },
  (err, res, body) => {
    const topList = JSON.parse(body).data;
    for (let i = 0; i < topList.length; i += 1) {
      console.log(topList[i].id, topList[i].name);
    }
  },
);
