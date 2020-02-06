
function makeRect() {
	ctx.fillRect( 50, 50, 100, 200);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var canvas, ctx,
	mousePoint = false,
    prevX = 0, 
    currX = 0, 
    prevY = 0, 
    currY = 0
    ;

function setup() {
    canvas = document.getElementById('slate');
    ctx = canvas.getContext("2d");

    canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);
}

function draw() {
    ctx.beginPath(); 
    ctx.moveTo(prevX, prevY); // start point of line
    ctx.lineTo(currX, currY); // draw line to current point
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.closePath();
}

function findxy(mouseMove, e) {
    if (mouseMove == 'down') {
        prevX = currX; // make new starting point at where mouse is down
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft; // mouse coordinate made current point
        currY = e.clientY - canvas.offsetTop;

        mousePoint = true;
    }
    if (mouseMove == 'up' || mouseMove == "out") {
        mousePoint = false;
    }
    if (mouseMove == 'move') {
        if (mousePoint) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            draw();
        }
    }
}

