const buttonToggle = document.querySelector('[data-theme-toggle]');
const htmlElement = document.documentElement;

(function initTheme() {
  const stored = localStorage.getItem('theme');
  if (stored) {
    htmlElement.setAttribute('data-theme', stored);
  } else {
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersLight || prefersDark) {
      htmlElement.setAttribute('data-theme', prefersLight ? 'light' : 'dark');
    }
  }
})();

buttonToggle.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});