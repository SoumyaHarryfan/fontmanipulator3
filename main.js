leftWristX = 0;
rightWristY = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(300,300);
    video.position(500,550);
    canvas = createCanvas(300,300);
    canvas.position(100,100);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX)
    }
}
function draw(){
    background('pink');
    fill('red');
    text('Soumya',0,100);
    textSize(difference);
}