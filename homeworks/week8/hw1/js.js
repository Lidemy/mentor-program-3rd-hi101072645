const request = new XMLHttpRequest();
const wrapper = document.querySelector('.wrapper');
const btn = document.querySelector('.btn');
const prize = document.querySelector('.prize');
let result;
function showPrize(res) {
  switch (res) {
    case 'FIRST':
      prize.innerHTML = `<img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;w=1000&amp;q=80" alt=""/><br/>
      <h2>恭喜你中頭獎了！日本東京來回雙人遊！</h2>`;
      wrapper.classList.add('first');
      break;
    case 'SECOND':
      prize.innerHTML = `<img src="https://images.unsplash.com/photo-1467293622093-9f15c96be70f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt=""/><br/>
      <h2>二獎！90 吋電視一台！</h2>`;
      break;
    case 'THIRD':
      prize.innerHTML = `<img src="https://i.imgur.com/JR4ZJyh.jpg" alt=""/><br/>
        <h2>恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！</h2>`;
      break;
    case 'NONE':
      wrapper.classList.add('none');
      prize.innerHTML = '<h2>銘謝惠顧！</h2>';
      break;
    default:
      return false;
  }
  return true;
}

request.addEventListener('load', () => {
  if (request.status >= 200 && request.status < 400) {
    result = JSON.parse(request.responseText).prize;
  } else {
    alert('系統不穩定，請再試一次');
  }
});
request.onerror = function () {
  alert('系統不穩定，請再試一次');
};
request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true);
request.send();

btn.addEventListener('click', () => {
  if (btn.textContent === '再試一次') {
    wrapper.classList.remove('first');
    wrapper.classList.remove('none');
    prize.innerHTML = '';
    btn.textContent = '立即抽獎';
  } else {
    request.addEventListener('load', () => {
      if (request.status >= 200 && request.status < 400) {
        result = JSON.parse(request.responseText).prize;
      } else {
        alert('系統不穩定，請再試一次');
      }
    });
    request.onerror = function () {
      alert('系統不穩定，請再試一次');
    };
    request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true);
    request.send();
    showPrize(result);
    btn.textContent = '再試一次';
  }
});
