const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#site-menu');

if (!toggle || !menu || !(toggle instanceof HTMLButtonElement)) {
  // Header markup missing; nothing to bind.
} else {
  let lastY = 0;

  const focusables = () => {
    const items = [...menu.querySelectorAll('a')];
    return [toggle, ...items].filter(
      (el) => el instanceof HTMLElement && !el.hasAttribute('disabled'),
    );
  };

  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';

  const lockScroll = () => {
    lastY = window.scrollY || 0;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${lastY}px`;
    document.body.style.insetInline = '0';
    document.body.style.width = '100%';
  };

  const unlockScroll = () => {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.insetInline = '';
    document.body.style.width = '';
    window.scrollTo(0, lastY);
  };

  const setClosedState = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    menu.setAttribute('aria-hidden', 'true');
    menu.inert = true;
    document.body.classList.remove('menu-open');
  };

  const open = () => {
    document.body.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    menu.removeAttribute('aria-hidden');
    menu.inert = false;
    lockScroll();
    const firstLink = menu.querySelector('a');
    if (firstLink instanceof HTMLElement) firstLink.focus();
  };

  const close = ({ restore = true } = {}) => {
    if (!isOpen()) return;
    unlockScroll();
    setClosedState();
    if (restore) toggle.focus();
  };

  setClosedState();

  toggle.addEventListener('click', () => {
    if (isOpen()) close();
    else open();
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => close({ restore: false }));
  });

  document.addEventListener('keydown', (event) => {
    if (!isOpen()) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      close();
      return;
    }

    if (event.key !== 'Tab') return;
    const nodes = focusables();
    if (nodes.length === 0) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (!isOpen()) return;
    if (window.matchMedia('(min-width: 48rem)').matches) {
      close({ restore: false });
    }
  });
}

const onHeaderScroll = () => {
  header?.classList.toggle('is-scrolled', (window.scrollY || 0) > 16);
};
onHeaderScroll();
window.addEventListener('scroll', onHeaderScroll, { passive: true });
