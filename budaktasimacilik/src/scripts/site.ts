export {};
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const header = document.querySelector<HTMLElement>('#site-header');
const menu = document.querySelector<HTMLElement>('#mobile-nav');
const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const desktop = window.matchMedia('(min-width: 768px)');
function closeMenu(returnFocus = false) {
  if (!menu || !menuToggle) return;
  menu.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Menüyü aç');
  if (returnFocus) menuToggle.focus();
}
menuToggle?.addEventListener('click', () => {
  if (!menu || !menuToggle) return;
  const open = menu.hidden;
  menu.hidden = !open;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
});
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
desktop.addEventListener('change', () => { if (desktop.matches) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu && !menu.hidden) closeMenu(true); });
document.addEventListener('click', event => { if (menu && !menu.hidden && event.target instanceof Node && !header?.contains(event.target)) closeMenu(); });
window.addEventListener('scroll', () => header?.classList.toggle('scrolled', window.scrollY > 35), { passive: true });
header?.classList.toggle('scrolled', window.scrollY > 35);
// Readable without JavaScript. Reveal only when supported and motion is allowed.
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const reveals = document.querySelectorAll<HTMLElement>('.reveal');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.07 });
  reveals.forEach(element => observer.observe(element));
  document.documentElement.classList.add('js-motion');
}
const sections = [...document.querySelectorAll<HTMLElement>('main > section[id]')].filter(section => section.id !== 'anasayfa');
const navLinks = document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]');
// Select the last section whose heading has passed the navigation line. This also
// handles sections taller than the viewport and direct fragment navigation.
let navScheduled = false;
function updateNavigation() {
  const active = sections.filter(section => section.getBoundingClientRect().top <= 170).at(-1);
  navLinks.forEach(link => {
    if (!link.hash || link.pathname !== window.location.pathname) return;
    if (link.hash === `#${active?.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  navScheduled = false;
}
window.addEventListener('scroll', () => { if (!navScheduled) { navScheduled = true; requestAnimationFrame(updateNavigation); } }, { passive: true });
window.addEventListener('resize', updateNavigation);
updateNavigation();
const items = [...document.querySelectorAll<HTMLButtonElement>('[data-gallery-index]')];
const dialog = document.querySelector<HTMLDialogElement>('#gallery-dialog');
const image = document.querySelector<HTMLImageElement>('#lightbox-image');
const video = document.querySelector<HTMLVideoElement>('#lightbox-video');
const videoDownload = document.querySelector<HTMLAnchorElement>('#lightbox-video-download');
const title = document.querySelector<HTMLElement>('#lightbox-title');
const note = document.querySelector<HTMLElement>('#lightbox-note');
const counter = document.querySelector<HTMLElement>('#lightbox-counter');
let current = 0;
let galleryOpener: HTMLElement | null = null;
function releaseVideo() {
  if (!video) return;
  video.pause();
  video.removeAttribute('src');
  video.removeAttribute('poster');
  video.load();
}
function showImage(index: number) {
  current = (index + items.length) % items.length;
  const item = items[current];
  if (!item || !image || !video || !title || !note || !counter) return;
  releaseVideo();
  const isVideo = item.dataset.type === 'video';
  image.hidden = isVideo;
  video.hidden = !isVideo;
  if (isVideo) {
    // No video URL is attached until a visitor opens the selected clip.
    video.poster = item.dataset.poster || '';
    video.src = item.dataset.src || '';
    video.setAttribute('aria-label', item.dataset.alt || item.dataset.title || 'Video');
    if (videoDownload) videoDownload.href = item.dataset.src || '';
  } else {
    image.src = item.dataset.src || '';
    image.alt = item.dataset.alt || '';
  }
  title.textContent = item.dataset.title || '';
  note.textContent = isVideo ? `Sessiz video · ${item.dataset.duration || ''} · Oynat düğmesiyle başlatın` : 'Fotoğraf';
  counter.textContent = `${current + 1} / ${items.length}`;
}
items.forEach((item, index) => item.addEventListener('click', () => {
  if (!dialog) return;
  galleryOpener = item;
  showImage(index);
  dialog.showModal();
  document.body.classList.add('modal-open');
  dialog.querySelector<HTMLButtonElement>('.lightbox-close')?.focus();
}));
dialog?.querySelector('.lightbox-close')?.addEventListener('click', () => dialog.close());
dialog?.querySelector('.lightbox-prev')?.addEventListener('click', () => showImage(current - 1));
dialog?.querySelector('.lightbox-next')?.addEventListener('click', () => showImage(current + 1));
dialog?.addEventListener('keydown', event => {
  // Preserve the native player's keyboard seeking and volume controls.
  if (event.target === video) return;
  if (event.key === 'ArrowLeft') { event.preventDefault(); showImage(current - 1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); showImage(current + 1); }
});
dialog?.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog?.addEventListener('close', () => { releaseVideo(); document.body.classList.remove('modal-open'); galleryOpener?.focus({ preventScroll: true }); });
let touchStartX = 0;
image?.addEventListener('touchstart', event => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
image?.addEventListener('touchend', event => { const delta = event.changedTouches[0].clientX - touchStartX; if (Math.abs(delta) > 55) showImage(current + (delta < 0 ? 1 : -1)); }, { passive: true });
