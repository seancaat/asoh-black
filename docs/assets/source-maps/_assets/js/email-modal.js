function toggleEmailModal(e) {
  let target = e.target;
  
  var modal = document.querySelector('.container.info .email-modal') || document.querySelector('.intro .email-modal');
  var menuModal = document.querySelector('.menu .email-modal'); 

  modal.classList.toggle('hidden');
  if (menuModal) {
    console.log("there is a menu modal")
    menuModal.classList.toggle('hidden');
  }
}

document.querySelectorAll('.get-updates').forEach(element => {
  element.addEventListener('click', toggleEmailModal, { passive: true });
});
document.querySelectorAll('.email-modal .close').forEach(element => {
  element.addEventListener('click', toggleEmailModal, { passive: true });
});