// Lightbox for web portfolio
(function() {
  const lightbox = document.getElementById('web-lightbox');
  const lightboxImg = document.getElementById('web-lightbox-img');
  const closeBtn = lightbox.querySelector('.close');

  document.querySelectorAll('.portfolio-item img').forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'block';
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
})();
