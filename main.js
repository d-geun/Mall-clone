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