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