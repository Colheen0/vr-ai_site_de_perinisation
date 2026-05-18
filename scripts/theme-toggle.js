const buttonToggle = document.querySelector('[data-theme-toggle]');
const htmlElement = document.documentElement;
buttonToggle.addEventListener('click', () => {
const currentTheme = htmlElement.getAttribute('data-theme');
const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
htmlElement.setAttribute('data-theme', newTheme);
});