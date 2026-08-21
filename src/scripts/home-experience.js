const topBtn = document.querySelector('.back-to-top');
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
const motionOK = () => !motionQuery.matches;

const onScrollChrome = () => {
  topBtn?.classList.toggle('is-visible', (window.scrollY || 0) > 560);
};
onScrollChrome();
window.addEventListener('scroll', onScrollChrome, { passive: true });

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
    { threshold: 0.16, rootMargin: '0px 0px -10% 0px' },
  );
  document.querySelectorAll('[data-reveal]').forEach((node) => observer.observe(node));
}

const heroMedia = document.querySelector('.hero-media');
if (heroMedia instanceof HTMLElement && motionOK() && pointerQuery.matches) {
  const reset = () => {
    heroMedia.style.setProperty('--shift-x', '0px');
    heroMedia.style.setProperty('--shift-y', '0px');
  };
  heroMedia.addEventListener('pointermove', (event) => {
    const box = heroMedia.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    heroMedia.style.setProperty('--shift-x', `${(x * 6).toFixed(1)}px`);
    heroMedia.style.setProperty('--shift-y', `${(y * 5).toFixed(1)}px`);
  });
  heroMedia.addEventListener('pointerleave', reset);
}

const pathWrap = document.querySelector('.prayer-path-wrap');
const pathProgress = document.querySelector('.path-spine-progress');
const pathSteps = [...document.querySelectorAll('[data-path-step]')];

const setPathProgress = (value) => {
  if (!(pathProgress instanceof HTMLElement)) return;
  const next = Math.min(1, Math.max(0, value));
  pathProgress.style.setProperty('--path-progress', next.toFixed(3));
  pathSteps.forEach((step, index) => {
    const threshold = pathSteps.length <= 1 ? 0 : index / (pathSteps.length - 1);
    step.classList.toggle('is-lit', next >= threshold - 0.04);
  });
};

const updatePath = () => {
  if (!pathWrap || !pathProgress) return;
  if (!motionOK()) {
    setPathProgress(1);
    return;
  }
  const rect = pathWrap.getBoundingClientRect();
  const view = window.innerHeight || 1;
  const start = view * 0.72;
  const end = view * 0.28;
  const t = (start - rect.top) / (rect.height + (start - end));
  setPathProgress(t);
};

const stages = [...document.querySelectorAll('[data-journey]')];
const railLinks = [...document.querySelectorAll('[data-journey-link]')];

const updateJourney = () => {
  if (stages.length === 0 || railLinks.length === 0) return;
  const marker = (window.innerHeight || 0) * 0.38;
  let active = stages[0];
  for (const stage of stages) {
    const top = stage.getBoundingClientRect().top;
    if (top <= marker) active = stage;
  }
  const id = active?.id;
  railLinks.forEach((link) => {
    const on = link.getAttribute('href') === `#${id}`;
    if (on) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
};

const track = document.querySelector('.showcase-track');
const dots = [...document.querySelectorAll('[data-showcase-dot]')];
const phones = track ? [...track.querySelectorAll('.phone')] : [];

const updateDots = () => {
  if (!(track instanceof HTMLElement) || phones.length === 0) return;
  const origin = track.getBoundingClientRect().left;
  let best = 0;
  let bestDist = Infinity;
  phones.forEach((phone, index) => {
    const dist = Math.abs(phone.getBoundingClientRect().left - origin);
    if (dist < bestDist) {
      bestDist = dist;
      best = index;
    }
  });
  dots.forEach((dot, index) => {
    if (index === best) dot.setAttribute('aria-current', 'true');
    else dot.removeAttribute('aria-current');
  });
};

if (track instanceof HTMLElement) {
  track.addEventListener('scroll', updateDots, { passive: true });
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const phone = phones[index];
      if (!(phone instanceof HTMLElement)) return;
      phone.scrollIntoView({
        inline: 'start',
        block: 'nearest',
        behavior: motionOK() ? 'smooth' : 'auto',
      });
    });
  });
}

const onFrame = () => {
  updatePath();
  updateJourney();
};

onFrame();
updateDots();
window.addEventListener('scroll', onFrame, { passive: true });
window.addEventListener('resize', onFrame);
