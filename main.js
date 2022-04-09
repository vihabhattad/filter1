function preload() {

}
function setup() {
    canvas= createCanvas(640, 480);
    canvas.position(110,250);
    video= createCapture(VIDEO);
    video.hide();
    
  
}
function draw() {
    image(video,150,150,300,300);
    fill(100,150,200);
    circle(50,50,70);
    circle(600,50,70);
    circle(50,400,70);
    circle(600,400,70);
    rect(30,70,40,320);
    rect(580,70,40,320);
}
function take_snapshot (){
    save('filter_pic.png');
}
