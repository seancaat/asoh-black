function toggleMenu() {
  document.querySelector('.menu').classList.toggle('hidden');
  document.querySelector('.menu-button.close').classList.toggle('hidden');
  document.querySelector('.menu-button.open').classList.toggle('hidden');
}

window.onload = function() {
  document.querySelector('.menu-controls').addEventListener('click', toggleMenu);
}