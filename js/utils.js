// js/utils.js
import { loadSection } from './main.js'

const outfits = ["demon", "gamer", "halloween", "japanese", "swimsuit", "sword", "teddy"]

const sectionInfo = {
    questions: "Answer simple questions about yourself and earn a heartfly per 2 correct answers! Don't worry about clicking the wrong answer, no points are subtracted! (In fact, try it out!)",
    sliding: "3 sliding puzzles for a heartfly each! Too tedious? If the puzzle really messes with your brain, you can go back to the main menu and enter again for a different setup!",
    memory: "Classic memory, and every 4 revealed pairs will award you a heartfly. If you exit, you have to start over. Go flip those tiles and find out why 12 emotes are more than enough ;)",
    loading: "This one's like \"progress bar 95\", but it's better: every full bar gives you one \"free\" heartfly! So now you just have to find a way to get that progress all the way up to 100%...",
}

const menuBtn = document.createElement('img');
menuBtn.setAttribute('src', './assets/images/home/home.png');
menuBtn.classList.add('menuBtn');
clickableA(menuBtn, "home");

const infoText = document.createElement('p');
infoText.classList.add("infoText");
infoText.textContent = "TEST";
infoText.style.display = 'none';
const infoBtn = document.createElement('img');
infoBtn.setAttribute('src', './assets/images/info.png');
infoBtn.classList.add('infoBtn');
infoBtn.addEventListener('mouseenter', () => {
    hoverOverClickable();
    infoText.style.display = 'block';
});
infoBtn.addEventListener('mouseleave', () => {
    hoverOutClickable();
    infoText.style.display = 'none';
});
const infoLabel = document.createElement('div');
infoLabel.textContent = 'Need help?';
infoLabel.classList.add('infoLabel');


export function clickable(element) {
    element.addEventListener('mouseenter', () => hoverOverClickable());
    element.addEventListener('mouseleave', () => hoverOutClickable());
}

export function clickableA(element, section) {
    element.addEventListener('mouseenter', () => hoverOverClickable());
    element.addEventListener('mouseleave', () => hoverOutClickable());
    element.addEventListener('click', () => {
        loadSection(section);
        hoverOutClickable();
    });

}

export function menu() {
    document.querySelector('#root').append(menuBtn);
}

export function info(section) {
    infoText.textContent = sectionInfo[section];
    document.querySelector('#root').append(infoBtn, infoLabel, infoText);
}

export function hoverOverClickable() {
    document.body.style.cursor = "url('https://cdn.custom-cursor.com/db/5357/32/legend-of-zelda-link-shield_pointer-b.png'), auto";
}

export function hoverOutClickable() {
    document.body.style.cursor = "url('https://cdn.custom-cursor.com/db/5358/32/legend-of-zelda-link-master-sword-cursor-b.png'), auto";
}

export function showHana(outfit) {
    if (outfit == "frame") {
        const hanaImg = document.createElement('img');
        hanaImg.setAttribute('src', './assets/images/frame_Hana.png')
        hanaImg.classList.add("welcomeHanaLeft");
        document.querySelector('#root').append(hanaImg);
    } else {
        if (!outfits.includes(outfit)) {
            outfit = 'sword';
        }
        const hanaImg = document.createElement('img');
        hanaImg.classList.add("hana");
        hanaImg.setAttribute('src', `./assets/images/hana/outfit_${outfit}.png`);
        document.querySelector('#root').append(hanaImg);
    }
}

export function showRandomHana() {
    let index = Math.random() * outfits.length;
    showHana(outfits.at(index));
}