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
    CanvasWidth : 400,
	CanvasHeight : 300
}

var Font = {
	Title : "normal 32px Monotype",
	Subtitle : "normal 20px Monotype",
    Subtitle2 : "normal 12px Monotype"
}

var Colors = {
    Pretty : "lightBlue",
	Background : "blue"
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

/* CANVAS VIEW */
function viewStart()
{
	context.fillStyle = Font.Background;
	context.fillRect(0,0, Const.CanvasWidth ,Const.CanvasHeight);

	context.font      = Font.Title;
	context.fillStyle = Colors.Pretty;
	context.fillText("Anioł Stróż", 120, 70);
	context.font      = Font.Subtitle;
	context.fillText("epizod 1", 140, 180);
	context.font      = Font.Subtitle2;
	context.fillText("Marcin Zawadzki (thelon78@gmail.com)", 140, 200);
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

