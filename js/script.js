
const block = document.querySelectorAll('.block');

const container = document.querySelector('.container');
const body = document.body;

/* all input */

const clickInput = document.querySelectorAll('input');

for (let i = 0; i < clickInput.length; i++) {
    clickInput[i].onclick = () => {
        clickInput[i].value = '';
    }
}

// burger-menu

const mBtn = document.querySelector('.btn-m');

mBtn.onclick = function openMenu() {
    if (navigation.classList.contains('open')) {
        navigation.classList.remove('open');
        mBtn.classList.remove('btn-r');
    } else {
        navigation.classList.add('open');
        mBtn.classList.add('btn-r');
        navigation.classList.remove('nav-animation');
        navigation.classList.add('nav-animation__mobile');
    }
}

/* windowh */

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });





