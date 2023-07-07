const promotionEl = document.querySelector('.overview');
const promotionToggleBtn = document.querySelector('.left_menu');

let isPromotionVisible = false;

promotionToggleBtn.addEventListener('click', function() {
    isPromotionVisible = !isPromotionVisible;
    if (isPromotionVisible) {
        promotionEl.classList.add('block')
    } else {
        promotionEl.classList.remove('block')
    }
});

// 클릭하면 숨긴다 = 원래는 나타나있다.


const headerEl = document.querySelector('.logo-box')
const bannerEl = document.querySelector('.banner')
window.addEventListener('scroll', function(){
    if(window.scrollY > 700) {
        headerEl.classList.add('scroll')
        bannerEl.classList.add('scroll')
    }else{
        headerEl.classList.remove('scroll')
        bannerEl.classList.remove('scroll')
    }
})






const allEl = document.querySelector('intultive-btn button:first')
