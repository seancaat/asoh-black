function toggleEmailModal(e) {
  let target = e.target;
  var modal = document.querySelector('.container.info .email-modal') || document.querySelector('.intro .email-modal');
  modal.classList.toggle('hidden');
}

document.querySelectorAll('.get-updates').forEach(element => {
  element.addEventListener('click', toggleEmailModal, { passive: true });
});
document.querySelectorAll('.email-modal .close').forEach(element => {
  element.addEventListener('click', toggleEmailModal, { passive: true });
});