function preload() {
    //load the images here
    bg=loadImage("iss.png")
    sleep=loadImage("sleep.png")
    brush=loadImage("brush.png")

    gym=loadAnimation("gym12.png","gym11.png")
    gym2=loadAnimation("gym1.png","gym2.png")
    eat=loadAnimation("eat1.png","eat2.png")
    drink=loadAnimation("drink1.png","drink2.png")
    move=loadAnimation("move.png")
    bath=loadAnimation("bath1.png","bath2.png")
}

function setup(){
    createCanvas(1000,800);
    //create Astronaut sprite here
  astronaut = createSprite (500,600)
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale=0.1
}

function draw() {
 background(bg);
 
 if(keyDown(UP_ARROW)){
     astronaut.addAnimation("brushing",brush)
     astronaut.changeAnimation("brushing",brush)
     astronaut.velocityX=0
     astronaut.velocityY=0
 }

if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("gymming",gym)
    astronaut.changeAnimation("gymming",gym)
    astronaut.velocityX=0
    astronaut.velocityY=0
     }
    
    
 if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("gymming",gym2)
    astronaut.changeAnimation("gymming",gym2)
    astronaut.velocityX=0
    astronaut.velocityY=0
                }

if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating",eat)
    astronaut.velocityX=0
    astronaut.velocityY=0
}
//keycode for d    
if(keyCode=="68"){
    astronaut.addAnimation("drinking",drink)
    astronaut.changeAnimation("drinking",drink)
    astronaut.velocityX=0
    astronaut.velocityY=0
} 
//keycode for s   
if(keyCode=="83"){
    astronaut.addAnimation("sleeping",sleep)
    astronaut.changeAnimation("sleeping",sleep)
    astronaut.velocityX=0
    astronaut.velocityY=0
    
    
}

//Keycode for b
if(keyCode=="66"){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing",bath)
    astronaut.velocityX=0
    astronaut.velocityY=0
}

//keycode for m
if(keyCode=="77"){
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving",move)
    astronaut.velocityX=1
    astronaut.velocityY=1
}
drawSprites();
}
