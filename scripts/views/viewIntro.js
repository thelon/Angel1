define(["View","Label","Helper","Font","Color"], function(View,Label,Helper,Font,COlor){
	return View.extend({
		controls:[
			new Label(Helper.getContext(),"Anioł Stróż",Font.Title,Color.Pretty, 220, 70),
			new Label(Helper.getContext(),"epizod 1",Font.Subtitle,Color.Pretty, 240, 280),
			new Label(Helper.getContext(),"Marcin Zawadzki (thelon78@gmail.com)",Font.Subtitle,Color.Pretty, 240, 300),
			new Label(Helper.getContext(),"Naciśnij spację",Font.Light, Color.Light, 260,350)
		]
	});
});