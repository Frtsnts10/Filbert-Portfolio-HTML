// function scrollToElement(elementSelector, instance = 0) {
//   const elements = document.querySelectorAll(elementSelector);
//   if (elements.length > instance) {
//     elements[instance].scrollIntoView({ behavior: "smooth" });
//   }
// }
// window.addEventListener('DOMContentLoaded', function() {
//   const link1 = document.getElementById("link1");
//   const link2 = document.getElementById("link2");
//   const link3 = document.getElementById("Link3");
//   const link4 = document.getElementById("Link4");

//   link1.addEventListener("click", () => {
//     scrollToElement(".header");
//   });
//   link2.addEventListener("click", () => {
//     scrollToElement(".header", 1);
//   });
//   link3.addEventListener("click", () => {
//     scrollToElement(".column");
//   });
//   link4.addEventListener("click", () => {
//     scrollToElement(".header");
//   });
// });



const toggleThemeButton = document.getElementById('toggleThemeButton');

toggleThemeButton.addEventListener('click', () => {
  const bodyElement = document.body;
  if (bodyElement.classList.contains('darkMode')) {
    bodyElement.classList.remove('darkMode');
  } else {
    bodyElement.classList.add('darkMode');
  }
});

const darkModeLogo = document.getElementById('darkModeLogo');
const lightModeLogo = document.getElementById('lightModeLogo');

toggleThemeButton.addEventListener('click', () => {
  if (document.body.classList.contains('darkMode')) {
    darkModeLogo.style.display = 'block';
    lightModeLogo.style.display = 'none';
  } else {
    darkModeLogo.style.display = 'none';
    lightModeLogo.style.display = 'block';
  }
});
