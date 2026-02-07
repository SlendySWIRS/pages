// js/sections/memory.js
import { loadSection } from '../main.js'
import { menu, info, showHana } from '../utils.js'
import { showHeartBox, saveHearts } from '../heartutils.js'

let root;
var localHearts = 0;
var revealedPairs = 0;

export function initMemory() {
    root = document.createElement('section');
    root.id = 'root';
    root.classList.add('center')
    localHearts = localStorage.getItem('memoryHearts') || 0;

    /* ---------- First block ---------- */

    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = 'Memory Cards';
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

    root.append(title, memoryDiv);
    document.querySelector('#app').appendChild(root);
    showHeartBox('memory');
    menu();
    info('memory');
    showHana('gamer');

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
        revealedPairs++;
        if (revealedPairs == 4) {
            localHearts = Math.max(localHearts, 1);
                    saveHearts();
            showHeartBox('memory');
        } else if (revealedPairs == 8) {
            localHearts = Math.max(localHearts, 2);
            saveHearts();
            showHeartBox('memory');
        } else if (revealedPairs == 12) {
            localHearts = Math.max(localHearts, 3);
            saveHearts();
            showHeartBox('memory');
            setTimeout(() => { loadSection('home'); }, 200);
        }

        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            resetBoard();
        }, 600);
    }

    function unflipAllCards() {
        lockBoard = true;
        revealedPairs = 0;

        setTimeout(() => {
            cards.forEach(card => {
                card.classList.remove('flip');
                card.addEventListener('click', flipCard)
            });

            resetBoard();
        }, 1000);
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

export function getHeartsMemory() {
    let hearts = localHearts > 0 ? localHearts : localStorage.getItem('memoryHearts');
    return hearts || 0;
}