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