function toggleEmailModal(e) {
  let target = e.target;
  
  var modal = document.querySelector('.container.info .email-modal') || document.querySelector('.intro .email-modal');
  var menuModal =  document.querySelector('.menu .email-modal');

  if (menuModal && document.querySelector('.menu-button.open')) { 
    menuModal.classList.toggle('hidden'); 
    document.querySelector('.menu > .site-nav').classList.toggle('hidden'); 
  } 

  if (document.querySelector('.intro .email-modal')) {
    document.querySelector('.intro-album').classList.toggle('hidden'); 
  }
  modal.classList.toggle('hidden');
}

document.querySelectorAll('.get-updates').forEach(element => {
  element.addEventListener('click', toggleEmailModal, { passive: true });
});
document.querySelectorAll('.email-modal .close').forEach(element => {
  element.addEventListener('click', toggleEmailModal, { passive: true });
});