define({
	myDrawText: function myDrawText(context, text, font, color, x, y){
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