// js/main.js
import { initHome, destroyHome } from './sections/home.js';
import { initHearts, destroyHearts } from './sections/hearts.js';

const sections = {
    home: { init: initHome, destroy: destroyHome },
    hearts: { init: initHearts, destroy: destroyHearts }
};

function loadSection(name) {
    // unload previous
    if (window.currentSection && window.currentSection != name) {
        sections[window.currentSection].destroy();
    }
    sections[name].init();
    window.currentSection = name;
}

loadSection('home');

document.getElementById("hihiButton").addEventListener("click", () => loadSection('hearts'));
document.getElementById("hahaButton").addEventListener("click", () => loadSection('home'));