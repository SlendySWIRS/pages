// js/hearts.js
import { getHeartsQuestions } from './sections/questions.js';
import { getHeartsSliding } from './sections/sliding.js';
import { getHeartsMemory } from './sections/memory.js';
import { getHeartsLoading } from './sections/loading.js';

var hearts = localStorage.getItem('totalHearts') || 0;

const heartSections = {
    questions: { getHearts: getHeartsQuestions },
    sliding: { getHearts: getHeartsSliding },
    memory: { getHearts: getHeartsMemory },
    loading: { getHearts: getHeartsLoading }
};

let heartBox;

function createSvgInstance(url, container) {
    const svg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
    );
    svg.setAttribute("viewBox", "0 0 200 200");

    container.appendChild(svg);
    const s = Snap(svg);

    Snap.load(url, f => {
        f.select("#heart").hover(hoverOver, hoverOut);
        function hoverOver() {
            this.select('.leftwingid').addClass("left-wing-fast");
            this.select('.leftwingid').removeClass("left-wing");
            this.select('.rightwingid').addClass("right-wing-fast");
            this.select('.rightwingid').removeClass("right-wing");
        }
        function hoverOut() {
            this.select('.leftwingid').removeClass("left-wing-fast");
            this.select('.leftwingid').addClass("left-wing");
            this.select('.rightwingid').removeClass("right-wing-fast");
            this.select('.rightwingid').addClass("right-wing");
        }
        s.append(f);
    });

    return s;
}

export function showHeartBox(section, name) {
    heartBox?.remove();
    heartBox = document.createElement('div');
    heartBox.classList.add('heartBox');

    const local = heartSections[name].getHearts();
    console.log(local);
    console.log(hearts);
    let i = 0;
    while (i < local) {
        var heart = document.createElement('div');
        heart.style.display = 'grid';
        createSvgInstance('../assets/svgs/heart.svg', heart);
        heartBox.append(heart);
        i++;
    }
    while (i < hearts) {
        var heart = document.createElement('div');
        heart.style.display = 'grid';
        createSvgInstance('../assets/svgs/heart.svg', heart);
        heart.style.opacity = '30%';
        heartBox.append(heart);
        i++;
    }
    section.append(heartBox);
}

export function saveHearts() {
    let questionsHearts = getHeartsQuestions();
    let slidingHearts = getHeartsSliding();
    let memoryHearts = getHeartsMemory();
    let loadingHearts = getHeartsLoading();
    hearts = Math.min(12, Number(questionsHearts) + Number(slidingHearts) + Number(memoryHearts) + Number(loadingHearts));
    console.log("questionsHearts: " + questionsHearts);
    console.log("slidingHearts: " + slidingHearts);
    console.log("memoryHearts: " + memoryHearts);
    console.log("loadingHearts: " + loadingHearts);
    console.log("totalHearts: " + hearts);
    localStorage.setItem('questionsHearts', Number(questionsHearts));
    localStorage.setItem('slidingHearts', Number(slidingHearts));
    localStorage.setItem('memoryHearts', Number(memoryHearts));
    localStorage.setItem('loadingHearts', Number(loadingHearts));
    localStorage.setItem('totalHearts', Number(hearts));
}