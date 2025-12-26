// js/sections/welcome.js
import { loadSection } from '../main.js'

let root;

export function initWelcome() {
    const app = document.querySelector('#app');

    // Root container for this section
    root = document.createElement('section');

    /* ---------- First block ---------- */

    const introDiv = document.createElement('div');
    introDiv.classList.add('center');

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

    const p3 = document.createElement('p');
    p3.classList.add('center');
    p3.textContent = 'Take your time and press the button when you are ready';

    introDiv.append(title, p1, p2);

    /* ---------- Second block ---------- */

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('center');

    const colsDiv = document.createElement('div');
    colsDiv.classList.add('center', 'cols2');
    colsDiv.style.width = '20vw';

    const questionBtn = document.createElement('button');
    questionBtn.style.width = '5vw';
    questionBtn.style.justifySelf = 'center';
    questionBtn.id = 'questionStartButton';
    questionBtn.textContent = 'Yes!';

    const waitBtn = document.createElement('button');
    waitBtn.style.width = '5vw';
    waitBtn.style.justifySelf = 'center';
    waitBtn.id = 'homeStartButton';
    waitBtn.textContent = 'Not yet';

    colsDiv.append(questionBtn, waitBtn);

    // SVG container (Snap.svg target)
    // const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    // svg.style.justifySelf = 'center';
    // svg.setAttribute('id', 'snappy');
    // svg.setAttribute('width', '800px');
    // svg.setAttribute('height', '800px');
    // svg.setAttribute('viewBox', '0 0 800 800');
    // svg.setAttribute('fill', 'none');

    mainDiv.append(colsDiv);

    /* ---------- Assemble section ---------- */

    root.append(introDiv, mainDiv);
    app.appendChild(root);

    /* ---------- Optional: event listeners ---------- */

    questionBtn.addEventListener('click', () => loadSection('questions'));

    waitBtn.addEventListener('click', () => {
        introDiv.replaceChild(p3, p2);
        waitBtn.remove();
    });

    // Snap.svg can safely attach to #snappy here
}

export function destroyWelcome() {
    root?.remove();
}