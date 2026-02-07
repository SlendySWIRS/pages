// js/main.js
import { initWelcome, destroyWelcome } from './sections/welcome.js';
import { initQuestions, destroyQuestions } from './sections/questions.js';
import { initHome, destroyHome } from './sections/home.js';
import { initHearts, destroyHearts } from './sections/hearts.js';
import { initSliding, destroySliding } from './sections/sliding.js';
import { initMemory, destroyMemory } from './sections/memory.js';
import { initLoading, destroyLoading } from './sections/loading.js';
import { initBook, destroyBook } from './sections/book.js';
import { showHana, showRandomHana } from './utils.js';

const sections = {
    welcome: { init: initWelcome, destroy: destroyWelcome },
    questions: { init: initQuestions, destroy: destroyQuestions },
    home: { init: initHome, destroy: destroyHome },
    hearts: { init: initHearts, destroy: destroyHearts },
    sliding: { init: initSliding, destroy: destroySliding },
    memory: { init: initMemory, destroy: destroyMemory },
    loading: { init: initLoading, destroy: destroyLoading },
    book: { init: initBook, destroy: destroyBook }
};

export function loadSection(name) {
    // unload previous
    if (window.currentSection) {
        sections[window.currentSection].destroy();
    }
    sections[name].init();
    // showRandomHana();
    window.currentSection = name;
    localStorage.setItem('currentSection', window.currentSection);
}

function resetAll() {
    localStorage.clear();
    loadSection('welcome');
}

window.addEventListener("load", () => {
    const saved = localStorage.getItem('currentSection') || 'welcome';
    if (saved in sections) {
        loadSection(saved);
    } else {
        loadSection('welcome');
    }
});

loadSection('hearts');
// resetAll();  // temporary