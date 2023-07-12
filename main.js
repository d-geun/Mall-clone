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
    if(window.scrollY > 830) {
        headerEl.classList.add('scroll')
        bannerEl.classList.add('scroll')
    }else{
        headerEl.classList.remove('scroll')
        bannerEl.classList.remove('scroll')
    }
})


const imageSlide = document.querySelector('.popular-slide')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
let currentImage = 0;

function getImageSlide(event) {
  imageSlide.forEach(slide => {
    slide.style.transform = `translateX(-${event*33.33}vw)`
  })
}

function prevImageSlide() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = imageSlide.length - 1;
  }
  getImageSlide(currentImage);
}

function nextImageSlide() {
  currentImage++;
  if (currentImage >= imageSlide.length) {
    currentImage = 0;
  }
  getImageSlide(currentImage);
}

prevBtn.addEventListener('click', prevImageSlide)
nextBtn.addEventListener('click', nextImageSlide)




const slides = document.querySelectorAll('.cody .cody__container');
let currentSlideIndex = 0;
let timer = null;

function showSlide(index) {
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${index * 100}vw)`;
  });
}

function prevSlide() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  showSlide(currentSlideIndex);
}

function nextSlide() {
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  showSlide(currentSlideIndex);
}

function startSlideShow() {
  timer = setInterval(() => {
    nextSlide();
  }, 3500);
}

function stopSlideShow() {
  clearInterval(timer);
}

// 이전 버튼 클릭 시 이벤트 핸들러
document.querySelectorAll('.prev').forEach(button => {
  button.addEventListener('click', () => {
    stopSlideShow()
    prevSlide();
    startSlideShow();
  });
});

// 다음 버튼 클릭 시 이벤트 핸들러
document.querySelectorAll('.next').forEach(button => {
  button.addEventListener('click', () => {
    stopSlideShow();
    nextSlide();
    startSlideShow();
  });
});

// 초기 슬라이드 표시 및 자동 슬라이드 시작
showSlide(currentSlideIndex);
startSlideShow();

// * append()메소드를 활용해서 부드러운 이미지 슬라이드로 만들기




