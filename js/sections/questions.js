// js/sections/questions.js

let root;

export function initQuestions() {
    console.log("QUESTIONS");
    root = document.createElement('section');
    root.id = 'questions';
    document.querySelector('#app').appendChild(root);

    // create SVG, animations, listeners here
}

export function destroyQuestions() {
    // remove timers, listeners, DOM nodes
    root.remove();
}