define({
	myDrawText: function myDrawText(text, font, color, x, y){
			var context = getContext();
			context.fillStyle =color;
			context.font = font;
			context.fillText(text,x,y);
		}

	myPlayAudio : function myPlay(audio){
	document.getElementById(audio).play();
	},
	getContext : function getContext(){
		var canvas  = document.getElementById("canvas");
		var context = canvas.getContext("2d");
		return context;
	}
});