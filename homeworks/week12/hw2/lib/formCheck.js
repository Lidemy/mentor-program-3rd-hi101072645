const btn = document.querySelector("button[type='submit']");
const column = document.querySelectorAll('input');
const form = document.querySelector('form');


btn.addEventListener('click', (e) => {
  // e.preventDefault();
  // 欄位必填
  for (let i = 0; i < column.length; i += 1) {
    if (column[i].value === '') {
      // console.log('空！');
      column[i].parentElement.classList.add('empty');
      e.preventDefault();
    }
  }
});

// 清除必填提醒
form.addEventListener('keyup', (e) => {
  if (e.target.nodeName === 'INPUT' && e.target.value !== '') {
    e.target.parentElement.classList.remove('empty');
  } else if (e.target.nodeName === 'INPUT' && e.target.value === '') {
    e.target.parentElement.classList.add('empty');
  }
});
