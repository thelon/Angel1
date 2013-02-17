define({
	//Initializer
	init:function(context){
		this.context = context;
	},
	//paints on canvas
	paint : function(){
	},
	//Determines if 
	isClicked : function(){
	},
	//Used to test if object was clicked
	click : function(){
		if (this.isClicked()){
			onClick();
		}
	},
	//Used to act if object is clicked
	onClick : function (){
	}
		
});
// see: http://ejohn.org/blog/simple-javascript-inheritance/