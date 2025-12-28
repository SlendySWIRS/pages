// js/sections/hearts.js

let root;

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
    let hearts = Array();

    Snap.load("./assets/svgs/heart.svg", onSVGLoaded);

    function onSVGLoaded(data) {
        var heart = data.select("#heart");
        hearts.push(data.node);

        // Hover :
        heart.hover(hoverOver, hoverOut);
        // Click :
        heart.mouseup(mouseUp);
        heart.mousedown(mouseDown);
        //onmove, onstart, onend
        heart.drag(onMove, onStart, onEnd);

        // Touch:
        // mouseup mousedown seem to also workon mobile, but to be sure,
        // you can use touch events:
        heart.touchstart(touchStartHandler);
        heart.touchmove(touchMoveHandler);

        s.append(data);

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
            this.transform("t" + [tdx / 10, tdy / 10] + this.data('ot'));
        }

        function onStart(x, y, ev) {
            this.data('ot', this.transform().local);
        }

        function onEnd() {
            // console.log("endedDrag");
            var index = hearts.indexOf(this);
            hearts.splice(index, 1);
            this.remove();
            delete this;
        }

        // HOVER
        function hoverOver() {
            document.body.style.cursor = "pointer";
        }

        function hoverOut() {
            document.body.style.cursor = "default";
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
