// js/sections/welcome.js
import { loadSection } from '../main.js'
import { clickableA } from '../utils.js'

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
    title.textContent = 'Welcome Hana!';

    const p1 = document.createElement('p');
    p1.classList.add('center', 'noMarginTop');
    p1.textContent = 'First things first: | Happy Birthday! |';

    const p2 = document.createElement('p');
    p2.classList.add('center', 'noMargin');
    p2.textContent = 'Your goal today is to find 10 heartflies (butterflies, shaped like hearts)';

    const p3 = document.createElement('p');
    p3.style.width = '60%';
    p3.classList.add('center', 'noMargin');
    p3.style.textAlign = "center";
    p3.textContent = 'How to do this? Through a few small puzzle-like games, focussed on you and your persona (HanaMii)!';

    const p4 = document.createElement('p');
    p4.classList.add('center', 'noMarginTop');
    p4.textContent = 'After collecting enough heartflies, you unlock the "Book of Hearts", which contains a heartfelt message from me to you';

    const p5 = document.createElement('p');
    p5.classList.add('center', 'noMarginTop');
    p5.textContent = 'When you are ready to make a choice, click one of the buttons below. And don\'t forget to have fun, Hanabun!';

    introDiv.append(title, p1, p2, p3, p4, p5);

    /* ---------- Second block ---------- */

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('center');

    const colsDiv = document.createElement('div');
    colsDiv.classList.add('center', 'cols');
    colsDiv.style.width = '50vw';

    const questionBtnDiv = document.createElement('div');
    questionBtnDiv.style.position = 'relative';
    questionBtnDiv.style.width = 'fit-content';
    const questionBtn = document.createElement('img');
    questionBtn.setAttribute('src', './assets/images/home/questions.png');
    questionBtn.style.width = '10vw';
    questionBtn.style.justifySelf = 'center';
    clickableA(questionBtn, "questions");
    const questionBtnText = document.createElement('div');
    questionBtnText.textContent = 'Hana\'s trivia';
    questionBtnText.classList.add("btnText");
    clickableA(questionBtnText, "questions");
    questionBtnDiv.append(questionBtn, questionBtnText);

    const slidingBtnDiv = document.createElement('div');
    slidingBtnDiv.style.position = 'relative';
    slidingBtnDiv.style.width = 'fit-content';
    const slidingBtn = document.createElement('img');
    slidingBtn.setAttribute('src', './assets/images/home/sliding-puzzle.png');
    slidingBtn.style.width = '10vw';
    slidingBtn.style.justifySelf = 'center';
    clickableA(slidingBtn, "sliding");
    const slidingBtnText = document.createElement('div');
    slidingBtnText.textContent = 'Sliding puzzle';
    slidingBtnText.classList.add("btnText");
    clickableA(slidingBtnText, "sliding");
    slidingBtnDiv.append(slidingBtn, slidingBtnText);

    const memoryBtnDiv = document.createElement('div');
    memoryBtnDiv.style.position = 'relative';
    memoryBtnDiv.style.width = 'fit-content';
    const memoryBtn = document.createElement('img');
    memoryBtn.setAttribute('src', './assets/images/home/memory-puzzle.png');
    memoryBtn.style.width = '10vw';
    memoryBtn.style.justifySelf = 'center';
    clickableA(memoryBtn, "memory");
    const memoryBtnText = document.createElement('div');
    memoryBtnText.textContent = 'Memory game';
    memoryBtnText.classList.add("btnText");
    clickableA(memoryBtnText, "memory");
    memoryBtnDiv.append(memoryBtn, memoryBtnText);

    const loadingBtnDiv = document.createElement('div');
    loadingBtnDiv.style.position = 'relative';
    loadingBtnDiv.style.width = 'fit-content';
    const loadingBtn = document.createElement('img');
    loadingBtn.setAttribute('src', './assets/images/home/loading-bar.png');
    loadingBtn.style.width = '10vw';
    loadingBtn.style.justifySelf = 'center';
    clickableA(loadingBtn, "loading");
    const loadingBtnText = document.createElement('div');
    loadingBtnText.textContent = 'Free hearts?';
    loadingBtnText.classList.add("btnText");
    clickableA(loadingBtnText, "loading");
    loadingBtnDiv.append(loadingBtn, loadingBtnText);

    colsDiv.append(questionBtnDiv, slidingBtnDiv, memoryBtnDiv, loadingBtnDiv);

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

    // Snap.svg can safely attach to #snappy here
}

export function destroyWelcome() {
    root?.remove();
}