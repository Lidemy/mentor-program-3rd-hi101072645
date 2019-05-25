const countDown = (Math.random() * 2 * 1000) + 1000;
const btn = document.querySelector('.btn');
const wrapper = document.querySelector('.wrapper');
const score = document.querySelector('.score');
let playing = true;
let startTime;
let clickTime;
let costTime;
[startTime, clickTime, costTime] = [0, 0, 0];
let setColor;
const ranks = [];

function randomColor() {
  let colorCode = '#';
  const color = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f'];
  for (let i = 0; i < 6; i += 1) {
    colorCode += color[Math.floor(Math.random() * 16)];
  }
  return colorCode;
}

function changeColor() {
  setColor = setTimeout(() => {
    wrapper.style.backgroundColor = randomColor();
    startTime = new Date();
  }, countDown);
}

function rank(time) {
  let scores = '';
  for (let i = 0; i < 3; i += 1) {
    if (ranks[i] === undefined) {
      ranks.push(time);
      break;
    } else if (time < ranks[i]) {
      ranks.splice(i, 0, time);
      break;
    }
  }
  if (ranks.length > 3) {
    ranks.pop();
  }
  for (let i = 0; i < 3; i += 1) {
    if (ranks[i] !== undefined) {
      scores += `第 ${i + 1} 名： ${ranks[i]} 秒 <br>`;
    }
  }
  score.innerHTML = scores;
}


function clickNow() {
  if (startTime !== 0) {
    clickTime = new Date();
    costTime = (clickTime - startTime) / 1000;
    rank(costTime);
    btn.classList.remove('hide');
    startTime = 0;
    playing = false;
    alert(`反應時間為： ${costTime} 秒`);
  }
}

function notNow(e) {
  e.preventDefault();
  alert('還沒變色喔！');
  startTime = 0;
  clearTimeout(setColor);
  btn.classList.remove('hide');
  playing = false;
}

function resetGame() {
  btn.classList.add('hide');
  playing = true;
  changeColor();
}

changeColor();

wrapper.addEventListener('click', (e) => {
  if (startTime === 0 && playing) {
    notNow(e);
  } else {
    clickNow();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 32) {
    if (startTime === 0 && playing) {
      notNow(e);
    } else {
      clickNow();
    }
  }
}, false);


btn.addEventListener('click', (e) => {
  e.stopPropagation();
  resetGame();
}, false);

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 82) {
    e.stopPropagation();
    resetGame();
  }
}, false);
