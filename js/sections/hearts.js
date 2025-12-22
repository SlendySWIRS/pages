// js/sections/hearts.js


const s = Snap("#snappy");
let hearts = Array();

export function initHearts() {

    console.log("HELLO??");

    Snap.load("../assets/svgs/heart.svg",
        onSVGLoaded);

    function onSVGLoaded(data) {
        var heart = data.select("#leftwing");
        console.log(data)
        hearts.push(data.node);
        console.log(hearts)

        heart.attr({
            fill: "tomato",
            stroke: "cornflowerblue",
            strokeWidth: 0
        });

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
        function touchStartHandler() {
            heart.attr({
                fill: "white",
                stroke: "purple"
            });
        }


        function touchMoveHandler() {
            heart.attr({
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
            heart.attr({
                fill: "cornflowerblue",
                stroke: "tomato"
            });
        }

        function hoverOut() {
            document.body.style.cursor = "default";
            heart.attr({
                fill: "tomato",
                stroke: "cornflowerblue"
            });
        }

        //CLICK
        function mouseDown() {
            heart.attr({
                fill: "grey",
                stroke: "dimgrey"
            });
        }

        function mouseUp() {
            heart.attr({
                fill: "cornflowerblue",
                stroke: "tomato"
            });
        }
    }



}

export function destroyHearts() {
    hearts.forEach(item => {
        item.remove();
    })
}
