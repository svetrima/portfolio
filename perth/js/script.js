const openBurger = document.getElementById('burger');
	openBurger.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.burger_menu').classList.toggle('open');
    document.querySelector('.navigation').classList.toggle('open');
    document.querySelector('.logo').classList.toggle('open');
    document.querySelector('body').classList.toggle('overlay');
});