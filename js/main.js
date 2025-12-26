// js/main.js
import { initWelcome, destroyWelcome } from './sections/welcome.js';
import { initQuestions, destroyQuestions } from './sections/questions.js';
import { initHome, destroyHome } from './sections/home.js';
import { initHearts, destroyHearts } from './sections/hearts.js';

const sections = {
    welcome: { init: initWelcome, destroy: destroyWelcome },
    questions: { init: initQuestions, destroy: destroyQuestions },
    home: { init: initHome, destroy: destroyHome },
    hearts: { init: initHearts, destroy: destroyHearts }
};

function loadSection(name) {
    // unload previous
    if (window.currentSection) {
        sections[window.currentSection].destroy();
    }
    sections[name].init();
    window.currentSection = name;
}

loadSection('welcome');

document.getElementById("questionStartButton").addEventListener("click", () => loadSection('questions'));
document.getElementById("homeStartButton").addEventListener("click", () => loadSection('home'));