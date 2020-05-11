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
  } else {
    document
      .querySelector('.container.info .email-modal')
      .classList.toggle('hidden');
  }
}

window.addEventListener('DOMContentLoaded', function() {
  document
    .querySelector('.menu-controls')
    .addEventListener('click', toggleMenu, { passive: true });
  document.querySelectorAll('.get-updates').forEach(element => {
    element.addEventListener('click', toggleEmailModal, { passive: true });
  });
  document.querySelectorAll('.email-modal .close').forEach(element => {
    element.addEventListener('click', toggleEmailModal, { passive: true });
  });
  document.querySelector('.toast').classList.remove('toast-hidden');
});
