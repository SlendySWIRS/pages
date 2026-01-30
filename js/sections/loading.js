// js/sections/loading.js
import { menu } from '../utils.js'
import { saveHearts, showHeartBox } from '../heartutils.js'

let root;
var localHearts = 0;

export function initLoading() {
    console.log("LOADING");
    root = document.createElement('section');
    root.id = 'loading';
    root.classList.add('center')
    localHearts = localStorage.getItem('loadingHearts') || 0;

    const loadingDiv = document.createElement("div");
    loadingDiv.style.height = '80vh';
    loadingDiv.style.display = 'grid';
    loadingDiv.style.justifyContent = 'center';
    loadingDiv.style.alignItems = 'center';

    // BAR 1
    const container = document.createElement("div");
    container.classList.add('barContainer', 'noselect');
    const bar = document.createElement("img");
    bar.classList.add('barBg', 'noselect');
    bar.setAttribute('src', "./assets/images/loading/bar.png");
    const border = document.createElement("img");
    border.classList.add('barBorder', 'noselect');
    border.setAttribute('src', "./assets/images/loading/border.png");
    const mask = document.createElement("div");
    mask.classList.add('barFillMask', 'noselect');
    const fill = document.createElement("img");
    fill.classList.add('barFill', 'noselect');
    fill.setAttribute('src', "./assets/images/loading/progress.png");
    mask.append(fill);
    container.append(bar, mask, border);

    // BAR 2
    const container2 = document.createElement("div");
    container2.classList.add('barContainer', 'noselect');
    const bar2 = document.createElement("img");
    bar2.classList.add('barBg', 'noselect');
    bar2.setAttribute('src', "./assets/images/loading/bar.png");
    const border2 = document.createElement("img");
    border2.classList.add('barBorder', 'noselect');
    border2.setAttribute('src', "./assets/images/loading/border.png");
    const mask2 = document.createElement("div");
    mask2.classList.add('barFillMask', 'noselect');
    const fill2 = document.createElement("img");
    fill2.classList.add('barFill', 'noselect');
    fill2.setAttribute('src', "./assets/images/loading/progress.png");
    mask2.append(fill2);
    const bar2Handle = document.createElement("div");
    bar2Handle.classList.add('bar2Handle', 'noselect');
    container2.append(bar2, mask2, border2, bar2Handle);

    // BAR 3
    const container3 = document.createElement("div");
    container3.classList.add('barContainer', 'noselect');
    const bar3 = document.createElement("img");
    bar3.classList.add('barBg', 'noselect');
    bar3.setAttribute('src', "./assets/images/loading/bar.png");
    const border3 = document.createElement("img");
    border3.classList.add('barBorder', 'noselect');
    border3.setAttribute('src', "./assets/images/loading/border.png");
    const mask3 = document.createElement("div");
    mask3.classList.add('barFillMask', 'noselect');
    const fill3 = document.createElement("img");
    fill3.classList.add('barFill', 'noselect');
    fill3.setAttribute('src', "./assets/images/loading/progress.png");
    mask3.append(fill3);
    const bar3Handle = document.createElement("div");
    bar3Handle.classList.add('bar2Handle', 'noselect');
    const bar3BarHandle = document.createElement("div");
    bar3BarHandle.classList.add('bar2Handle', 'noselect');
    container3.append(bar3, mask3, border3, bar3Handle, bar3BarHandle);

    // ASSEMBLE
    loadingDiv.append(container, container2, container3);
    root.append(loadingDiv);
    menu(root);
    showHeartBox(root, 'loading');
    document.querySelector('#app').appendChild(root);


    const TARGET = 60;
    const BOOST = 5;
    const AUTO2_LIMIT = 20;
    const BAR2_WIDTH = 400;
    const BAR3_MAX_WIDTH = 400;
    const PROGRESS_LIMIT3 = 80;

    let progress = 0;

    let progress2 = 0;
    let dragging2 = false;

    let progress3 = 0;
    let progressPx3 = (progress3 / 100) * BAR3_MAX_WIDTH;
    let barWidth3 = BAR3_MAX_WIDTH;
    let dragging3 = false;
    let maxProgressReached = false;
    let draggingEnd3 = false;

    let bar1Finish = false;
    let bar2Finish = false;
    let bar3Finish = false;
    let bar1FinishFirst = localStorage.getItem('bar1FinishFirst') || false;
    let bar2FinishFirst = localStorage.getItem('bar2FinishFirst') || false;
    let bar3FinishFirst = localStorage.getItem('bar3FinishFirst') || false;

    // Update visual
    function render() {
        mask.style.width = `${Math.max(0, Math.min(100, progress))}%`;
        mask2.style.width = `${progress2}%`;
        bar2Handle.style.left = `${(progress2 / 100) * BAR2_WIDTH}px`;
        container3.style.width = barWidth3 + "px";
        progressPx3 = (progress3 / 100) * BAR3_MAX_WIDTH;
        mask3.style.width = progressPx3 + "px";
        bar3Handle.style.left = `${(progress3 / 100) * barWidth3}px`;
        bar3BarHandle.style.left = `${barWidth3}px`;
    }

    // Click = instant boost
    container.addEventListener("click", () => {
        if (bar1Finish) { return; }
        progress += BOOST;
        if (progress >= 100) {
            bar1Finish = true;
            if (!bar1FinishFirst) {
                localStorage.setItem('bar1FinishFirst', true);
                localHearts++;
                saveHearts();
                showHeartBox(root, 'loading');
            }
        }
        render();
    });

    bar2Handle.addEventListener("mousedown", e => {
        if (bar2Finish) { return; }
        dragging2 = true;
    });

    document.addEventListener("mouseup", () => {
        dragging2 = false;
        dragging3 = false;
        draggingEnd3 = false;
    });

    document.addEventListener("mousemove", e => {
        if (!dragging2) return;
        if (bar2Finish) { return; }

        const rect = container2.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const clamped = Math.max(0, Math.min(BAR2_WIDTH, x));

        progress2 = (clamped / BAR2_WIDTH) * 100;
        if (progress2 >= 100) {
            bar2Handle.style.cursor = "url('https://cdn.custom-cursor.com/db/5358/32/legend-of-zelda-link-master-sword-cursor-b.png'), auto";
            bar2Finish = true;
            if (!bar2FinishFirst) {
                localStorage.setItem('bar2FinishFirst', true);
                localHearts++;
                saveHearts();
                showHeartBox(root, 'loading');
            }
        }
        render();
    });

    bar3Handle.addEventListener("mousedown", () => {
        if (bar3Finish) { return; }
        dragging3 = true;
    });

    document.addEventListener("mousemove", e => {
        if (!dragging3) return;
        if (bar3Finish) { return; }

        const rect = container3.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const clampedX = Math.max(0, Math.min(BAR3_MAX_WIDTH, x));

        if (progress3 < PROGRESS_LIMIT3) {
            // PHASE 1: dragging increases progress (20 → 80)
            progress3 = Math.min(PROGRESS_LIMIT3, (clampedX / BAR3_MAX_WIDTH) * 100);
        } else {
            bar3Handle.style.cursor = "url('https://cdn.custom-cursor.com/db/5358/32/legend-of-zelda-link-master-sword-cursor-b.png'), auto";
            maxProgressReached = true;
        }

        render();
    });

    bar3BarHandle.addEventListener("mousedown", () => {
        if (bar3Finish) { return; }
        draggingEnd3 = true;
    });

    document.addEventListener("mousemove", e => {
        if (!draggingEnd3 || !maxProgressReached) return;
        if (bar3Finish) { return; }

        const rect = container3.getBoundingClientRect();
        const x = e.clientX - rect.left;

        // Clamp drag position inside container
        const clampedX = Math.max(0, Math.min(BAR3_MAX_WIDTH, x));

        // Minimum bar width needed to visually contain 80% progress
        const minBarWidth3 = (progress3 / 100) * BAR3_MAX_WIDTH;

        // Shrink bar but never below progress
        barWidth3 = Math.max(minBarWidth3, clampedX);

        if (barWidth3 <= minBarWidth3) {
            bar3BarHandle.style.cursor = "url('https://cdn.custom-cursor.com/db/5358/32/legend-of-zelda-link-master-sword-cursor-b.png'), auto";
            bar3Finish = true;
            if (!bar3FinishFirst) {
                localStorage.setItem('bar3FinishFirst', true);
                localHearts++;
                saveHearts();
                showHeartBox(root, 'loading');
            }
        }
        render();
    });


    // Natural movement toward 60%
    function update() {
        if (bar1Finish) { return; }
        const diff = TARGET - progress;

        // Slowdown factor: closer to target → smaller step
        const speed = Math.min(Math.max(0.005, Math.abs(diff) * 0.005), 0.15);

        if (Math.abs(diff) > 0.05) {
            progress += Math.sign(diff) * speed;
            render();
        }

        requestAnimationFrame(update);
    }

    update();

    function autoUpdate2() {
        if (bar2Finish) { return; }
        if (!dragging2 && progress2 < AUTO2_LIMIT) {
            progress2 += 0.05; // slow, steady fill
            render();
        }
        requestAnimationFrame(autoUpdate2);
    }

    autoUpdate2();

    function autoUpdate3() {
        if (bar3Finish) { return; }
        if (!dragging3 && progress3 < 20) {
            progress3 += 0.05;
            render();
        }
        requestAnimationFrame(autoUpdate3);
    }

    autoUpdate3();

}

export function destroyLoading() {
    // remove timers, listeners, DOM nodes
    root.remove();
}

export function getHeartsLoading() {
    return localHearts;
}

export function resetHeartsLoading() {
    localHearts = 0;
}