define(["Control",function(Control,Helper){	
	return Control.extend({
		init:function(context,Text,Color,Font,X,Y){
			this.Text = Text;
			this.Color = Color;
			this.Font = Font;
			this.X = X;
			this.Y = Y;
			this._super(context);
		},
		paint:function(){
			Helper.myDrawText(this.context, this.Text, this.Font, this.Color, this.X, this.Y);
		}
	});
});