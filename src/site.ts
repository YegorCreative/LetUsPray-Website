/**
 * Site constants for the LetUsPray public website.
 * Brand tokens, App Store URL, and approved copy are supplied by the owner.
 */
export const site = {
  name: 'LetUsPray',
  canonicalOrigin: 'https://letusprayapp.com',
  /** Official App Store listing URL. Null until the owner supplies it. */
  appStoreUrl: null as string | null,
  /** Official Apple badge asset in /public. Null until the owner supplies it. */
  appStoreBadgeSrc: null as string | null,
};

export const defaultDescription =
  'Development placeholder. Owner-approved page description pending.';

export function normalizePath(pathname: string): string {
  let path = pathname.replace(/\.html$/, '');
  if (path === '/index' || path === 'index' || path === '') {
    return '/';
  }
  if (path.length > 1) {
    path = path.replace(/\/+$/, '');
  }
  return path === '' ? '/' : path;
}

export function canonicalUrl(path: string): string {
  const origin = site.canonicalOrigin.replace(/\/$/, '');
  const normalized = normalizePath(path);
  return normalized === '/' ? origin : `${origin}${normalized}`;
}

export function pageTitle(title: string, isHome = false): string {
  return isHome ? title : `${title} · ${site.name}`;
}

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/support', label: 'Support' },
  { href: '/contact', label: 'Contact' },
  { href: '/feedback', label: 'Feedback' },
] as const;

export const footerItems = [
  { href: '/support', label: 'Support' },
  { href: '/contact', label: 'Contact' },
  { href: '/feedback', label: 'Feedback' },
  { href: '/privacy', label: 'Privacy' },
] as const;
