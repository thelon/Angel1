define(["Control"],function(Control){
	var Label = new Control();
	Label.prototype.init = function(Text,Color,Font,X,Y){
			this.Text = Text;
			this.Color = Color;
			this.Font = Font;
			this.X = X;
			this.Y = Y;
			this._super();
		};
	Label.prototype.paint = function(){
			Helper.myDrawText(this.Text, this.Font, this.Color, this.X, this.Y);
		};
	return new Label;
	});
});