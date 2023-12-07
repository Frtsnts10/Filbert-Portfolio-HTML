function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const toggleThemeButton = document.getElementById('toggleThemeButton');

toggleThemeButton.addEventListener('click', () => {
  const bodyElement = document.body;
  if (bodyElement.classList.contains('darkMode')) {
    bodyElement.classList.remove('darkMode');
  } else {
    bodyElement.classList.add('darkMode');
  }
});

// const darkModeLogo = document.getElementById('darkModeLogo');
// const lightModeLogo = document.getElementById('lightModeLogo');

// toggleThemeButton.addEventListener('click', () => {
//   if (document.body.classList.contains('darkMode')) {
//     darkModeLogo.style.display = 'block';
//     lightModeLogo.style.display = 'none';
//   } else {
//     darkModeLogo.style.display = 'none';
//     lightModeLogo.style.display = 'block';
//   }
// });
