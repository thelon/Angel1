requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts',
    paths: {
        "viewIntro": "views/viewIntro",
		"View" : "class/view",
		"Control": "class/control",
		"Label" : "class/label",
		"Font" : "class/font",
		"Color" : "class/colors",
		"Helper" : "class/helper"
    }
});


require(["viewIntro"],function(viewIntro)
{
	console.log('Main.js loaded');
	viewIntro.paint();
});