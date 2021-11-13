const nav = document.querySelector('.nav');
const main = document.getElementById('main');

//window.addEventListener('scroll',navScroll);
//window.addEventListener('scroll',mainMove);

function navScroll(){
    nav.classList.toggle('active',window.scrollY > 0);
}

function mainMove(){
    main.classList.toggle('mainMove',window.scrollY > 0);
}