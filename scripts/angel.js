console.log('loaded angel.js');
/*
	Class Control - method Draw
	Method IsClicked
	
	Class View
	method Draw
	event OnKeyDown
	event OnMouseDown
*/	




(function(){
// UTIL CLASS /






/* Canvas helper */
function myDrawText(text, font, color, x, y){
   context.fillStyle =color;
   context.font = font;
   context.fillText(text,x,y);
}

function myPlay(audio){
	document.getElementById(audio).play();
}

/* Keyboard */
function keysStart(){
	$(document).keyup(function(evt){
	if (evt.keycode=32){
		viewMenu();
	}	
	});
}

function keysMenu(){
	$(document).keyup(function(evt){
	if (evt.keycode=32){
		viewGame();
	}
	});
}

/* CANVAS VIEW */
function partClean(){
	context.fillStyle = Color.Background;
	context.fillRect(0,0, Const.CanvasWidth ,Const.CanvasHeight);
}

function partTitle(){
	myDrawText("Anioł Stróż",Font.Title,Color.Pretty, 220, 70);
}

function partScore(){
	context.fillStyle = Color.ScoreBackground;
	context.fillRect(Const.ScoreStartX, Const.ScoreStartY, Const.ScoreWidth, Const.ScoreHeight);
}

function partSub(){
	context.fillStyle = Color.SubBackground;
	context.fillRect(Const.SubStartX, Const.SubStartY, Const.SubWidth, Const.SubHeight);
}

function partTenRulesGame()
{
	context.fillStyle = Color.Light;
	context.beginPath();
	context.arc(50,50,25,0,2*Math.PI,false);
	context.fill();
	//context.fillArc(50, 50, 25,25, 0, 360);
}

function viewGame(){
    partClean();
	partScore();
	partSub();
	partTenRulesGame();
}

function viewMenu(){
	partClean();
	partTitle();
	keysMenu();
}

function viewStart()
{
	partClean();
	partTitle();
	myPlay(Audio.Wellcome);
	myDrawText("epizod 1",Font.Subtitle,Color.Pretty, 240, 280);
	myDrawText("Marcin Zawadzki (thelon78@gmail.com)",Font.Subtitle,Color.Pretty, 240, 300);
	myDrawText("Naciśnij spację",Font.Light, Color.Light, 260,350);
	keysStart();
}

var Res = ResPL;
var context;

function Init(){
	var canvas  = document.getElementById("canvas");
	context = canvas.getContext("2d");
	viewStart();
	console.log('Initialized');
};

Init();
})();

