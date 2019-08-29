var menu;
function toggleMenu() {
  menu = document.querySelector('.menu');
  menu.classList.toggle('hidden');
  document.querySelector('.menu-button.close').classList.toggle('hidden');
  document.querySelector('.menu-button.open').classList.toggle('hidden');
}

function toggleEmailModal(e) {
  if (!menu) menu = document.querySelector('.menu');
  var target = e.target;
  if (menu.contains(target)) {
    document.querySelector('.menu > .email-modal').classList.toggle('hidden');
    document.querySelector('.menu > .site-nav').classList.toggle('hidden');
  }
  else {
    // open up modal that's not in the menu i.e in the info page
  }
}

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.menu-controls').addEventListener('click', toggleMenu);
  document.querySelector('.get-updates').addEventListener('click', toggleEmailModal);
});
