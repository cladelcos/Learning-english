var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var moveX = 50,moveY = 50;

ctx.fillStyle = "#ff0000";
ctx.fillRect(moveX,moveY,50,50);

function draw () {
	ctx.fillStyle = "00ff00";
	while (moveX <= 300) {
		ctx.fillRect(moveX,moveY,50,70);
		moveX = moveX + 10;
	}
}


//The Game Programation

var myGamePiece;

function startGame() {
	myGamePiece = new component(30, 30, "red", 80, 75);
	myGameArea.start();
}
var myGameArea = {
	canvas: document.createElement("canvas"),
	start: function () {
		this.canvas.width = 480;
		this.canvas.height = 270;
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.interval = setInterval(updateGameArea, 20);
	},
	stop: function () {
		clearInterval(this.interval);
	},
	clear: function () {
		this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
	}

}
function component(width, height, color, x, y, type) {
	this.type = type;
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	this.speedX = 0;
	this.speedY = 0;
	this.gravity = 0.05;
	this.gravitySpeed = 0;
	this.update = function () {
		ctx = myGameArea.context;
		ctx.fillStyle = color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	this.newPos = function () {
		this.gravitySpeed += this.gravity;
		this.x += this.speedX;
		this.y = this.speedY + this.gravitySpeed;
	}
}