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
const toTopElement = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
    if (window.scrollY > 500) {
        // gsap.to(요소, 지속시간, 속성)
        gsap.to(badgeElement, 0.6, {
            opacity: 0,
            display: 'none'
        });

        gsap.to(toTopElement, 0.2, {
            x: 0,
        });
    } else {
        gsap.to(badgeElement, 0.6, {
            opacity: 1,
            display: 'block'
        });

        gsap.to(toTopElement, 0.2, {
            x: 100,
        });
    }
}, 300));

toTopElement.addEventListener('click', function () {
    gsap.to(window, 0.7, {
        scrollTo: 0
    });
});

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
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next',
    }
});

new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBeteween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next',
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

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
    gsap.to(selector, random(1.5, 2.5), {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

const spyElements = document.querySelectorAll("section.scroll-spy");
spyElements.forEach(function (spyElement) {
    new ScrollMagic
    .Scene({
        triggerElement: spyElement,
        triggerHook: 0.8
    })
    .setClassToggle(spyElement, 'show')
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();