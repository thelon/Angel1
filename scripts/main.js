requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts',
    paths: {
        
    }
});


require(["controlers/startControler.js"],function(controler)
{
console.log('Main.js loaded');
});