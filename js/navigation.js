const navBtn = document.querySelectorAll('.nav-button');
const navigation = document.querySelector('.navigation');

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

navBtn[0].onclick = () => {
    body.style.background = "#f0a800";
}

navBtn[1].onclick = () => {
    body.style.background = "#783078";
}

navBtn[2].onclick = () => {
    body.style.background = "#c06048";
    navigation.classList.add('navigation_contact');
}