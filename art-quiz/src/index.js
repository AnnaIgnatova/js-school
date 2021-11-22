// const createImage = (src) => new Promise((res, rej) => {
//   const img = new Image();
//   img.onload = () => res(img);
//   img.onerror = rej;
//   img.src = src;
// });

// async function render() {
//   const subHeader = document.createElement('h2');
//   subHeader.innerHTML = 'This elements was created by js';
//   const myImage = await createImage(image);
//   document.body.appendChild(subHeader);
//   document.body.appendChild(myImage);
// }

// render();

import './js/main-blocks.js';
import './js/localStorage.js';
import './js/base-functions.js';
import './js/route.js';
import './js/welcome.js';
import './js/category.js';
import './js/score.js';
import './js/game.js';
import './js/artist-question.js';
import './js/pic-question.js';
import './js/modal-window.js';
import './js/settings.js';
