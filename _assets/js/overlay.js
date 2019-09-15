function openOverlay(e) {
  var target = e.target;
  var parent = target.parentElement;
  if (
    target.classList.contains('video-overlay-trigger') ||
    parent.classList.contains('video-overlay-trigger')
  ) {
    var url =
      target.getAttribute('data-src') || parent.getAttribute('data-src');
    var videoOverlay = document.querySelector('.video-overlay.hidden');
    if (videoOverlay) {
      videoOverlay.querySelector('iframe').src = url;
      videoOverlay.classList.remove('hidden');
    }
  }
}

function closeOverlay() {
  var videoOverlay = document.querySelector('.video-overlay');
  if (videoOverlay) {
    videoOverlay.classList.add('hidden');
    videoOverlay.querySelector('iframe').src = '';
  }
}

window.addEventListener('DOMContentLoaded', function() {
  document
    .querySelector('.videos')
    .addEventListener('click', openOverlay, { passive: true });
  document
    .querySelector('.video-overlay-close')
    .addEventListener('click', closeOverlay, { passive: true });
});
