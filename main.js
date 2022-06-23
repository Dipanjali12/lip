function preload(){
img=loadImage("lipstick.png");
}

function setup(){
canvas=createCanvas(350,350);
canvas.position(300,200);
video=createCapture(VIDEO);
video.size(350,350);
video.hide();
poseNet=ml5.poseNet(video,modelLoded);
poseNet.on("pose",gotPoses);

}

function  gotPoses(result){
    if(result.length>0){
        console.log(result);
        noseX=result[0].pose.nose.x-15;
        noseY=result[0].pose.nose.y-20;

    }
}

function modelLoded(){
    console.log("modelLoded");
}

noseX=15;
noseY=15;

function draw(){
image(video,0,0,350,350);
image(img,noseX,noseY,100,50);

}

function saveImg(){

}