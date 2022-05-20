const links = document.querySelector('.menu');
const openBurger = document.getElementById('burger');
const nav = document.querySelector('.menu_bar');
const burgerMenu = document.querySelector('.burger_menu');
const body = document.querySelector('body');


links.addEventListener('click', (event) => {
  links.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
});

openBurger.addEventListener('click', (e) => {
  e.preventDefault();
  nav.classList.toggle('menu_bar__show');
  burgerMenu.classList.toggle('show');
  body.classList.toggle('overlay');
  body.style.overflowY = 'hidden';
});
window.addEventListener('click', (e) => {
  if (!e.target.closest('.burger_menu') && !e.target.closest('burger')) {
    nav.classList.remove('menu_bar__show');
    burgerMenu.classList.remove('show');
    body.classList.remove('overlay');
    body.style.overflowY = 'visible';
  }
});