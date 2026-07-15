// يستبدل أي صورة غير موجودة بمربع بديل بترقيم الصورة، لحد ما تضيف صورك الحقيقية
document.querySelectorAll('img[data-fallback]').forEach(img => {
  img.addEventListener('error', () => {
    const wrap = img.closest('.frame');
    if (wrap && !wrap.querySelector('.ph')) {
      img.style.display = 'none';
      const ph = document.createElement('div');
      ph.className = 'ph';
      ph.innerHTML = `<span>${img.dataset.fallback}</span><p>أضف الصورة هنا</p>`;
      wrap.appendChild(ph);
    }
  });
});

// لايت بوكس بسيط لصفحة المشاريع
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lightboxImg = lightbox.querySelector('img');
  document.querySelectorAll('.projects-grid .frame img, .projects-teaser .frame img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('open');
    });
  });
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.closest('.lightbox-close')) {
      lightbox.classList.remove('open');
      lightboxImg.src = '';
    }
  });
}
