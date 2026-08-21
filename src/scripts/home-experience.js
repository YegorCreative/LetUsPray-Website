const header = document.querySelector('.site-header');
const topBtn = document.querySelector('.back-to-top');
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

const motionOK = () => !motionQuery.matches;

const onScroll = () => {
  const y = window.scrollY || 0;
  header?.classList.toggle('is-scrolled', y > 16);
  topBtn?.classList.toggle('is-visible', y > 560);
};

onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

topBtn?.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: motionOK() ? 'smooth' : 'auto' });
});

if (motionOK() && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('js-motion');
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
  );
  document.querySelectorAll('[data-reveal]').forEach((node) => observer.observe(node));
}

const heroMedia = document.querySelector('.hero-media');
if (heroMedia && motionOK() && pointerQuery.matches) {
  const reset = () => {
    heroMedia.style.setProperty('--shift-x', '0px');
    heroMedia.style.setProperty('--shift-y', '0px');
  };
  heroMedia.addEventListener('pointermove', (event) => {
    const box = heroMedia.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    heroMedia.style.setProperty('--shift-x', `${(x * 8).toFixed(1)}px`);
    heroMedia.style.setProperty('--shift-y', `${(y * 6).toFixed(1)}px`);
  });
  heroMedia.addEventListener('pointerleave', reset);
}
