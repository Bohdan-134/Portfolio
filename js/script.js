const navBtn = document.querySelectorAll('.nav-button');
const block = document.querySelectorAll('.block');

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
}

navBtn[2].onclick = () => {
    indicator.style.top = "66.8%";
    indicator.style.transform = "none";
}