const links = document.querySelector('.navigation_bar');
const openCloseBurger = document.getElementById('burger');
const burgerMenu = document.querySelector('.burger_menu');
const openCloseMenu = document.querySelector('.navigation_bar');
const body = document.querySelector('body');
const html = document.querySelector('html');

links.addEventListener('click', (event) => {
    links.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
  });

  openCloseBurger.addEventListener('click', (e) => {
    e.preventDefault();
    burgerMenu.classList.toggle('show');
    openCloseMenu.classList.toggle('navigation_bar__show');
   /* body.classList.toggle('overlay');*/
    body.style.overflowY = 'hidden';
    html.style.overflowY = 'hidden';
    if (!e.target.closest('.show')) {
      body.style.overflowY = 'visible';
    }
  });

  window.addEventListener('click', (e) => {
    if (!e.target.closest('.burger_menu')) {
      burgerMenu.classList.remove('show');
      openCloseMenu.classList.remove('navigation_bar__show');
      body.style.overflowY = 'visible';
      html.style.overflowY = 'visible';
    }
  });