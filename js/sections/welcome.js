// js/sections/welcome.js

let root;

export function initWelcome() {
  const app = document.querySelector('#app');

  // Root container for this section
  root = document.createElement('section');

  /* ---------- First block ---------- */

  const introDiv = document.createElement('div');

  const title = document.createElement('h1');
  title.classList.add('center', 'hotpink');
  title.textContent = 'Welcome user!';

  const p1 = document.createElement('p');
  p1.classList.add('center');
  p1.textContent =
    'To make sure you are really the person I am looking for, I need a few details first!';

  const p2 = document.createElement('p');
  p2.classList.add('center');
  p2.textContent = 'Are you ready for a quick questionnaire?';

  introDiv.append(title, p1, p2);

  /* ---------- Second block ---------- */

  const mainDiv = document.createElement('div');
  mainDiv.classList.add('center');

  const colsDiv = document.createElement('div');
  colsDiv.classList.add('cols2');

  const questionBtn = document.createElement('button');
  questionBtn.id = 'questionStartButton';
  questionBtn.textContent = 'CLICK ME';

  const homeBtn = document.createElement('button');
  homeBtn.id = 'homeStartButton';
  homeBtn.textContent = 'CLICK ME';

  colsDiv.append(questionBtn, homeBtn);

  // SVG container (Snap.svg target)
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('id', 'snappy');
  svg.setAttribute('width', '800px');
  svg.setAttribute('height', '800px');
  svg.setAttribute('viewBox', '0 0 800 800');
  svg.setAttribute('fill', 'none');

  mainDiv.append(colsDiv, svg);

  /* ---------- Assemble section ---------- */

  root.append(introDiv, mainDiv);
  app.appendChild(root);

  /* ---------- Optional: event listeners ---------- */

  questionBtn.addEventListener('click', () => {
    console.log('Questionnaire start!');
  });

  homeBtn.addEventListener('click', () => {
    console.log('Go home!');
  });

  // Snap.svg can safely attach to #snappy here
}

export function destroyWelcome() {
  root?.remove();
}