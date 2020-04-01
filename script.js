var canvas;
var context;

var time;
var scene = [];


class Player {
	constructor(dx, dy){
		this.h = 200;
		this.w = 200;
		this.x = 390;
		this.y = 450;
		this.image = new Image();
		this.image.src = "assets/player_sqare.png";
		this.dx = dx;
		this.dy = dy;
	}

	move(dt){

		if (this.x >= canvas.width-200 || this.x <= 0){
                this.dx *= -1
            }
            if (this.y >= canvas.height || this.y <= 0){
                this.dY *= -1
            }
        
        this.x += this.dx
        this.y += this.dy
	}

	draw(){
		context.save();
		context.drawImage(this.image, this.x, this.y, this.w, this.h);
		context.restore();
	}
}





class Zombie {
	constructor(d){
		this.h = 125;
		this.w = 125;
		this.x = 450;
		this.y = 150;
		this.image = new Image();
		this.dx = d;
		//this.dy = d;
	}

	move(dt){
		/*
		if (this.x >= canvas.width-150|| this.x <= 0){
                this.dx *= -1
            }
            if (this.y >= canvas.height || this.y <= 0){
                this.dY *= -1
            }
        
        this.x += this.dx*/
        //this.y += this.dy
	}

	draw(){
		context.save();
		context.drawImage(this.image, this.x, this.y, this.w, this.h);
		context.restore();
	}
}


class Zombie1 extends Zombie {
	constructor(d){
		super(d);
		this.w = 150;
		this.image.src = "assets/zombie.png";
	}
}





class Tree {
	constructor(x, y){
		this.h = 150;
		this.w = 150;
		this.x = x;
		this.y = y;
		this.image = new Image();
		this.image.src = "assets/tree1.png";
	}

	move(dt){}

	draw(){
		context.save();
		context.drawImage(this.image, this.x, this.y, this.w, this.h);
		context.restore();
	}
}



class Bullet {
	constructor(){
		this.h = 50;
		this.w = 50;
		this.x = 490;
		this.y = 425;
		this.image = new Image();
		this.image.src = "assets/bullet.png";
		this.dx = 0;
		this.dy = -3;
	}

	move(dt){

		if (this.x >= canvas.width-200 || this.x <= 0){
                this.dx *= -1
            }
            if (this.y >= canvas.height || this.y <= 0){
                this.dY *= -1
            }
        
        this.x += this.dx
        this.y += this.dy
	}

	draw(){
		context.save();
		context.drawImage(this.image, this.x, this.y, this.w, this.h);
		context.restore();
	}
}




class Title {
	constructor(text){
		this.x = 450;
		this.y = 50;
		this.f = "30pt Calibri";
		this.a = "center";
		this.c = "black";
		this.t = text;
	}

	move(dt){}

	draw(){
		context.save();
		context.font = this.f;
		context.textAlign = this.a;
		context.fillStyle = this.c;
		context.fillText(this.t, this.x, this.y);
		context.restore();
	}
}




class Background {
	constructor(){
		this.h = canvas.height;
		this.w = canvas.width;
		this.x = 0;
		this.y = 0;
		this.image = new Image();
		this.image.src = "assets/backgroundv3.png";
	}

	move(dt){}

	draw(){
		context.save();
		context.drawImage(this.image, this.x, this.y, this.w, this.h);
		context.restore();
	}
}




function step(){
	var now = Date.now();
	var dt = (now - time) / 100;
	time = now;

	context.fillStyle = "white";
	context.fillRect(0, 0, canvas.width, canvas.height);

	for(i in scene){
		scene[i].move(dt);
		scene[i].draw();
	}

	requestAnimationFrame(step)
}



window.onload = function(){
	canvas  = document.getElementById("canvas");
	context = canvas.getContext("2d");

	scene.push( 
		new Background(),
		new Tree(-25, -20),
		new Tree(600, 200),
		new Tree(150, 450),
		new Tree(800, 600),
		new Player(3,0),
		new Zombie1(-3),
		new Bullet(),    
		new Title("Zombie Killer - Ultra") 
	);

	time = Date.now();
	requestAnimationFrame(step);
}
