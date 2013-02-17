define(["./Control"],function(Control){
	return Control.extend({
		init: function(context){
			return this._super(context);
		},
		controls : [],
		click : function(){
			for(i=0;i<controls.length,i++){
				controls[i].click();
			}
		},
		paint : function(){
			for(i=0;i<controls.length,i++){
				controls[i].paint();
			}
		}
	});
});