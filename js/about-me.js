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

//btn contact-me

const contactMeBtn = document.querySelector('#contactMe');

function contactMeBtnClick() {
    navBtn[2].click();
}

contactMeBtn.onclick = contactMeBtnClick;