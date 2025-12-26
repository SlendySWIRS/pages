// js/sections/home.js

let root;

export function initHome() {
    console.log("HOME");
    root = document.createElement('section');
    root.id = 'home';
    document.querySelector('#app').appendChild(root);

    // create SVG, animations, listeners here
}

export function destroyHome() {
    // remove timers, listeners, DOM nodes
    root.remove();
}
