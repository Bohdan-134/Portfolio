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
