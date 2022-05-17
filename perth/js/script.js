const openBurger = document.getElementById('burger');
const navigation = document.querySelector('.navigation');
const burgerMenu = document.querySelector('.burger_menu');
const body = document.querySelector('body');

openBurger.addEventListener('click', (e) => {
  e.preventDefault();
  navigation.classList.toggle('navigation_open');
  burgerMenu.classList.toggle('open');
  body.classList.toggle('overlay');
  body.style.overflowY = 'hidden';
  if (!e.target.closest('.open')) {
    body.style.overflowY = 'visible';
  }
});

window.addEventListener('click', (e) => {
  if (!e.target.closest('.burger_menu') && !e.target.closest('.burger')) {
    navigation.classList.remove('navigation_open');
    burgerMenu.classList.remove('open');
    body.classList.remove('overlay');
    body.style.overflowY = 'visible';
  }
});