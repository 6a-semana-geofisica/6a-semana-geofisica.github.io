(function () {
  if (localStorage.getItem('modal-invitation-dismissed') === 'true') return;

  document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.getElementById('modal-invitation-overlay');
    if (!overlay) return;

    setTimeout(function () {
      overlay.classList.add('show');
    }, 800);

    var closeBtn = document.getElementById('modal-invitation-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        overlay.classList.remove('show');
        localStorage.setItem('modal-invitation-dismissed', 'true');
      });
    }

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        overlay.classList.remove('show');
        localStorage.setItem('modal-invitation-dismissed', 'true');
      }
    });
  });
})();
