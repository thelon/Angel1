define(["./Control"],function(Control){
	return Control.extend({
		init: function(){
			return this._super();
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