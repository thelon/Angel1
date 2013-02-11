console.log('loaded angel.js');

(function(){
// UTIL CLASS /
var Util = {
	init : function initArray(){
		this.length = initArray.arguments.length
		for (var i = 0; i < this.length; i++)
			this[i+1] = initArray.arguments[i]
	}
}

var Const = {
    CanvasWidth : 600,
	CanvasHeight : 400
}

var Font = {
	Title : "normal 32px Monotype",
	Subtitle : "normal 20px Monotype",
    Subtitle2 : "normal 12px Monotype",
	Light : "normal 10px Monotype"
}

var Color = {
    Pretty : "blue",
	Background : "black",
	Light : "grey"
}

var Audio = {
	Wellcome : "audioWellcome"
}

var ResPL ={
	Rules : ["Jam jest Pan .Bóg twój, który cie wywiódł z ziemi egipskiej z domu niewoli.",
			 "Nie będziesz miał bogów cudzych przede Mną.",
			 "Nie będziesz brał imienia Pana Boga swego na daremno.",
			 "Pamiętaj , abyś dzień świety święcił.",
			 "Czcij ojca swego i matke swoją.",
             "Nie zabijaj.",
             "Nie cudzołóż.",
             "Nie kradnij.",
             "Nie mów fałszywego świadectwa przeciw bliżniemu swemu.",
             "Nie pożądaj żony bliźniego swego.",
             "Ani żadnej rzeczy , która jego jest."],
	BlessingsPart1:["Błogosławieni ubodzy w duchu",
					"Błogosławieni, którzy się smucą",
                    "Błogosławieni cisi",
					"Błogosławieni, którzy łakną i pragną sprawiedliwości",
					"Błogosławieni miłosierni",
					"Błogosławieni czystego serca",		
					"Błogosławieni, którzy wprowadzają pokój",
					"Błogosławieni, którzy cierpią prześladowanie dla sprawiedliwości"],
	BlessingsPart2:[", albowiem do nich należy Królestwo niebieskie.",
					", albowiem oni będą pocieszeni.",
					", albowiem oni na własność posiądą ziemię.",
					", albowiem oni będą nasyceni.",
					", albowiem oni miłosierdzia dostąpią.",
					", albowiem oni Boga oglądać będą.",
					", albowiem oni będą nazwani synami Bożymi.",
					", albowiem do nich należy Królestwo niebieskie."]	
};
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

/* CANVAS VIEW */
function partClean(){
	context.fillStyle = Color.Background;
	context.fillRect(0,0, Const.CanvasWidth ,Const.CanvasHeight);
}

function partTitle(){
	myDrawText("Anioł Stróż",Font.Title,Color.Pretty, 220, 70);
}

function viewMenu(){
	partClean();
	partTitle();
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

