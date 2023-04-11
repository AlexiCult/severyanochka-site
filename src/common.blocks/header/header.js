const catalogBtn = document.querySelector('.header__catalog-btn');
const catalogDropdown = document.querySelector('.catalog__dropdown');
const dropdownItem = document.querySelectorAll('.dropdown__item');

catalogBtn.addEventListener('click', () => {
  catalogDropdown.classList.toggle('visible');
  dropdownItem.forEach(el => el.classList.toggle('unrotated'));
});

catalogBtn.addEventListener('blur', () => {
  catalogDropdown.classList.remove('visible');
  dropdownItem.forEach(el => el.classList.remove('unrotated'));
});
