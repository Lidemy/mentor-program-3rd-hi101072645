const request = new XMLHttpRequest();
const newPost = new XMLHttpRequest();
const posts = document.querySelector('.posts');
const btn = document.getElementById('btn');
const newMesg = document.getElementById('new');

request.addEventListener('load', () => {
  if (request.status >= 200 && request.status < 400) {
    const mesg = JSON.parse(request.responseText);
    for (let i = 0; i < mesg.length; i += 1) {
      const div = document.createElement('div');
      div.classList.add('post');
      div.innerHTML = `<h3>#${mesg[i].id}</h3>
      <div class="content">${mesg[i].content}</div>`;

      posts.appendChild(div);
    }
  } else {
    console.log(request.status);
  }
});

request.onerror = function () {
  console.log('errer');
};

request.open('GET', 'https://lidemy-book-store.herokuapp.com/posts?_order=desc', true);

request.send();

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (newMesg.value !== '') {
    const data = `content=${newMesg.value}`;
    newPost.open('POST', 'https://lidemy-book-store.herokuapp.com/posts', true);
    newPost.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    newPost.send(data);
    newMesg.value = '';
    posts.innerHTML = '';
    request.open('GET', 'https://lidemy-book-store.herokuapp.com/posts?_order=desc', true);
    request.send();
  } else {
    alert('請輸入留言內容唷！');
  }
});
