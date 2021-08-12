const navBtn = document.querySelectorAll('.nav-button');
const block = document.querySelectorAll('.block');
const blurBg = document.querySelector('#blur');
const container = document.querySelector('.container');


navBtn.forEach(function(item) {
    item.addEventListener('click', () => {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);
        navBtn.forEach(function(item) {
            item.classList.remove('active');
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
}

navBtn[1].onclick = () => {
    indicator.style.top = "50%";
    indicator.style.transform = "translateY(-50%)";
    container.classList.add('container-work');
    if (workSlides[0].classList.contains('swiper-slide-active') && navBtn[1].classList.contains('active')) {
        blurBg.classList.add('blur-weather');
    } else if (workSlides[1].classList.contains('swiper-slide-active') && navBtn[1].classList.contains('active')) {
        blurBg.classList.remove('blur-weather');
        blurBg.classList.add('blur-weather1');
    }
}

navBtn[2].onclick = () => {
    indicator.style.top = "66.8%";
    indicator.style.transform = "none";
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

//swiper

new Swiper('.my-work__slider');

//work
/* blurBg.style.background = " url(../img/weather.png)"; */

const workSlides = document.querySelectorAll(".my-work__slide");

/* if (workSlides[0].classList.contains('swiper-slide-active') && navBtn[1].classList.contains('active')) {
    blurBg.style.background = "url(../img/weather.png)";
    alert('hihihihiihih');
}

workSlides.onclick = function() {
    alert('hihihiih');
} */