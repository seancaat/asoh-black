var menu;
function toggleMenu() {
  menu = document.querySelector('.menu');
  menu.classList.toggle('hidden');
  document.querySelector('.menu-button.close').classList.toggle('hidden');
  document.querySelector('.menu-button.open').classList.toggle('hidden');
}

window.addEventListener('DOMContentLoaded', function () {
  document
    .querySelector('.menu-controls')
    .addEventListener('click', toggleMenu, { passive: true });
});
