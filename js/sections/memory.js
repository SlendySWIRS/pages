// js/sections/memory.js
import { clickableA } from '../utils.js'

let root;

export function initMemory() {
    console.log("MEMORY");
    root = document.createElement('section');
    root.id = 'memory';
    root.classList.add('center')

    /* ---------- First block ---------- */

    const memoryDiv = document.createElement('div');
    memoryDiv.classList.add('memory-game');
    const vals = ["Bonk", "Confused", "Cookie", "Cute", "Drink", "Love", "Mad", "Naughty", "Pat", "Record", "Uno", "UwU"]
    vals.forEach((val) => {
        for (let i = 0; i < 2; i++) {
            const memoryCardDiv = document.createElement('div');
            memoryCardDiv.classList.add('memory-card');
            memoryCardDiv.dataset.emotion = val;
            const memoryCardFront = document.createElement('img');
            memoryCardFront.setAttribute('src', `./assets/images/memory/hana${val}.png`);
            memoryCardFront.classList.add('front-face');
            const memoryCardBack = document.createElement('img');
            memoryCardBack.setAttribute('src', './assets/images/memory/hanamiimeow.jpg');
            memoryCardBack.classList.add('back-face');
            memoryCardDiv.append(memoryCardFront, memoryCardBack);
            memoryDiv.append(memoryCardDiv);
        }
    })

    root.append(memoryDiv);
    const menuBtn = document.createElement('img');
    menuBtn.setAttribute('src', './assets/images/home/home.png');
    menuBtn.classList.add('menuBtn');
    clickableA(menuBtn, "welcome");
    root.append(menuBtn);
    document.querySelector('#app').appendChild(root);

    const cards = document.querySelectorAll('.memory-card');

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flip');

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;

            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = firstCard.dataset.emotion === secondCard.dataset.emotion;

        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            resetBoard();
        }, 1500);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    (function shuffle() {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 12);
            card.style.order = randomPos;
        });
    })();

    cards.forEach(card => card.addEventListener('click', flipCard));
}

export function destroyMemory() {
    // remove timers, listeners, DOM nodes
    root.remove();
}