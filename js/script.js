const navBtn = document.querySelectorAll('.nav-button');
const block = document.querySelectorAll('.block');

const container = document.querySelector('.container');
const body = document.body;


navBtn.forEach(function(item) {
    item.addEventListener('click', () => {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);
        navBtn.forEach(function(item) {
            item.classList.remove('active');
            navigation.classList.remove('navigation_contact');
            navigation.classList.remove('open');
            mBtn.classList.remove('btn-r');
        });
        block.forEach(function(item) {
            item.classList.remove('block-active');
        });
        currentBtn.classList.add('active');
        currentTab.classList.add('block-active');
    })
});



const indicator = document.querySelector('.indicator');


navBtn[0].onclick = () => {
    indicator.style.top = "0%";
    indicator.style.transform = "none";
    body.style.background = "#f0a800";
}

navBtn[1].onclick = () => {
    indicator.style.top = "50%";
    indicator.style.transform = "translateY(-50%)";
    body.style.background = "#783078";
}

//nav

const navigation = document.querySelector('.navigation');

navBtn[2].onclick = () => {
    indicator.style.top = "66.8%";
    indicator.style.transform = "none";
    body.style.background = "#c06048";
    navigation.classList.add('navigation_contact');
}

/* button cert */
const certificateContainer = document.querySelector('.about-me__certificate');
const certificateBtn = document.querySelector('.button-certificate');



certificateBtn.onclick = () => {
    if (certificateContainer.classList.contains('certificate-active')) {
        certificateContainer.classList.remove('certificate-active');
    } else {
        certificateContainer.classList.add('certificate-active');
    }
}

certificateBtn.onmouseenter = () => certificateContainer.style.top = "-15%";
certificateBtn.onmouseleave = () => certificateContainer.style.top = "-16%";

// h2

const h2Word = document.querySelectorAll('.word-h2');

for (let i = 0; i < h2Word.length; i++) {
    h2Word[i].onmouseenter = () => {
        h2Word[i].classList.add('active-h2');
    }
    h2Word[i].onmouseleave = () => {
        h2Word[i].classList.remove('active-h2');
    }
}

//text 

const t1 = document.querySelectorAll('.t1');

for (let i = 0; i < t1.length; i++) {
    t1[i].onmouseenter = () => {
        t1[i].classList.add('active-t1');
    }
    t1[i].onmouseleave = () => {
        t1[i].classList.remove('active-t1');
    }
}



/* my-work */

const btnBxUp = document.querySelector('.bx-chevron-up');
const btnBxDown = document.querySelector('.bx-chevron-down');
let e1 = 1;

const workContainer = document.querySelectorAll('.my-work__info-block');

function MyWorkWeather() {
    btnBxUp.style.display = "none";
}

function MyWorkRoom() {
    btnBxUp.style.display = "block";
    btnBxDown.style.display = "block";
}

function MyWorkIt() {
    btnBxDown.style.display = "none";
}

btnBxDown.onclick = () => {
    e1++;
    if (e1 === 1) {
        MyWorkWeather()
    } else if (e1 === 2) {
        MyWorkRoom();
    } else if (e1 === 3) {
        MyWorkIt();
    }
}

btnBxUp.onclick = () => {
    e1--;
    if (e1 === 1) {
        MyWorkWeather()
    } else if (e1 === 2) {
        MyWorkRoom();
    } else if (e1 === 3) {
        MyWorkIt();
    }
}

/* all input */

const clickInput = document.querySelectorAll('input');

for (let i = 0; i < clickInput.length; i++) {
    clickInput[i].onclick = () => {
        clickInput[i].value = '';
    }
}

//btn contact-me

const contactMeBtn = document.querySelector('#contactMe');

function contactMeBtnClick() {
    navBtn[2].click();
}

contactMeBtn.onclick = contactMeBtnClick;

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




/* contact-me-card */

const contactInfoBtn = document.querySelector('.contact_info-btn');
const contactMeInfoBlock = document.querySelector('.contact-me__info-block');

contactInfoBtn.onclick = () => {
    if (contactMeInfoBlock.classList.contains('open-i-contact')) {
        contactMeInfoBlock.classList.remove('open-i-contact');
        contactInfoBtn.classList.remove('colorI');
    } else {
        contactMeInfoBlock.classList.add('open-i-contact');
        contactMeInfoBlock.style.color = "#c06048";
        contactInfoBtn.classList.add('colorI');
    }
}