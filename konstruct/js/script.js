const links = document.querySelector('.menu');

links.addEventListener('click', (event) => {
    links.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
})