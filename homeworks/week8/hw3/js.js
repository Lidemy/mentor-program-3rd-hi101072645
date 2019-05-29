const request = new XMLHttpRequest();
const wrapper = document.querySelector('.wrapper');
const btn = document.querySelector('.btn');
let loadMore = 0;

request.addEventListener('load', () => {
  if (request.status >= 200 && request.status < 400) {
    const { streams } = JSON.parse(request.responseText);
    for (let i = 0; i < 20; i += 1) {
      const div = document.createElement('div');
      let streamTitle = '';
      div.classList.add('stream');

      if (streams[i].channel.status.length > 18) {
        streamTitle = `${streams[i].channel.status.slice(0, 18)}...`;
      } else {
        streamTitle = streams[i].channel.status;
      }
      div.innerHTML = `<img src="${streams[i].preview.medium}" alt=""/>
      <div class="info"><img src="${streams[i].channel.logo}" alt=""/>
        <div> 
          <p>${streamTitle}</p>
          <p>${streams[i].channel.name}</p>
        </div>
      </div>`;

      wrapper.appendChild(div);
    }
  } else {
    console.log(request.status);
  }
});

request.onerror = function () {
  console.log('error!');
};

request.open('GET', 'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends&limit=20', true);

request.setRequestHeader('Client-ID', '8x25m0rmkmapk5rcpzjw169kedlbhj');
request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');

request.send();


btn.addEventListener('click', () => {
  loadMore += 1;
  request.open('GET', `https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends&limit=20&offset=${loadMore}`, true);

  request.setRequestHeader('Client-ID', '8x25m0rmkmapk5rcpzjw169kedlbhj');
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');

  request.send();
});
