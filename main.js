function preload(){

}
function setup(){
    canvas= createCanvas(640,640);
    canvas.position(110, 250);
    video= createCapture(VIDEO);
    video.hide();

}
function draw(){
    image(video,150,150,400,400);
    fill(255, 35, 70);
    circle(30, 50, 50);
    rect(50, 40, 550, 30);
    circle(600, 50, 50);
    rect(20, 70, 30, 550);
    circle(30, 600, 50);
    rect(50, 600, 550, 30);
    circle(600, 600, 50);
    rect(580, 70, 30, 520);

}
function take_snapshot(){
   save('picture.png');
}
