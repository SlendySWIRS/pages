// js/sections/book.js

import { PageFlip } from '../lib/page-flip.module.js';
import { clickable, menu } from '../utils.js'

let root;

export function initBook() {
    // console.log("BOOK");
    root = document.createElement('section');
    root.id = 'book';
    root.classList.add('center');
    document.querySelector('#app').appendChild(root);

    const book = document.createElement('div');
    const page01 = document.createElement('img');
    page01.classList.add("my-page");
    page01.dataset.density = 'hard';
    clickable(page01);
    page01.setAttribute("src", "./assets/svgs/page01_cover.svg");
    const page02 = document.createElement('img');
    page02.classList.add("my-page");
    page02.dataset.density = 'hard';
    clickable(page02);
    page02.setAttribute("src", "./assets/svgs/page02.svg");
    const page03 = document.createElement('img');
    page03.classList.add("my-page");
    page03.dataset.density = 'hard';
    clickable(page03);
    page03.setAttribute("src", "./assets/svgs/page03.svg");
    const page04 = document.createElement('img');
    page04.classList.add("my-page");
    page04.dataset.density = 'hard';
    clickable(page04);
    page04.setAttribute("src", "./assets/svgs/page04.svg");
    const page05 = document.createElement('img');
    page05.classList.add("my-page");
    page05.dataset.density = 'hard';
    clickable(page05);
    page05.setAttribute("src", "./assets/svgs/page05.svg");
    const page06 = document.createElement('img');
    page06.classList.add("my-page");
    page06.dataset.density = 'hard';
    clickable(page06);
    page06.setAttribute("src", "./assets/svgs/page06.svg");
    const page07 = document.createElement('img');
    page07.classList.add("my-page");
    page07.dataset.density = 'hard';
    clickable(page07);
    page07.setAttribute("src", "./assets/svgs/page07.svg");
    const page08 = document.createElement('img');
    page08.classList.add("my-page");
    page08.dataset.density = 'hard';
    clickable(page08);
    page08.setAttribute("src", "./assets/svgs/page08.svg");
    const page09 = document.createElement('img');
    page09.classList.add("my-page");
    page09.dataset.density = 'hard';
    clickable(page09);
    page09.setAttribute("src", "./assets/svgs/page09.svg");
    const page10 = document.createElement('img');
    page10.classList.add("my-page");
    page10.dataset.density = 'hard';
    clickable(page10);
    page10.setAttribute("src", "./assets/svgs/page10.svg");
    const page11 = document.createElement('img');
    page11.classList.add("my-page");
    page11.dataset.density = 'hard';
    clickable(page11);
    page11.setAttribute("src", "./assets/svgs/page11.svg");
    const page12 = document.createElement('img');
    page12.classList.add("my-page");
    page12.dataset.density = 'hard';
    clickable(page12);
    page12.setAttribute("src", "./assets/svgs/page12.svg");
    const page13 = document.createElement('img');
    page13.classList.add("my-page");
    page13.dataset.density = 'hard';
    clickable(page13);
    page13.setAttribute("src", "./assets/svgs/page13.svg");
    const page14 = document.createElement('img');
    page14.classList.add("my-page");
    page14.dataset.density = 'hard';
    clickable(page14);
    page14.setAttribute("src", "./assets/svgs/page14.svg");
    const page15 = document.createElement('img');
    page15.classList.add("my-page");
    page15.dataset.density = 'hard';
    clickable(page15);
    page15.setAttribute("src", "./assets/svgs/page15.svg");
    const page16 = document.createElement('img');
    page16.classList.add("my-page");
    page16.dataset.density = 'hard';
    clickable(page16);
    page16.setAttribute("src", "./assets/svgs/page16.svg");
    const page17 = document.createElement('img');
    page17.classList.add("my-page");
    page17.dataset.density = 'hard';
    clickable(page17);
    page17.setAttribute("src", "./assets/svgs/page17.svg");
    const page18 = document.createElement('img');
    page18.classList.add("my-page");
    page18.dataset.density = 'hard';
    clickable(page18);
    page18.setAttribute("src", "./assets/svgs/page18.svg");
    const page19 = document.createElement('img');
    page19.classList.add("my-page");
    page19.dataset.density = 'hard';
    clickable(page19);
    page19.setAttribute("src", "./assets/svgs/page19.svg");
    const page20 = document.createElement('img');
    page20.classList.add("my-page");
    page20.dataset.density = 'hard';
    clickable(page20);
    page20.setAttribute("src", "./assets/svgs/page20.svg");
    const page21 = document.createElement('img');
    page21.classList.add("my-page");
    page21.dataset.density = 'hard';
    clickable(page21);
    page21.setAttribute("src", "./assets/svgs/page21.svg");
    const page22 = document.createElement('img');
    page22.classList.add("my-page");
    page22.dataset.density = 'hard';
    clickable(page22);
    page22.setAttribute("src", "./assets/svgs/page22.svg");
    const page23 = document.createElement('img');
    page23.classList.add("my-page");
    page23.dataset.density = 'hard';
    clickable(page23);
    page23.setAttribute("src", "./assets/svgs/page23.svg");
    const page24 = document.createElement('img');
    page24.classList.add("my-page");
    page24.dataset.density = 'hard';
    clickable(page24);
    page24.setAttribute("src", "./assets/svgs/page24.svg");
    const page25 = document.createElement('img');
    page25.classList.add("my-page");
    page25.dataset.density = 'hard';
    clickable(page25);
    page25.setAttribute("src", "./assets/svgs/page25.svg");
    const page26 = document.createElement('img');
    page26.classList.add("my-page");
    page26.dataset.density = 'hard';
    clickable(page26);
    page26.setAttribute("src", "./assets/svgs/page26_cover.svg");

    book.append(page01, page02, page03, page04, page05, page06, page07, page08, page09, page10, page11, page12, page13,
        page14, page15, page16, page17, page18, page19, page20, page21, page22, page23, page24, page25, page26);
    root.append(book);

    const pageFlip = new PageFlip(book, {
        width: 400, // required parameter - base page width
        height: 800,  // required parameter - base page height
        showCover: true,
        drawShadow: false
    });
    pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));
}

export function destroyBook() {
    root.remove();
}
