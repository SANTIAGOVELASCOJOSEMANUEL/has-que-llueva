






var xPositions = [200,300,400];
        var yPositions = [0,100,200];
var sketchProc = function(processingInstance) {
    with (processingInstance) {
      size(400,400);
        fill(50, 50, 70);
        frameRate(30);
        background(0,0,0);
for(var i=0;i<20;i++){
    xPositions.push(random(0,400));
    yPositions.push(random(0,400));
}
//var x = event.keyCode; 
//draw = function() {
    gameloop();
    function gameloop(){
    background(0,0,0);
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        var c=xPositions.length*10;
        fill(0, 184, 255);
        ellipse(xPositions[i], yPositions[i], 10, 20);
        //rect(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 10;
        if(yPositions[i]>400){
            yPositions[i]=5;
        }
        
    }
        window.requestAnimationFrame(gameloop);
    }
    }};
// Get the canvas that Processing-js will use
var canvas = document.getElementById("mycanvas"); 
// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
var processing = new Processing(canvas, sketchProc);