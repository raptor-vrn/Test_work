const btn = document.querySelector('.load');
btn.addEventListener('click', openMore);

function openMore () {
    const panelMore = document.querySelectorAll('.panel_more');
    if (panelMore.length == 1) {
        btn.style.display = 'none'
    }
    if (panelMore.length) {
        panelMore[0].classList.remove('panel_more');
        panelMore[0].style.maxHeight = panelMore[0].scrollHeight + "px";
        panelMore[0].style.overflow = 'visible';

    }
}

let titleModal = document.querySelector('[data-title]');
let textModal = document.querySelector('[data-text]');
let imgModal = document.querySelector('[data-img]');
const orderCards = document.querySelectorAll('[data-order]');

for (const card of orderCards) {
    card.onclick = function () {
        let cardTitle = this.querySelector('[data-order-title]').innerText;
        let cardText = this.querySelector('.card__text').innerHTML;
        let cardImg = this.querySelector('.card__img').getAttribute('src');
        titleModal.innerText = cardTitle;
        textModal.innerHTML = cardText;
        imgModal.setAttribute('src', cardImg);
    }
}