// Small interaction: add a subtle border to the navbar after scrolling.
const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 20 ? 'rgba(255,255,255,.10)' : 'transparent';
});
