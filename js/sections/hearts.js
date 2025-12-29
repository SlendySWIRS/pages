// js/sections/hearts.js

let root;
let heartArray = Array();

export function initHearts() {
    console.log("HEARTS");
    root = document.createElement('section');
    root.id = 'hearts';
    document.querySelector('#app').appendChild(root);

    // create SVG, animations, listeners here

    const canvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    canvas.setAttribute('viewBox', '0 0 100 100');
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.position = 'absolute';
    canvas.style.top = 0;
    canvas.style.left = 0;

    root.appendChild(canvas);

    const s = Snap(canvas);

    Snap.load("./assets/svgs/cutebutton.svg", onButtonLoaded);
    Snap.load("./assets/svgs/heart.svg", onSVGLoaded);

    // Snap.load("./assets/svgs/cute-button.svg", onButtonLoaded);

    function onButtonLoaded(data) {
        var button = data.select("#button");

        button.hover(hoverOver, hoverOut);
        button.mouseup(mouseUp);
        button.mousedown(mouseDown);

        s.append(data.node);

        function hoverOver() {
            document.body.style.cursor = "pointer";
        }

        function hoverOut() {
            document.body.style.cursor = "default";
        }

        function mouseDown() { }

        function mouseUp() { }
    }

    function onSVGLoaded(data) {
        var heart = data.select("#heart");
        heart.transform('t1,1 r10,0,0 s0.2')
        var heart2 = heart.clone().transform('t12,5 r-10,0,0 s0.2');
        var heart3 = heart.clone().transform('t9,12 r70,0,0 s0.2');
        heartArray.push(heart);
        heartArray.push(heart2);
        heartArray.push(heart3);

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

        s.append(data.node);

        // Handlers :

        // TOUCH (for mobile devices ):
        function touchStartHandler() { }


        function touchMoveHandler() { }
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
            this.transform("t" + [tdx / 5, tdy / 5] + this.data('ot'));
        }

        function onStart(x, y, ev) {
            this.data('ot', this.transform().local);
        }

        function onEnd() {
            // console.log("endedDrag");
            console.log(heartArray);
            var index = heartArray.indexOf(this);
            console.log(index);
            heartArray.splice(index, 1);
            this.remove();
            delete this;
            console.log(heartArray);
            document.body.style.cursor = "default";
        }

        // HOVER
        function hoverOver() {
            document.body.style.cursor = "pointer";
            this.select('.leftwingid').addClass("left-wing-fast");
            this.select('.leftwingid').removeClass("left-wing");
            this.select('.rightwingid').addClass("right-wing-fast");
            this.select('.rightwingid').removeClass("right-wing");
        }

        function hoverOut() {
            document.body.style.cursor = "default";
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
