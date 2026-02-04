// js/sections/home.js
import { clickableA } from '../utils.js'
import { hearts, showLocalHearts } from '../heartutils.js'

let root;

export function initHome() {
    const app = document.querySelector('#app');

    // Root container for this section
    root = document.createElement('section');
    root.id = 'root';

    /* ---------- First block ---------- */

    const introDiv = document.createElement('div');
    introDiv.classList.add('center');

    const title = document.createElement('h1');
    title.classList.add('center', 'hotpink');
    title.textContent = '| Home sweet Hana |';

    const p1 = document.createElement('p');
    p1.classList.add('center', 'noMarginTop');
    p1.textContent = `You currently have ${hearts}/12 heartflies`;

    const p2 = document.createElement('p');
    p2.classList.add('center', 'noMargin');
    if (hearts >= 10) {
        p2.textContent = 'This means you have unlocked the Book of Hearts!';
    } else {
        p2.textContent = 'Your goal is to find 10 of them to unlock the Book of Hearts |';
    }

    const p3 = document.createElement('p');
    p3.style.width = '60%';
    p3.classList.add('center', 'noMargin');
    p3.style.textAlign = "center";
    p3.textContent = 'Every game has up to 3 collectible hearts.';

    const p4 = document.createElement('p');
    p4.classList.add('center', 'noMarginTop');
    p4.textContent = 'Below, you can see how many you already found in each game.';

    const p5 = document.createElement('p');
    p5.classList.add('center', 'noMarginTop');
    p5.textContent = 'Click on one of the buttons to choose a game!';

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
    showLocalHearts(questionBtnDiv, "questions");
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
    showLocalHearts(slidingBtnDiv, "sliding");
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
    showLocalHearts(memoryBtnDiv, "memory");
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
    showLocalHearts(loadingBtnDiv, "loading");
    loadingBtnDiv.append(loadingBtn, loadingBtnText);

    colsDiv.append(questionBtnDiv, slidingBtnDiv, memoryBtnDiv, loadingBtnDiv);

    mainDiv.append(colsDiv);

    /* ---------- Third block ---------- */

    const bookDiv = document.createElement('div');
    bookDiv.classList.add("center");
    bookDiv.style.overflow = 'hidden';
    const book = document.createElement('img');
    book.setAttribute('src', './assets/svgs/heart_book.svg');
    book.style.width = '60vw';
    book.style.marginTop = '25vh';
    clickableA(book, "book");
    book.addEventListener('mouseenter', () => {
        book.style.marginTop = '15vh';
    });
    book.addEventListener('mouseleave', () => {
        book.style.marginTop = '25vh';
    });
    bookDiv.append(book);

    const welcomeHanaImg = document.createElement('img');
    welcomeHanaImg.setAttribute('src', './assets/images/frame_Hana.png')
    welcomeHanaImg.classList.add("welcomeHanaLeft");

    /* ---------- Assemble section ---------- */

    root.append(introDiv, mainDiv);
    if (hearts >= 10) {
        root.append(bookDiv);
    } else {
        root.append(welcomeHanaImg);
    }
    app.appendChild(root);
    app.style.overflow = 'hidden';
    app.style.height = '100vh';

    /* ---------- Optional: event listeners ---------- */

    // Snap.svg can safely attach to #snappy here
}

export function destroyHome() {
    // remove timers, listeners, DOM nodes
    root?.remove();
}
