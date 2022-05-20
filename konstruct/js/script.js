const links = document.querySelector('.menu');
const openCloseBurger = document.getElementById('burger');
const burger = document.querySelector('.burger_menu');
const openCloseMenu = document.querySelector('.menu');
const body = document.querySelector('body');


links.addEventListener('click', (event) => {
  links.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
});

openCloseBurger.addEventListener('click', (e) => {
  e.preventDefault();
  burger.classList.toggle('show');
  openCloseMenu.classList.toggle('menu_bar__show');
  body.classList.toggle('overlay');
  body.style.overflowY = 'hidden';
  if (!e.target.closest('.show')) {
    body.style.overflowY = 'visible';
  }
});

window.addEventListener('click', (e) => {
  if (!e.target.closest('.burger_menu')) {
    burger.classList.remove('show');
    openCloseMenu.classList.remove('menu_bar__show');
    body.style.overflowY = 'visible';
  }
});