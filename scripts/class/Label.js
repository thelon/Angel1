define(["Control"],function(Control){	
	return Control.extend({
		init:function(Text,Color,Font,X,Y){
			this.Text = Text;
			this.Color = Color;
			this.Font = Font;
			this.X = X;
			this.Y = Y;
			this._super();
		},
		paint:function(){
			Helper.myDrawText(this.Text, this.Font, this.Color, this.X, this.Y);
		}
	});
});