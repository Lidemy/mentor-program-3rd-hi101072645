const countDown = Math.random() * 3 * 1000;
const btn = document.querySelector('.btn');
const wrapper = document.querySelector('.wrapper');
const score = document.querySelector('.score');
let isChanged = false;
let timer = 0;
let isPlaying = true;
let setTime = '';
let setColor = '';
const ranks = [];

function randomColor() {
  let colorCode = '#';
  const color = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f'];
  for (let i = 0; i < 6; i += 1) {
    colorCode += color[Math.floor(Math.random() * 16)];
  }
  return colorCode;
}

function clickTime() {
  setTime = setTimeout(() => {
    timer += 0.03;
    setTimeout(clickTime(), 30);
  }, 30);
  return timer.toFixed(2);
}

function changeColor() {
  setColor = setTimeout(() => {
    wrapper.style.backgroundColor = randomColor();
    isChanged = true;
    timer = 0;
    clickTime();
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


function clickWindow() {
  if (!isChanged && isPlaying) {
    alert('還沒變色唷');
    clearTimeout(setColor);
    btn.classList.remove('hide');
    isPlaying = false;
    clearTimeout(setTime);
  } else if (isChanged && isPlaying) {
    btn.classList.remove('hide');
    alert(`反應時間為： ${clickTime()} 秒`);
    rank(clickTime());
    clearTimeout(setTime);
    isChanged = false;
    isPlaying = false;
  }
}

function resetGame() {
  btn.classList.add('hide');
  isChanged = false;
  isPlaying = true;
  changeColor();
}


changeColor();


wrapper.addEventListener('click', () => {
  clickWindow();
}, false);

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 32) {
    clickWindow();
  }
}, false);


btn.addEventListener('click', () => {
  resetGame();
}, false);

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 82) {
    resetGame();
  }
}, false);
