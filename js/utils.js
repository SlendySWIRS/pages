// js/utils.js
import { loadSection } from './main.js'

export function clickable(element) {
    element.addEventListener('mouseenter', () => hoverOverClickable());
    element.addEventListener('mouseleave', () => hoverOutClickable());
}

export function clickableA(element, section) {
    element.addEventListener('mouseenter', () => hoverOverClickable());
    element.addEventListener('mouseleave', () => hoverOutClickable());
    element.addEventListener('click', () => loadSection(section));

}

export function hoverOverClickable() {
    document.body.style.cursor = "url('https://cdn.custom-cursor.com/db/5357/32/legend-of-zelda-link-shield_pointer-b.png'), auto";
}

export function hoverOutClickable() {
    document.body.style.cursor = "url('https://cdn.custom-cursor.com/db/5358/32/legend-of-zelda-link-master-sword-cursor-b.png'), auto";
}