const eye = document.querySelectorAll('.eye');
const eyee = document.querySelectorAll('.eyee');

window.addEventListener('mousemove', (e) => {
  const eye1Left = eye[0].getBoundingClientRect().left;
  const eye2Left = eye[1].getBoundingClientRect().left;
  const windowWidth = document.body.clientWidth;

  const movDest1w = (e.pageX - eye1Left) / windowWidth;
  const movDest2w = (e.pageX - eye2Left) / windowWidth;
  eyee[0].style.left = `${5 + (movDest1w * 5)}px`;
  eyee[1].style.left = `${5 + (movDest2w * 5)}px`;
});
