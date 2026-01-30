// js/sections/hearts.js

let root;

export function initHearts() {
    console.log("HEARTS");
    root = document.createElement('section');
    root.id = 'hearts';
    document.querySelector('#app').appendChild(root);

    // create SVG, animations, listeners here

    // viewBox size
    const vbWidth = 100;
    const vbHeight = 100;

    console.log("VBW: " + vbWidth);
    console.log("VBH: " + vbHeight);

    const canvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    canvas.setAttribute('viewBox', '0 0 100 100');
    canvas.style.width = '100vw';
    canvas.style.height = '10vh';
    canvas.style.position = 'absolute';
    canvas.style.top = 0;
    canvas.style.left = 0;

    root.appendChild(canvas);

    const s = Snap(canvas);

    Snap.load("./assets/svgs/cutebutton.svg", onButtonLoaded);
    Snap.load("./assets/svgs/cutebutton_sad.svg", onButtonLoaded);
    Snap.load("./assets/svgs/heart.svg", onSVGLoaded);

    function onButtonLoaded(data) {
        var button = data.select("#button");
        button.transform('t40,-30 r10,0,0 s0.1');

        button.hover(hoverOver, hoverOut);
        button.mouseup(mouseUp);
        button.mousedown(mouseDown);

        s.append(data.node);

        function hoverOver() {
            document.body.style.cursor = "url('https://cdn.custom-cursor.com/db/5357/32/legend-of-zelda-link-shield_pointer-b.png'), auto";

        }

        function hoverOut() {
            document.body.style.cursor = "url('https://cdn.custom-cursor.com/db/5358/32/legend-of-zelda-link-master-sword-cursor-b.png'), auto";
        }

        function mouseDown() { }

        function mouseUp() {
            this.remove();
        }
    }

    function onSVGLoaded(data) {
        var heart = data.select("#heart");
        heart.transform('t1,1 r10,0,0 s0.2')
        var heart2 = heart.clone().transform('t12,5 r-10,0,0 s0.2');
        var heart3 = heart.clone().transform('t9,12 r70,0,0 s0.2');

        const svgNode = data.node;
        s.append(data.node);
        const rect = svgNode.getBoundingClientRect();

        // get viewBox attribute
        const vb = svgNode.getAttribute("viewBox"); // returns a string like "0 0 24 24"
        console.log("heart viewBox:", vb);

        // parse numbers
        const [vbX, vbY, heartVbWidth, heartVbHeight] = vb.split(" ").map(Number);
        console.log(vbX, vbY, heartVbWidth, heartVbHeight);

        var scaleX = heartVbWidth / rect.width;
        var scaleY = heartVbHeight / rect.height;

        // Hover :
        heart.hover(hoverOver, hoverOut);
        heart2.hover(hoverOver, hoverOut);
        heart3.hover(hoverOver, hoverOut);
        // Click :
        heart.mouseup(mouseUp);
        heart2.mouseup(mouseUp);
        heart3.mouseup(mouseUp);
        heart.mousedown(mouseDown);
        heart2.mousedown(mouseDown);
        heart3.mousedown(mouseDown);
        //onmove, onstart, onend
        heart.drag(onMove, onStart, onEnd);
        heart2.drag(onMove, onStart, onEnd);
        heart3.drag(onMove, onStart, onEnd);

        // Touch:
        // mouseup mousedown seem to also work on mobile, but to be sure,
        // you can use touch events:
        heart.touchstart(touchStartHandler);
        heart2.touchstart(touchStartHandler);
        heart3.touchstart(touchStartHandler);
        heart.touchmove(touchMoveHandler);
        heart2.touchmove(touchMoveHandler);
        heart3.touchmove(touchMoveHandler);

        // Handlers :

        // TOUCH (for mobile devices ):
        function touchStartHandler() { }


        function touchMoveHandler() { }
        // DRAG:

        // Normally you can just use element.drag(), but since we are using a responsive
        // viewbox, there is some coordinate translation handled in the onMove function,
        // you can alos use a plugin:
        // http://stackoverflow.com/questions/42570545/snap-svg-drag-coordinates-inside-a-responsive-viewbox

        function onMove(dx, dy, x, y, ev) {
            const scale = Math.min(scaleX, scaleY);
            console.log(dx);
            this.transform(`t${dx * scaleX},${dy * scaleY}${this.data('ot')}`);
        }

        function onStart(x, y, ev) {
            this.data('ot', this.transform().local);
        }

        function onEnd() {
            // console.log("endedDrag");
            // this.remove();
            // delete this;
            // document.body.style.cursor = "url('https://cdn.custom-cursor.com/db/5358/32/legend-of-zelda-link-master-sword-cursor-b.png'), auto";
            this.removeData('start');
        }

        // HOVER
        function hoverOver() {
            document.body.style.cursor = "url('https://cdn.custom-cursor.com/db/5357/32/legend-of-zelda-link-shield_pointer-b.png'), auto";
            this.select('.leftwingid').addClass("left-wing-fast");
            this.select('.leftwingid').removeClass("left-wing");
            this.select('.rightwingid').addClass("right-wing-fast");
            this.select('.rightwingid').removeClass("right-wing");
        }

        function hoverOut() {
            document.body.style.cursor = "url('https://cdn.custom-cursor.com/db/5358/32/legend-of-zelda-link-master-sword-cursor-b.png'), auto";
            this.select('.leftwingid').removeClass("left-wing-fast");
            this.select('.leftwingid').addClass("left-wing");
            this.select('.rightwingid').removeClass("right-wing-fast");
            this.select('.rightwingid').addClass("right-wing");
        }

        //CLICK
        function mouseDown() { }

        function mouseUp() { }
    }



}

export function destroyHearts() {
    root.remove();
    // hearts.forEach(item => {
    //     item.remove();
    // })
    // hearts.splice(0, hearts.length);
}
