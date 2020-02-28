/*var logo = new Image();
logo.src = "logo_dvd.jpg";

ctx.drawImage( ? ); */

var canvas = document.getElementById("dvd");
var ctx = canvas.getContext("2d");

var clearCanvas = function(e) {
    ctx.clearRect(0,0,500,500);
}


var id = 0;
var x = 15;
var y = 15;
var moveX = 2;
var moveY = 7;
var moveDVD = true;
var logo = new Image();
logo.src = "logo_dvd.jpg";

var startAnim = function(e) {
    window.cancelAnimationFrame(id);
    if (moveDVD) {
	console.log(moveDVD);
	clearCanvas();
	ctx.beginPath();
	ctx.drawImage(logo, x += moveX, y += moveY);
	console.log(x);
	console.log(y);
	if (x >= 470 || x <= 0) { // also not completely random path yet
	    moveX *= -1;
	}
	if (y >= 470 || y <= 0) { // does not bounce off the right wall properly
	    moveY *= -1;
	}
    }
    id = window.requestAnimationFrame(startAnim);
}

var stopAnim = function(e) {
    window.cancelAnimationFrame(id);
}

var buttonStart = document.getElementById("movie");
buttonStart.addEventListener('click', startAnim);

var buttonStop = document.getElementById("stop");
buttonStop.addEventListener('click', stopAnim);


var radius = 5;
var change = 1;
var id = 0;


function clear(e) {
	ctx.clearRect(0, 0, 500, 500);
}

function startAnim2() {
	window.cancelAnimationFrame(id);
	if (radius == 250) {
		change = -1;
	}
	if (radius == 0) {
		change = 1;
	}
	clear();
	ctx.beginPath();
	ctx.arc(250, 250, radius += change, 0, 2 * Math.PI);
	ctx.fillStyle = "#f5df04";
	ctx.fill();
	id = window.requestAnimationFrame(startAnim2);
};


var buttonStart = document.getElementById("start");
buttonStart.addEventListener('click', function(e) {
	id = window.requestAnimationFrame(startAnim2);
});