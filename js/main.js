// js/main.js
import { initHome, destroyHome } from './sections/home.js';
import { initHearts, destroyHearts } from './sections/hearts.js';

const sections = {
    home:  { init: initHome, destroy: destroyHome },
    hearts:{ init: initHearts, destroy: destroyHearts }
};

function loadSection(name) {
    // unload previous
    if (window.currentSection) {
        sections[window.currentSection].destroy();
    }
    sections[name].init();
    window.currentSection = name;
}

loadSection('home');
