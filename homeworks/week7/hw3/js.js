const cal = document.querySelector('.calculator');
const screen = document.querySelector('.screen');
screen.textContent = 0;
let scrNum;
let preNum;
let calSym;
let ansNum;
[scrNum, preNum, calSym, ansNum] = ['', '', 0, ''];


function scrChange(e) {
  const num = e.target.textContent;
  scrNum = parseInt(scrNum += num, 10);
  screen.textContent = scrNum;
}

function clickNumber(e) {
  if (screen.textContent === '0') {
    screen.textContent = '';
  }
  if (calSym !== 0) {
    screen.textContent = e.textContent;
  }
  scrChange(e);
}

function calculate() {
  switch (calSym) {
    case 1:
      return preNum + scrNum;
    case 2:
      return preNum - scrNum;
    case 3:
      return preNum * scrNum;
    case 4:
      return preNum / scrNum;
    default:
      return false;
  }
}

function ansOrNot() {
  if (ansNum === '') {
    preNum = scrNum;
    scrNum = '';
  } else {
    ansNum = '';
  }
}

function clearAll() {
  screen.textContent = '0';
  scrNum = '';
  preNum = '';
  calSym = 0;
  ansNum = '';
}

cal.addEventListener('click', (e) => {
  if (e.target.classList.contains('num')) {
    clickNumber(e);
  }
  if (e.target.classList.contains('cals')) {
    calSym = parseInt(e.target.getAttribute('data-cal'), 10);
    ansOrNot();
  }
  if (e.target.id === 'ac') {
    clearAll();
  }
  if (e.target.id === 'equal') {
    ansNum = calculate();
    screen.textContent = ansNum;
    preNum = ansNum;
    scrNum = '';
  }
});
