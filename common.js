//  뱃지 스크롤 이벤트

const getScrollBtn = document.querySelector('.scroll-btn')
const getTopBtn = document.querySelector('.scroll-btn .up-scroll')
const getDownBtn = document.querySelector('.scroll-btn .down-scroll')

window.addEventListener('scroll', function(){
  if(scrollY > 200) {
    getScrollBtn.classList.add('block')
  }else{
    getScrollBtn.classList.remove('block')
  }
})

getTopBtn.addEventListener('click', function(){
  window.scrollTo({
    top : 0,
    behavior : 'smooth'
  });
})

getDownBtn.addEventListener('click', function(){
  window.scrollTo({ 
    top: document.documentElement.scrollHeight,
    behavior : 'smooth'
  })
})