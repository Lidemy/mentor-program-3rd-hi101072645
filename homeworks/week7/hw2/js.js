const content = document.querySelector('.content');
const mail = document.querySelector('input[name="mail"]');
const name = document.querySelector('input[name="nickName"]');
const applyType = document.querySelectorAll('input[name="apply"]');
const radioQuestion = document.querySelector('.radio');
const job = document.querySelector('input[name="job"]');
const howToKnow = document.querySelector('input[name="from"]');
const background = document.querySelector('input[name="background"]');
const btn = document.querySelector('.btn');
const mailRegxp = /\S+@\S+.\S+/;


const fillOrNot = function fillOrNot(question) {
  if (question.value !== '') {
    question.parentElement.classList.remove('not-filled');
    return true;
  }
  question.parentElement.classList.add('not-filled');
  return false;
};

const mustFill = function mustFill(question) {
  question.addEventListener('focusout', () => {
    fillOrNot(question);
  });
  question.addEventListener('keyup', () => {
    fillOrNot(question);
  });
};

function radioFill(radio) {
  let checkedOrNot = false;
  for (let i = 0; i < radio.length; i += 1) {
    if (radio[i].checked) {
      checkedOrNot = true;
      break;
    }
  }
  if (!checkedOrNot) {
    radio[0].parentElement.classList.add('not-filled');
    return checkedOrNot;
  }
  radio[0].parentElement.classList.remove('not-filled');
  return checkedOrNot;
}

function isMailRight() {
  if (!mailRegxp.test(mail.value)) {
    mail.parentElement.classList.add('not-filled');
    mail.nextSibling.textContent = '請提供正確信箱格式';
    return false;
  }
  mail.parentElement.classList.remove('not-filled');
  return true;
}

mustFill(name);
mustFill(job);
mustFill(howToKnow);
mustFill(background);
mustFill(mail);
radioQuestion.addEventListener('click', () => {
  radioFill(applyType);
});


mail.addEventListener('keydown', () => {
  isMailRight();
});

btn.addEventListener('click', (e) => {
  const mailRight = fillOrNot(mail) && isMailRight;
  const nameRight = fillOrNot(name);
  const jobRight = fillOrNot(job);
  const bgRight = fillOrNot(background);
  const howRight = fillOrNot(howToKnow);
  const apply = radioFill(applyType);
  if (!mailRight && !nameRight && !jobRight && !bgRight && !howRight && !apply) {
    e.preventDefault();
  }
  content.innerHTML = `
  <div class="sent">
    我們已經收到您的回答（並沒有），<br />
    感謝您撥冗填答！<br />
    有任何更進一步的消息，<br />
    將會盡快通知您。（應該不會）
  </div>`;
}, false);
