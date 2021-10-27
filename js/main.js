const searchElement = document.querySelector('.search');
const searchInputElement = searchElement.querySelector('input');

searchElement.addEventListener('click', function () {
    searchInputElement.focus();
});

searchInputElement.addEventListener('focus', function () {
    searchElement.classList.add('focused');
    searchInputElement.setAttribute('placeholder', '통합 검색');
});

searchInputElement.addEventListener('blur', function () {
    searchElement.classList.remove('focused');
    searchInputElement.setAttribute('placeholder', '');
});

const badgeElement = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(function () {
    if (window.scrollY > 500) {
        // gsap.to(요소, 지속시간, 속성)
        gsap.to(badgeElement, 0.6, {
            opacity: 0,
            display: 'none'
        });
    } else {
        gsap.to(badgeElement, 0.6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));

const fadeElements = document.querySelectorAll('.visual .fade-in');
fadeElements.forEach(function (fadeElement, index) {
    gsap.to(fadeElement, 1.0, {
        delay: 0.7 * (index + 1),
        opacity: 1
    });
});

/* new Swiper(선택자, 옵션) */
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //     delay: 5000
    // },
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next',
    }
});

const promotionElement = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
   isHidePromotion = !isHidePromotion;
   if (isHidePromotion) {
       promotionElement.classList.add('hide');
   } else {
       promotionElement.classList.remove('hide');
   }
});