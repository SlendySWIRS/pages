// js/main.js
import { initHome, destroyHome } from './sections/home.js';
import { initHearts, destroyHearts } from './sections/hearts.js';

const sections = {
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

loadSection('home');


const s = Snap("#snappy");

Snap.load("../assets/svgs/heart.svg",
    onSVGLoaded);

function onSVGLoaded(data) {
    var circle = data.select("#leftwing");

    circle.attr({
        fill: "tomato",
        stroke: "cornflowerblue",
        strokeWidth: 0
    });

    // Hover :
    circle.hover(hoverOver, hoverOut);
    // Click :
    circle.mouseup(mouseUp);
    circle.mousedown(mouseDown);
    //onmove, onstart, onend
    circle.drag(onMove, onStart, onEnd);

    // Touch:
    // mouseup mousedown seem to also workon mobile, but to be sure,
    // you can use touch events:
    circle.touchstart(touchStartHandler);
    circle.touchmove(touchMoveHandler);

    s.append(data);

    // Handlers :

    // TOUCH (for mobile devices ):
    function touchStartHandler() {
        circle.attr({
            fill: "white",
            stroke: "purple"
        });
    }


    function touchMoveHandler() {
        circle.attr({
            fill: "purple",
            stroke: "white"
        });
    }
    // DRAG:

    // Normally you can just use element.drag(), but since we are using a responsive
    // viewbox, there is some coordinate translation handled in the onMove function,
    // you can alos use a plugin:
    // http://stackoverflow.com/questions/42570545/snap-svg-drag-coordinates-inside-a-responsive-viewbox

    function onMove(dx, dy, ev, x, y) {
        var tdx, tdy;
        var snapInvMatrix = this.transform().diffMatrix.invert();
        snapInvMatrix.e = snapInvMatrix.f = 0;
        tdx = snapInvMatrix.x(dx, dy);
        tdy = snapInvMatrix.y(dx, dy);
        this.transform("t" + [tdx, tdy] + this.data('ot'));
    }

    function onStart(x, y, ev) {
        this.data('ot', this.transform().local);
    }

    function onEnd() {
        // console.log("endedDrag");
    }

    // HOVER
    function hoverOver() {
        document.body.style.cursor = "pointer";
        circle.attr({
            fill: "cornflowerblue",
            stroke: "tomato"
        });
    }

    function hoverOut() {
        document.body.style.cursor = "default";
        circle.attr({
            fill: "tomato",
            stroke: "cornflowerblue"
        });
    }

    //CLICK
    function mouseDown() {
        circle.attr({
            fill: "grey",
            stroke: "dimgrey"
        });
    }

    function mouseUp() {
        circle.attr({
            fill: "cornflowerblue",
            stroke: "tomato"
        });
    }
}


