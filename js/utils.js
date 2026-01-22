// js/utils.js

export function clickable(element) {
    element.addEventListener('mouseenter', () => hoverOverClickable());
    element.addEventListener('mouseleave', () => hoverOutClickable());
}

export function hoverOverClickable() {
    document.body.style.cursor = "url('https://cdn.custom-cursor.com/db/5357/32/legend-of-zelda-link-shield_pointer-b.png'), auto";
}

export function hoverOutClickable() {
    document.body.style.cursor = "url('https://cdn.custom-cursor.com/db/5358/32/legend-of-zelda-link-master-sword-cursor-b.png'), auto";
}