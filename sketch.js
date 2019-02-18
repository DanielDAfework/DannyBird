
var y = 30;
var x = 540;
var z = 300;
var score = 0;
var currentHigh = 0;
var rectangularY = 100;
var rectangularHeight = 300;
var rectLowerY = 0;
var rectLowerHeight = 60;
var rectHeights;

//potential height values


function setup() {
    createCanvas(600, 400);
    //var rectHeights = getHeights();
}

function draw() {
    background(237, 34, 93);
    fill(0);
    circle(30, y, 10);
    fill(10);

    y = y + 6;

    if(keyIsPressed ){
        y = y - 14;
      }

    //upper rectangle
    fill(10);

    rect(x , rectLowerY, 60, rectLowerHeight);

    //lower rectangle
    rect(x, rectangularY, 60, rectangularHeight);
    x = x - 10;

 //makes sure the ball stays in bounds
   if(y>=385)
   {
       y=385;
   }
   if(y<=10)
   {
       y=10;
   }

    //triggers once the rectangle goes off screen
    if(x <= -90)
    {
        x = 540;
        //redrawing the lower rectangle
        rectangularHeight = Math.floor((Math.random() * 350) + 1);
        rectangularY = 400 - rectangularHeight;

        //redrawing the upper rectangle
        rectLowerHeight = rectangularY - 100;
    }
         document.getElementById("score").innerHTML = "Score: " + score;
    if(((y>=(rectangularY)) || (y<=rectLowerHeight)) && (x == 30))
    {
        x = -40;

        if(score>currentHigh)
        {
            currentHigh = score;
            document.getElementById("hi").innerHTML = "High Score: " + currentHigh;
        }
        score = 0;

    }
    else if(x == 30){
        score++;
    }

 

}


  
  