//legend

//variables-----------------------------------------------------------------------------------------------------------
let centerWidth; //half the width of the screen / the center of the screen - the x center of the solar system will be placed here
let thirdHeight; //third of the height of the screen - the y center of the solar system will be placed here

let sunWidth = 0; //width of the sun

let ringSpacer; //amount of space between each ring (solar system planet ring)

//variables for temporarily holding the answers from user input
let dayFeeling = 0; //feeling about the day
let interactionFeeling = 0; //feeling about the interaction
let interactionLength = 0; //length of the interaction
let timeOfDay = 0; //what time of day the interaction happened
let satisfactionDay = 0; //satisfaction about the day's social interactions
let relationshipType = 0; //relationship type for the interaction
let comType = 0; //communication method for the interaction
let SIFeeling = 0; //overall feeling about the day's social interactions
let personName =""; //name of person/people in social interaction 

let overall = []; //array that holds data about the overall day (dayFeeling, satisfactionDay, SIFeeling)

let entry = []; //array that holds data about each social interaction entry
let whichEntry = -1; //determines which part of the array currently on

let angle = 0; //helps w planet rotation around sun

//vars for stars
let x1 = []; //array for the x co-ordinate of the stars
let y1 = []; //array for the y co-ordinate of the stars
let size1 = []; //array for the size of the stars
let starNum = 50; //number of stars

let pointCount = 9; //how many dots for the in-person communication method data visualization

let screen = 0; //for which screen is on
//0 - how are you today question
//1 - social interaction entry: add or skip?
//2 - social interaction entry: questions
//3 - day's overview questions
//4 - final presentation, after finishing questions

//used to hold today's date
let d = 0; //day
let m = 0; //month
let y = 0; // year

//setup---------------------------------------------------------------------------------------------------------------
function setup() {
  //creating the canvas
  var myCanvasLegend = createCanvas(windowWidth, windowHeight*2.85)
  myCanvasLegend.parent("myCanvasLegendHTML");
  
  textFont("Helvetica");
  // textAlign(CENTER);
  textStyle(NORMAL);
  
  planetSize = windowWidth/12;

}

//draw----------------------------------------------------------------------------------------------------------------
function draw() {
  background(0);
  
  sunWidth = windowWidth / 7.5;
  
  ///////////////////////////////////////////////////////////////
  
  //this goes on the bottom so it goes first in the code

  
  noFill();
    stroke(255)
    strokeWeight(1);

  //rings
  
  let ringSpacerL = ((((windowWidth/6)*2-(windowWidth/6)/2) - ((windowWidth/6)*1-(windowWidth/6)/2))*2) ;
  
  //closest to sun
  noFill();
  stroke(255);
  
  ellipse((windowWidth/6)*1-(windowWidth/6)/2, (windowHeight/3.5)*8, windowWidth-(ringSpacerL)*2);
  
  ellipse((windowWidth/6)*1-(windowWidth/6)/2, (windowHeight/3.5)*8, windowWidth-(ringSpacerL));
  
    
  ellipse((windowWidth/6)*1-(windowWidth/6)/2, (windowHeight/3.5)*8, windowWidth);
  
  //furthest from sun
  ellipse((windowWidth/6)*1-(windowWidth/6)/2, (windowHeight/3.5)*8, windowWidth+(ringSpacerL));
  

  //black boxes that hide most of the rings
  noStroke();
  fill(0);
  // rect(0, ((windowHeight/3.5)*6), windowWidth, windowHeight/2.25);
  
  beginShape();
  vertex(0, 0); //top left 
  vertex(windowWidth,0); //top right 
  vertex(windowWidth,((windowHeight/3.5)*6)+windowHeight/1.95); // bottom right
  vertex(0, ((windowHeight/3.5)*6)+windowHeight/1.95);
  endShape(CLOSE);
  // rect(0, ((windowHeight/3.5)*8)+(windowHeight/17), windowWidth, windowHeight/2.25);
  rect((windowWidth/6)*1, ((windowHeight/3.5)*8)+(windowHeight/17), windowWidth, windowHeight/22);
  
  //writing
   fill(255);
  textSize(windowHeight / 32);
  textAlign(CENTER,CENTER);
  
  text("What time of day was the interaction?",windowWidth/2, (windowHeight/3.5)*8-windowHeight/10); 
  
  
  ////////////////legend title//////////////////////////////////
  noStroke();
  
  fill(255);
  textSize(windowHeight / 20);
  textAlign(CENTER,CENTER);
  textFont('Space Mono');
  text("Legend",windowWidth/2, (windowHeight/3.5)-windowHeight/5); //5.5
  
  textFont('Helvetica');  
  //////////////////////////////////////////////////
  

  //sun and planets
    noStroke();
  for(i=1;i<7;i++){
    fill("rgb(150,150,150)");
    if(i!==6){
  circle((windowWidth/6)*i-(windowWidth/6)/2, (windowHeight/3.5)*8, planetSize);
    } else {
      circle((windowWidth/6)*i-(windowWidth/6)/2-(windowWidth/200), (windowHeight/3.5)*8, planetSize);
    }
    
    if(i==1){
      fill("#EBD300");
    noStroke();
    circle((windowWidth/6)*i-(windowWidth/6)/2, (windowHeight/3.5)*8, sunWidth);
    }
    
    if(i==6){
      //draws a ring around the planet if the social interaction happens throughout the day
      noFill();
      stroke(255);
      strokeWeight(1);
      circle((windowWidth/6)*i-(windowWidth/6)/2-(windowWidth/200),
        (windowHeight/3.5)*8,
        planetSize + planetSize
      );
      noStroke();
    }
  }
  
  // textSize(windowHeight / 42);
  textSize(windowHeight / 47);
  textAlign(CENTER,TOP);
  
  
  fill(255);
  noStroke();
  text("Morning",(windowWidth/6)*2-(windowWidth/6)/2, (windowHeight/3.5)*8+windowHeight/14);
  text("Afternoon",(windowWidth/6)*3-(windowWidth/6)/2, (windowHeight/3.5)*8+windowHeight/14);
  text("Evening",(windowWidth/6)*4-(windowWidth/6)/2, (windowHeight/3.5)*8+windowHeight/14);
  text("Night",(windowWidth/6)*5-(windowWidth/6)/2, (windowHeight/3.5)*8+windowHeight/14);
  text("Throughout\nthe Day",(windowWidth/6)*6-(windowWidth/6)/2-windowWidth/100, (windowHeight/3.5)*8+windowHeight/14);
  
  
  
  
  /////////////////////////////////////////////////////////////////
             
  fill(255);
  textSize(windowHeight / 32);
  textAlign(CENTER,CENTER);
  text("How are you today?",windowWidth/2, (windowHeight/3.5)-windowHeight/11-windowHeight/45.4);
  
  
  //dif suns
  //drawing sun
  // textSize(windowHeight / 42);
  textSize(windowHeight / 47);
  textAlign(CENTER,TOP);
  fill(255);
  text("Very Good",(windowWidth/5)*1-(windowWidth/5)/2, (windowHeight/3.5)+windowHeight/13-windowHeight/45.4);
    fill("#FFF6A3");
    noStroke();
    circle((windowWidth/5)*1-(windowWidth/5)/2, (windowHeight/3.5)-windowHeight/45.4, sunWidth);
  
  fill(255);
  text("Good",(windowWidth/5)*2-(windowWidth/5)/2, (windowHeight/3.5)+windowHeight/13-windowHeight/45.4);
  fill("#FFEB44");
    noStroke();
    circle((windowWidth/5)*2-(windowWidth/5)/2, (windowHeight/3.5)-windowHeight/45.4, sunWidth);
  
  fill(255);
  text("Neutral",(windowWidth/5)*3-(windowWidth/5)/2, (windowHeight/3.5)+windowHeight/13-windowHeight/45.4);
  fill("#EBD300");
    noStroke();
    circle((windowWidth/5)*3-(windowWidth/5)/2, (windowHeight/3.5)-windowHeight/45.4, sunWidth);
  
  fill(255);
  text("Bad",(windowWidth/5)*4-(windowWidth/5)/2, (windowHeight/3.5)+windowHeight/13-windowHeight/45.4);
  fill("#BFAC00");
    noStroke();
    circle((windowWidth/5)*4-(windowWidth/5)/2, (windowHeight/3.5)-windowHeight/45.4, sunWidth);
  
  fill(255);
  text("Very Bad",(windowWidth/5)*5-(windowWidth/5)/2, (windowHeight/3.5)+windowHeight/13-windowHeight/45.4);
  fill("#857701");
    noStroke();
    circle((windowWidth/5)*5-(windowWidth/5)/2, (windowHeight/3.5)-windowHeight/45.4, sunWidth);
  

  //sun decorations
  
  fill(255);
  textSize(windowHeight / 32);
  textAlign(CENTER,CENTER);
  text("How did you feel about \ntoday's social interactions?",windowWidth/2, (windowHeight/3.5)*2-windowHeight/8.25-windowHeight/208);
  
  
  // textSize(windowHeight / 42);
  textSize(windowHeight / 47);
  textAlign(CENTER,TOP);
  
  fill(255);
  text("Very Good",(windowWidth/5)*1-(windowWidth/5)/2, (windowHeight/3.5)*2+windowHeight/13-windowHeight/208);
  fill("#DCDCDC");
    noStroke();
    circle((windowWidth/5)*1-(windowWidth/5)/2, (windowHeight/3.5)*2-windowHeight/208, sunWidth);
  

  let x2 = (windowWidth/5)*1-(windowWidth/5)/2;
  let y2 = (windowHeight/3.5)*2-windowHeight/208;
  let sWidth = windowWidth/10;
  // let sunWidth = windowWidth / 7.5;
  // if (this.si_feeling == 1) {
      
      stroke("#E49300");
      strokeWeight(3);
      circle(x2, y2, windowWidth / 11);
      
      stroke(255);
      strokeWeight(1);
      circle(x2, y2, windowWidth / 11);
      
      stroke("#E49300");
      strokeWeight(3);
      circle(x2, y2, windowWidth / 18);
      
      stroke(255);
      strokeWeight(1);
      circle(x2, y2, windowWidth / 18);
      
      noFill();

      stroke("#E49300");
      strokeWeight(4.5);
      circle(
        x2 + sWidth / 4,
        y2 + sWidth / 4,
        windowWidth / 15
      );
      
      stroke(255);
      strokeWeight(2.5);
      circle(
        x2 + sWidth / 4,
        y2 + sWidth / 4,
        windowWidth / 15
      );
        
      stroke("#E49300");
      strokeWeight(3.5);
      circle(
        x2 - sWidth / 4,
        y2 - sWidth / 3,
        windowWidth / 20
      );
      
      stroke(255);
      strokeWeight(1.5);
      circle(
        x2 - sWidth / 4,
        y2 - sWidth / 3,
        windowWidth / 20
      );
  
  
  fill(255);
  noStroke();
  text("Good",(windowWidth/5)*2-(windowWidth/5)/2, (windowHeight/3.5)*2+windowHeight/13-windowHeight/208);
  fill("#DCDCDC");
    circle((windowWidth/5)*2-(windowWidth/5)/2, (windowHeight/3.5)*2-windowHeight/208, sunWidth);
      
      noFill();
      stroke("#E49300");
      strokeWeight(4.5);
      circle(
        (windowWidth/5)*2-(windowWidth/5)/2 + sWidth / 4,
        y2 + sWidth / 4,
        windowWidth / 15
      );
      strokeWeight(3.5);
      circle(
        (windowWidth/5)*2-(windowWidth/5)/2 - sWidth / 4,
        y2 - sWidth / 3,
        windowWidth / 20
      );
      
      stroke(255);
      strokeWeight(2.5);
      circle(
        (windowWidth/5)*2-(windowWidth/5)/2 + sWidth / 4,
        y2 + sWidth / 4,
        windowWidth / 15
      );
      strokeWeight(1.5);
      circle(
        (windowWidth/5)*2-(windowWidth/5)/2 - sWidth / 4,
        y2 - sWidth / 3,
        windowWidth / 20
      );
  
  
   fill(255);
  noStroke();
  text("Neutral",(windowWidth/5)*3-(windowWidth/5)/2, (windowHeight/3.5)*2+windowHeight/13-windowHeight/208);
  fill("#DCDCDC");
    circle((windowWidth/5)*3-(windowWidth/5)/2, (windowHeight/3.5)*2-windowHeight/208, sunWidth);

      noStroke();
      fill(150, 150, 150, 150);
      circle((windowWidth/5)*3-(windowWidth/5)/2 + sWidth / 4, y2, windowWidth / 27.5);
  
  fill(255);
  noStroke();
  text("Bad",(windowWidth/5)*4-(windowWidth/5)/2, (windowHeight/3.5)*2+windowHeight/13-windowHeight/208);
  fill("#DCDCDC");
    circle((windowWidth/5)*4-(windowWidth/5)/2, (windowHeight/3.5)*2-windowHeight/208, sunWidth);
  
  

      stroke(0);
      strokeWeight(2);
      line(
        (windowWidth/5)*4-(windowWidth/5)/2 - windowWidth / 20,
        y2 - windowWidth / 20,
        (windowWidth/5)*4-(windowWidth/5)/2 + windowWidth / 20,
        y2 + windowWidth / 20
      );
  
    fill(255);
  noStroke();
  text("Very Bad",(windowWidth/5)*5-(windowWidth/5)/2, (windowHeight/3.5)*2+windowHeight/13-windowHeight/208);
  fill("#DCDCDC");
    circle((windowWidth/5)*5-(windowWidth/5)/2, (windowHeight/3.5)*2-windowHeight/208, sunWidth);
  
 
      stroke(0);
      strokeWeight(2);
      line(
        (windowWidth/5)*5-(windowWidth/5)/2 - windowWidth / 20,
        y2 - windowWidth / 20,
        (windowWidth/5)*5-(windowWidth/5)/2 + windowWidth / 20,
        y2 + windowWidth / 20
      );

      strokeWeight(4);
      line(
        (windowWidth/5)*5-(windowWidth/5)/2 + windowWidth / 40 - sWidth / 5,
        y2 - windowWidth / 40 - sWidth / 5,
        (windowWidth/5)*5-(windowWidth/5)/2 - windowWidth / 40 - sWidth / 5,
        y2 + windowWidth / 40 - sWidth / 5
      );

      strokeWeight(6);
      line(
        (windowWidth/5)*5-(windowWidth/5)/2 + windowWidth / 30,
        y2 - windowWidth / 30,
        (windowWidth/5)*5-(windowWidth/5)/2 - windowWidth / 30,
        y2 + windowWidth / 30
      );

      strokeWeight(4);
      line(
        (windowWidth/5)*5-(windowWidth/5)/2 + windowWidth / 40 + sWidth / 5,
        y2 - windowWidth / 40 + sWidth / 5,
        (windowWidth/5)*5-(windowWidth/5)/2 - windowWidth / 40 + sWidth / 5,
        y2 + windowWidth / 40 + sWidth / 5
      );
    
  
  //stars
  
  
  fill(255);
  textSize(windowHeight / 32);
  textAlign(CENTER,CENTER);
  text("How satisfied are you with \ntoday's social interactions?",windowWidth/2, (windowHeight/3.5)*3-windowHeight/8.3+windowHeight/33);  
  
  // textSize(windowHeight / 42);
  textSize(windowHeight / 47);
  textAlign(CENTER,TOP);
  
  fill(255);
  noStroke();
  text("Very\nSatisfied",(windowWidth/5)*1-(windowWidth/5)/2, (windowHeight/3.5)*3+windowHeight/13+windowHeight/33);

  fill(255, 255, 255, 50);
  circle((windowWidth/5)*1-(windowWidth/5)/2+windowWidth/20,(
          windowHeight/3.5)*3+windowHeight/22.15+windowHeight/33, 
         (windowWidth/50)* 3.5 + 3);
  fill(255, 255, 255, 90);
  circle((windowWidth/5)*1-(windowWidth/5)/2+windowWidth/20,(
          windowHeight/3.5)*3+windowHeight/22.15+windowHeight/33, 
         (windowWidth/50)* 2.2 + 3);
  fill(255, 255, 255);
  circle((windowWidth/5)*1-(windowWidth/5)/2+windowWidth/20,(
          windowHeight/3.5)*3+windowHeight/22.15+windowHeight/33, 
         (windowWidth/50)+ 3);
  
  fill(255, 255, 255, 50);
  circle((windowWidth/5)*1-(windowWidth/5)/2, (windowHeight/3.5)*3+windowHeight/33, (windowWidth/75)* 3.5 + 3);
  fill(255, 255, 255, 90);
  circle((windowWidth/5)*1-(windowWidth/5)/2, (windowHeight/3.5)*3+windowHeight/33, (windowWidth/75)* 2.2 + 3);
  fill(255, 255, 255);
  circle((windowWidth/5)*1-(windowWidth/5)/2, (windowHeight/3.5)*3+windowHeight/33, (windowWidth/75)+ 3);
  
  fill(255, 255, 255, 50);
  circle((windowWidth/5)*1-(windowWidth/5)/2-windowWidth/20, 
        (windowHeight/3.5)*3-windowHeight/45+windowHeight/33, 
         (windowWidth/120)* 3.5 + 3);
  fill(255, 255, 255, 90);
  circle((windowWidth/5)*1-(windowWidth/5)/2-windowWidth/20, 
        (windowHeight/3.5)*3-windowHeight/45+windowHeight/33, 
         (windowWidth/120)* 2.2 + 3);
  fill(255, 255, 255);
  circle((windowWidth/5)*1-(windowWidth/5)/2-windowWidth/20, 
        (windowHeight/3.5)*3-windowHeight/45+windowHeight/33, 
         (windowWidth/120)+ 3);
  
  fill(255, 255, 255, 50);
  circle((windowWidth/5)*1-(windowWidth/5)/2-windowWidth/32, 
         (windowHeight/3.5)*3+windowHeight/45+windowHeight/33, 
         (windowWidth/220)* 3.5 + 3);
  fill(255, 255, 255, 90);
  circle((windowWidth/5)*1-(windowWidth/5)/2-windowWidth/32, 
         (windowHeight/3.5)*3+windowHeight/45+windowHeight/33, 
         (windowWidth/220)* 2.2 + 3);
  fill(255, 255, 255);
  circle((windowWidth/5)*1-(windowWidth/5)/2-windowWidth/32, 
         (windowHeight/3.5)*3+windowHeight/45+windowHeight/33, 
         (windowWidth/220)+ 3);
  
  fill(255, 255, 255, 50);
  circle((windowWidth/5)*1-(windowWidth/5)/2+windowWidth/70, 
         (windowHeight/3.5)*3-windowHeight/25+windowHeight/33, 
         (windowWidth/90)* 3.5 + 3);
  fill(255, 255, 255, 90);
  circle((windowWidth/5)*1-(windowWidth/5)/2+windowWidth/70, 
         (windowHeight/3.5)*3-windowHeight/25+windowHeight/33, 
         (windowWidth/90)* 2.2 + 3);
  fill(255, 255, 255);
  circle((windowWidth/5)*1-(windowWidth/5)/2+windowWidth/70, 
         (windowHeight/3.5)*3-windowHeight/25+windowHeight/33, 
         (windowWidth/90)+ 3);
  
  fill(255, 255, 255, 50);
  circle((windowWidth/5)*1-(windowWidth/5)/2+windowWidth/20, 
         (windowHeight/3.5)*3-windowHeight/50+windowHeight/33, 
         (windowWidth/90)* 3.5 + 3);
  fill(255, 255, 255, 90);
  circle((windowWidth/5)*1-(windowWidth/5)/2+windowWidth/20, 
         (windowHeight/3.5)*3-windowHeight/50+windowHeight/33, 
         (windowWidth/90)* 2.2 + 3);
  fill(255, 255, 255);
  circle((windowWidth/5)*1-(windowWidth/5)/2+windowWidth/20, 
         (windowHeight/3.5)*3-windowHeight/50+windowHeight/33, 
         (windowWidth/90)+ 3);
  
  fill(255, 255, 255, 50);
  circle((windowWidth/5)*1-(windowWidth/5)/2-windowWidth/18, 
         (windowHeight/3.5)*3+windowHeight/24+windowHeight/33, 
         (windowWidth/80)* 3.5 + 3);
  fill(255, 255, 255, 90);
  circle((windowWidth/5)*1-(windowWidth/5)/2-windowWidth/18, 
         (windowHeight/3.5)*3+windowHeight/24+windowHeight/33, 
         (windowWidth/80)* 2.2 + 3);
  fill(255, 255, 255);
  circle((windowWidth/5)*1-(windowWidth/5)/2-windowWidth/18, 
         (windowHeight/3.5)*3+windowHeight/24+windowHeight/33, 
         (windowWidth/80)+ 3);
  
  
  fill(255);
  noStroke();
  text("Satisfied",(windowWidth/5)*2-(windowWidth/5)/2, (windowHeight/3.5)*3+windowHeight/13+windowHeight/33);
  

  circle((windowWidth/5)*2-(windowWidth/5)/2+windowWidth/20,(
          windowHeight/3.5)*3+windowHeight/22.15+windowHeight/33, 
         (windowWidth/50)+ 3);

  circle((windowWidth/5)*2-(windowWidth/5)/2, (windowHeight/3.5)*3, (windowWidth/75)+ 3);
  

  circle((windowWidth/5)*2-(windowWidth/5)/2-windowWidth/20, 
        (windowHeight/3.5)*3-windowHeight/45+windowHeight/33, 
         (windowWidth/120)+ 3);


  circle((windowWidth/5)*2-(windowWidth/5)/2-windowWidth/32, 
         (windowHeight/3.5)*3+windowHeight/45+windowHeight/33, 
         (windowWidth/220)+ 3);
  

  circle((windowWidth/5)*2-(windowWidth/5)/2+windowWidth/70, 
         (windowHeight/3.5)*3-windowHeight/25+windowHeight/33, 
         (windowWidth/90)+ 3);
  

  circle((windowWidth/5)*2-(windowWidth/5)/2+windowWidth/20, 
         (windowHeight/3.5)*3-windowHeight/50+windowHeight/33, 
         (windowWidth/90)+ 3);

  circle((windowWidth/5)*2-(windowWidth/5)/2-windowWidth/18, 
         (windowHeight/3.5)*3+windowHeight/24+windowHeight/33, 
         (windowWidth/80)+ 3);
  
  
  fill(255);
  noStroke();
  text("Neutral",(windowWidth/5)*3-(windowWidth/5)/2, (windowHeight/3.5)*3+windowHeight/13+windowHeight/33);
  
  fill(255);
        stroke(255);
        strokeWeight(3.5);
  
  point((windowWidth/5)*3-(windowWidth/5)/2+windowWidth/20,(
          windowHeight/3.5)*3+windowHeight/22.15+windowHeight/33);

  point((windowWidth/5)*3-(windowWidth/5)/2, (windowHeight/3.5)*3+windowHeight/33);
  

  point((windowWidth/5)*3-(windowWidth/5)/2-windowWidth/20, 
        (windowHeight/3.5)*3-windowHeight/45+windowHeight/33);


  point((windowWidth/5)*3-(windowWidth/5)/2-windowWidth/32, 
         (windowHeight/3.5)*3+windowHeight/45+windowHeight/33);
  

  point((windowWidth/5)*3-(windowWidth/5)/2+windowWidth/70, 
         (windowHeight/3.5)*3-windowHeight/25+windowHeight/33);
  

  point((windowWidth/5)*3-(windowWidth/5)/2+windowWidth/20, 
         (windowHeight/3.5)*3-windowHeight/50+windowHeight/33);

  point((windowWidth/5)*3-(windowWidth/5)/2-windowWidth/18, 
         (windowHeight/3.5)*3+windowHeight/24+windowHeight/33);
  
  
  fill(255);
  noStroke();
  text("Dissatisfied",(windowWidth/5)*4-(windowWidth/5)/2, (windowHeight/3.5)*3+windowHeight/13+windowHeight/33);
  
   square((windowWidth/5)*4-(windowWidth/5)/2+windowWidth/20,(
          windowHeight/3.5)*3+windowHeight/22.15+windowHeight/33, 
         (windowWidth/50)+ 3);

  square((windowWidth/5)*4-(windowWidth/5)/2, (windowHeight/3.5)*3+windowHeight/33, (windowWidth/75)+ 3);
  

  square((windowWidth/5)*4-(windowWidth/5)/2-windowWidth/20, 
        (windowHeight/3.5)*3-windowHeight/45+windowHeight/33, 
         (windowWidth/120)+ 3);


  square((windowWidth/5)*4-(windowWidth/5)/2-windowWidth/32, 
         (windowHeight/3.5)*3+windowHeight/45+windowHeight/33, 
         (windowWidth/220)+ 3);
  

  square((windowWidth/5)*4-(windowWidth/5)/2+windowWidth/70, 
         (windowHeight/3.5)*3-windowHeight/25+windowHeight/33, 
         (windowWidth/90)+ 3);
  

  square((windowWidth/5)*4-(windowWidth/5)/2+windowWidth/20, 
         (windowHeight/3.5)*3-windowHeight/50+windowHeight/33, 
         (windowWidth/90)+ 3);

  square((windowWidth/5)*4-(windowWidth/5)/2-windowWidth/18, 
         (windowHeight/3.5)*3+windowHeight/24+windowHeight/33, 
         (windowWidth/80)+ 3);
  
  
  fill(255);
  noStroke();
  text("Very\nDissatisfied",(windowWidth/5)*5-(windowWidth/5)/2, (windowHeight/3.5)*3+windowHeight/13+windowHeight/33);
  
   fill(255, 255, 255, 50);
  square((windowWidth/5)*5-(windowWidth/5)/2+windowWidth/20,(
          windowHeight/3.5)*3+windowHeight/22.15+windowHeight/33, 
         (windowWidth/50)* 3.5 + 3);
  fill(255, 255, 255, 90);
  square((windowWidth/5)*5-(windowWidth/5)/2+windowWidth/20,(
          windowHeight/3.5)*3+windowHeight/22.15+windowHeight/33, 
         (windowWidth/50)* 2.2 + 3);
  fill(255, 255, 255);
  square((windowWidth/5)*5-(windowWidth/5)/2+windowWidth/20,(
          windowHeight/3.5)*3+windowHeight/22.15+windowHeight/33, 
         (windowWidth/50)+ 3);
  
  fill(255, 255, 255, 50);
  square((windowWidth/5)*5-(windowWidth/5)/2, (windowHeight/3.5)*3+windowHeight/33, (windowWidth/75)* 3.5 + 3);
  fill(255, 255, 255, 90);
  square((windowWidth/5)*5-(windowWidth/5)/2, (windowHeight/3.5)*3+windowHeight/33, (windowWidth/75)* 2.2 + 3);
  fill(255, 255, 255);
  square((windowWidth/5)*5-(windowWidth/5)/2, (windowHeight/3.5)*3+windowHeight/33, (windowWidth/75)+ 3);
  
  fill(255, 255, 255, 50);
  square((windowWidth/5)*5-(windowWidth/5)/2-windowWidth/20, 
        (windowHeight/3.5)*3-windowHeight/45+windowHeight/33, 
         (windowWidth/120)* 3.5 + 3);
  fill(255, 255, 255, 90);
  square((windowWidth/5)*5-(windowWidth/5)/2-windowWidth/20, 
        (windowHeight/3.5)*3-windowHeight/45+windowHeight/33, 
         (windowWidth/120)* 2.2 + 3);
  fill(255, 255, 255);
  square((windowWidth/5)*5-(windowWidth/5)/2-windowWidth/20, 
        (windowHeight/3.5)*3-windowHeight/45+windowHeight/33, 
         (windowWidth/120)+ 3);
  
  fill(255, 255, 255, 50);
  square((windowWidth/5)*5-(windowWidth/5)/2-windowWidth/32, 
         (windowHeight/3.5)*3+windowHeight/45+windowHeight/33, 
         (windowWidth/220)* 3.5 + 3);
  fill(255, 255, 255, 90);
  square((windowWidth/5)*5-(windowWidth/5)/2-windowWidth/32, 
         (windowHeight/3.5)*3+windowHeight/45+windowHeight/33, 
         (windowWidth/220)* 2.2 + 3);
  fill(255, 255, 255);
  square((windowWidth/5)*5-(windowWidth/5)/2-windowWidth/32, 
         (windowHeight/3.5)*3+windowHeight/45+windowHeight/33, 
         (windowWidth/220)+ 3);
  
  fill(255, 255, 255, 50);
  square((windowWidth/5)*5-(windowWidth/5)/2+windowWidth/70, 
         (windowHeight/3.5)*3-windowHeight/25+windowHeight/33, 
         (windowWidth/90)* 3.5 + 3);
  fill(255, 255, 255, 90);
  square((windowWidth/5)*5-(windowWidth/5)/2+windowWidth/70, 
         (windowHeight/3.5)*3-windowHeight/25+windowHeight/33, 
         (windowWidth/90)* 2.2 + 3);
  fill(255, 255, 255);
  square((windowWidth/5)*5-(windowWidth/5)/2+windowWidth/70, 
         (windowHeight/3.5)*3-windowHeight/25+windowHeight/33, 
         (windowWidth/90)+ 3);
  
  fill(255, 255, 255, 50);
  square((windowWidth/5)*5-(windowWidth/5)/2+windowWidth/20, 
         (windowHeight/3.5)*3-windowHeight/50+windowHeight/33, 
         (windowWidth/90)* 3.5 + 3);
  fill(255, 255, 255, 90);
  square((windowWidth/5)*5-(windowWidth/5)/2+windowWidth/20, 
         (windowHeight/3.5)*3-windowHeight/50+windowHeight/33, 
         (windowWidth/90)* 2.2 + 3);
  fill(255, 255, 255);
  square((windowWidth/5)*5-(windowWidth/5)/2+windowWidth/20, 
         (windowHeight/3.5)*3-windowHeight/50+windowHeight/33, 
         (windowWidth/90)+ 3);
  
  fill(255, 255, 255, 50);
  square((windowWidth/5)*5-(windowWidth/5)/2-windowWidth/18, 
         (windowHeight/3.5)*3+windowHeight/24+windowHeight/33, 
         (windowWidth/80)* 3.5 + 3);
  fill(255, 255, 255, 90);
  square((windowWidth/5)*5-(windowWidth/5)/2-windowWidth/18, 
         (windowHeight/3.5)*3+windowHeight/24+windowHeight/33, 
         (windowWidth/80)* 2.2 + 3);
  fill(255, 255, 255);
  square((windowWidth/5)*5-(windowWidth/5)/2-windowWidth/18, 
         (windowHeight/3.5)*3+windowHeight/24+windowHeight/33, 
         (windowWidth/80)+ 3);
  
  //planet stuff
  //relationship 
 
    fill(255);
  textSize(windowHeight / 32);
  textAlign(CENTER,CENTER);
  text("What kind of relationship do you have?",windowWidth/2, (windowHeight/3.5)*4-windowHeight/12+windowHeight/22.15);  
  
  // textSize(windowHeight / 42);
  textSize(windowHeight / 47);
  textAlign(CENTER,TOP);
  
  
  
  fill(255);
  noStroke();
  text("Friends",(windowWidth/6)*1-(windowWidth/6)/2, (windowHeight/3.5)*4+windowHeight/17+windowHeight/22.15);
  noStroke();
  fill("rgb(150,150,150)");
  
  for(i=1;i<7;i++){
  circle((windowWidth/6)*i-(windowWidth/6)/2, (windowHeight/3.5)*4+windowHeight/22.15, planetSize);
  }
    
  noFill();
      stroke(255);
      strokeWeight(1);
      circle(((windowWidth/6)*1-(windowWidth/6)/2) - planetSize / 6, (windowHeight/3.5)*4+windowHeight/22.15, planetSize / 2);
      circle(((windowWidth/6)*1-(windowWidth/6)/2) + planetSize / 6, (windowHeight/3.5)*4+windowHeight/22.15, planetSize / 2);
  
  fill(255);
  noStroke();
  text("Family",(windowWidth/6)*2-(windowWidth/6)/2, (windowHeight/3.5)*4+windowHeight/17+windowHeight/22.15);
  
  fill(255);
      stroke(255);
      strokeWeight(3);
      line((((windowWidth/6)*2-(windowWidth/6)/2)) - planetSize / 2.3,
        (windowHeight/3.5)*4+windowHeight/22.15,
        (((windowWidth/6)*2-(windowWidth/6)/2)) + planetSize / 2.3,
        (windowHeight/3.5)*4+windowHeight/22.15);
  
  strokeWeight(2 );
      line(
        ((windowWidth/6)*2-(windowWidth/6)/2) - planetSize / 2.7,
        (windowHeight/3.5)*4 + planetSize / 4+windowHeight/22.15,
        ((windowWidth/6)*2-(windowWidth/6)/2) + planetSize / 2.7,
        (windowHeight/3.5)*4 + planetSize / 4+windowHeight/22.15
      );
      line(
        ((windowWidth/6)*2-(windowWidth/6)/2) - planetSize / 2.7,
        (windowHeight/3.5)*4 - planetSize / 4+windowHeight/22.15,
        ((windowWidth/6)*2-(windowWidth/6)/2) + planetSize / 2.7,
        (windowHeight/3.5)*4 - planetSize / 4+windowHeight/22.15
      );
      strokeWeight(1 );
      line(
        ((windowWidth/6)*2-(windowWidth/6)/2) - planetSize / 3.8,
        (windowHeight/3.5)*4 + planetSize / 2.5+windowHeight/22.15,
        ((windowWidth/6)*2-(windowWidth/6)/2) + planetSize / 3.8,
        (windowHeight/3.5)*4 + planetSize / 2.5+windowHeight/22.15
      );
      line(
        ((windowWidth/6)*2-(windowWidth/6)/2) - planetSize / 3.8,
        (windowHeight/3.5)*4 - planetSize / 2.5+windowHeight/22.15,
        ((windowWidth/6)*2-(windowWidth/6)/2) + planetSize / 3.8,
        (windowHeight/3.5)*4 - planetSize / 2.5+windowHeight/22.15
      );
  
  fill(255);
  noStroke();
  text("Romantic /\nDating",(windowWidth/6)*3-(windowWidth/6)/2, (windowHeight/3.5)*4+windowHeight/17+windowHeight/22.15);
  
  noFill();
      stroke(255);

      strokeWeight(2);
      bezier(
        (windowWidth/6)*3-(windowWidth/6)/2 - planetSize / 2,
        (windowHeight/3.5)*4+windowHeight/22.15,
        (windowWidth/6)*3-(windowWidth/6)/2 - planetSize / 8,
        (windowHeight/3.5)*4 - planetSize / 0.75+windowHeight/22.15,
        (windowWidth/6)*3-(windowWidth/6)/2 + planetSize / 8,
        (windowHeight/3.5)*4 + planetSize / 0.75+windowHeight/22.15,
        (windowWidth/6)*3-(windowWidth/6)/2 + planetSize / 2,
        (windowHeight/3.5)*4+windowHeight/22.15
      );

      strokeWeight(1);
      bezier(
        (windowWidth/6)*3-(windowWidth/6)/2 - planetSize / 2,
        (windowHeight/3.5)*4+windowHeight/22.15,
        (windowWidth/6)*3-(windowWidth/6)/2 - planetSize / 4,
        (windowHeight/3.5)*4 - planetSize / 1+windowHeight/22.15,
        (windowWidth/6)*3-(windowWidth/6)/2 + planetSize / 4,
        (windowHeight/3.5)*4 + planetSize / 1+windowHeight/22.15,
        (windowWidth/6)*3-(windowWidth/6)/2 + planetSize / 2,
        (windowHeight/3.5)*4+windowHeight/22.15
      );

      bezier(
        (windowWidth/6)*3-(windowWidth/6)/2 - planetSize / 2,
        (windowHeight/3.5)*4+windowHeight/22.15,
        (windowWidth/6)*3-(windowWidth/6)/2 - planetSize / 4,
        (windowHeight/3.5)*4 - planetSize / 2+windowHeight/22.15,
        (windowWidth/6)*3-(windowWidth/6)/2 + planetSize / 4,
        (windowHeight/3.5)*4 + planetSize / 2+windowHeight/22.15,
        (windowWidth/6)*3-(windowWidth/6)/2 + planetSize / 2,
        (windowHeight/3.5)*4+windowHeight/22.15
      );
  
  fill(255);
  noStroke();
  text("Work",(windowWidth/6)*4-(windowWidth/6)/2, (windowHeight/3.5)*4+windowHeight/17+windowHeight/22.15);
  
  stroke(255);
  noFill();
      strokeWeight(0.5);
      // fill(this.planetColour-30);
      circle((windowWidth/6)*4-(windowWidth/6)/2, (windowHeight/3.5)*4+windowHeight/22.15, planetSize / 1.25);

      // fill(this.planetColour-60);
      strokeWeight(1);
      circle((windowWidth/6)*4-(windowWidth/6)/2, (windowHeight/3.5)*4+windowHeight/22.15, planetSize / 1.8);
      // fill(this.planetColour-90);
      strokeWeight(1.75);
      circle((windowWidth/6)*4-(windowWidth/6)/2, (windowHeight/3.5)*4+windowHeight/22.15, planetSize / 4);
  
  fill(255);
  noStroke();
  text("Acquaint-\nances",(windowWidth/6)*5-(windowWidth/6)/2, (windowHeight/3.5)*4+windowHeight/17+windowHeight/22.15);
  
  noFill();
      stroke(255);
      strokeWeight(1.75);

      circle((windowWidth/6)*5-(windowWidth/6)/2 - planetSize / 2.75, (windowHeight/3.5)*4+windowHeight/22.15, planetSize / 4);
      circle((windowWidth/6)*5-(windowWidth/6)/2, (windowHeight/3.5)*4+windowHeight/22.15, planetSize / 4);
      circle((windowWidth/6)*5-(windowWidth/6)/2 + planetSize / 2.75, (windowHeight/3.5)*4+windowHeight/22.15, planetSize / 4);
      circle((windowWidth/6)*5-(windowWidth/6)/2, (windowHeight/3.5)*4 + planetSize / 2.75+windowHeight/22.15, planetSize / 4);
      circle((windowWidth/6)*5-(windowWidth/6)/2, (windowHeight/3.5)*4 - planetSize / 2.75+windowHeight/22.15, planetSize / 4);
  
  fill(255);
  noStroke();
  text("Other",(windowWidth/6)*6-(windowWidth/6)/2, (windowHeight/3.5)*4+windowHeight/17+windowHeight/22.15);
  
  
  
  //communication method
      fill(255);
  textSize(windowHeight / 32);
  textAlign(CENTER,CENTER);
  text("How did you communicate?",windowWidth/2, (windowHeight/3.5)*5-windowHeight/11+windowHeight/21.9);  
  
  noStroke();
  fill("rgb(150,150,150)");
  for(i=1;i<5;i++){
  circle((windowWidth/4)*i-(windowWidth/4)/2, (windowHeight/3.5)*5+windowHeight/21.9, planetSize);
  }
  
  // textSize(windowHeight / 42);
  textSize(windowHeight / 47);
  textAlign(CENTER,TOP);
  
  //have not adjusted text up CUZ not sure if will keep the stuff on the second line 
  fill(255);
  noStroke();
  text("Written",(windowWidth/4)*1-(windowWidth/4)/2, (windowHeight/3.5)*5+windowHeight/17+windowHeight/21.9);
  
  stroke(255);
      strokeWeight(1.5);
      line(
        (windowWidth/4)*1-(windowWidth/4)/2 + planetSize / 3.5,
        (windowHeight/3.5)*5 - planetSize / 4+windowHeight/21.9,
        (windowWidth/4)*1-(windowWidth/4)/2 + planetSize / 1.4,
        (windowHeight/3.5)*5 - planetSize / 1.6+windowHeight/21.9
      );

      line(
        (windowWidth/4)*1-(windowWidth/4)/2 + planetSize / 3.5,
        (windowHeight/3.5)*5 - planetSize / 4 + planetSize / 4+windowHeight/21.9,
        (windowWidth/4)*1-(windowWidth/4)/2 + planetSize / 1.4,
        (windowHeight/3.5)*5 - planetSize / 1.6 + planetSize / 4+windowHeight/21.9
      );

      line(
        (windowWidth/4)*1-(windowWidth/4)/2 + planetSize / 3.5,
        (windowHeight/3.5)*5 - planetSize / 4 + (planetSize / 4) * 2+windowHeight/21.9,
        (windowWidth/4)*1-(windowWidth/4)/2 + planetSize / 1.4,
        (windowHeight/3.5)*5 - planetSize / 1.6 + (planetSize / 4) * 2+windowHeight/21.9
      );
  
  fill(255);
  noStroke();
  text("Spoken",(windowWidth/4)*2-(windowWidth/4)/2, (windowHeight/3.5)*5+windowHeight/17+windowHeight/21.9);
  
  fill(255);
      noStroke();
      triangle(
        (windowWidth/4)*2-(windowWidth/4)/2 + planetSize / 1 - planetSize / 3,
        (windowHeight/3.5)*5 - planetSize / 1.2 + planetSize / 3+windowHeight/21.9,
        (windowWidth/4)*2-(windowWidth/4)/2 + planetSize / 2 - planetSize / 3,
        (windowHeight/3.5)*5 - planetSize / 2 + planetSize / 3+windowHeight/21.9,
        (windowWidth/4)*2-(windowWidth/4)/2 + planetSize / 2 - planetSize / 3,
        (windowHeight/3.5)*5 - planetSize / 0.9 + planetSize / 3+windowHeight/21.9
      );
  
  fill(255);
  noStroke();
  text("Video",(windowWidth/4)*3-(windowWidth/4)/2, (windowHeight/3.5)*5+windowHeight/17+windowHeight/21.9);
  
  noStroke();

      fill(255);

      ellipse(
        (windowWidth/4)*3-(windowWidth/4)/2 + planetSize / 1 - planetSize / 2,
        (windowHeight/3.5)*5+windowHeight/21.9,
        planetSize / 4
      );

      bezier(
        (windowWidth/4)*3-(windowWidth/4)/2 - planetSize / 1 + planetSize / 4,
        (windowHeight/3.5)*5+windowHeight/21.9,
        (windowWidth/4)*3-(windowWidth/4)/2 - planetSize / 6 + planetSize / 4,
        (windowHeight/3.5)*5 - planetSize / 1.3+windowHeight/21.9,
        (windowWidth/4)*3-(windowWidth/4)/2 - planetSize / 6 + planetSize / 4,
        (windowHeight/3.5)*5 + planetSize / 1.3+windowHeight/21.9,
        (windowWidth/4)*3-(windowWidth/4)/2 - planetSize / 1 + planetSize / 4,
        (windowHeight/3.5)*5+windowHeight/21.9
      );
  
  fill(255);
  noStroke();
  
  text("In-Person",(windowWidth/4)*4-(windowWidth/4)/2, (windowHeight/3.5)*5+windowHeight/17+windowHeight/21.9);
  
  fill(255);
      noStroke();
      for (let i = 0; i < radians(360 + 0); i += radians(360 / pointCount)) {
        let diameter = planetSize * 1.8 - planetSize / 3;
        let x = (diameter / 2) * Math.cos(i) + (windowWidth/4)*4-(windowWidth/4)/2;
        let y = (diameter / 2) * Math.sin(i) + (windowHeight/3.5)*5+windowHeight/21.9;

        ellipse(x, y, planetSize / 4.5);
        angle = 0;
      }
  
  
      fill(255);
  textSize(windowHeight / 32);
  textAlign(CENTER,CENTER);
  text("Around how long was your interaction?",windowWidth/2, (windowHeight/3.5)*6-windowHeight/12.5+windowHeight/80);  
  
  // textSize(windowHeight / 42);
  textSize(windowHeight / 47);
  textAlign(CENTER,TOP);
  
  fill(255);
  noStroke();
  text("3 h+",(windowWidth/6)*1-(windowWidth/6)/2, (windowHeight/3.5)*6+windowHeight/17+windowHeight/80);
  fill("rgb(150,150,150)");
  circle((windowWidth/6)*1-(windowWidth/6)/2, (windowHeight/3.5)*6+windowHeight/80, windowWidth / 10.5);
  
  fill(255);
  noStroke();
  text("1 - 3 h",(windowWidth/6)*2-(windowWidth/6)/2, (windowHeight/3.5)*6+windowHeight/17+windowHeight/80);
  fill("rgb(150,150,150)");
  circle((windowWidth/6)*2-(windowWidth/6)/2, (windowHeight/3.5)*6+windowHeight/80, windowWidth / 14);
  
  fill(255);
  noStroke();
  text("30 min\n- 1 h",(windowWidth/6)*3-(windowWidth/6)/2, (windowHeight/3.5)*6+windowHeight/17+windowHeight/80);
  fill("rgb(150,150,150)");
  circle((windowWidth/6)*3-(windowWidth/6)/2, (windowHeight/3.5)*6+windowHeight/80, windowWidth / 18);
  
  fill(255);
  noStroke();
  text("10 min\n- 30 min",(windowWidth/6)*4-(windowWidth/6)/2, (windowHeight/3.5)*6+windowHeight/17+windowHeight/80);
  fill("rgb(150,150,150)");
  circle((windowWidth/6)*4-(windowWidth/6)/2, (windowHeight/3.5)*6+windowHeight/80, windowWidth / 23);
  
  fill(255);
  noStroke();
  text("5 min\n- 10 min",(windowWidth/6)*5-(windowWidth/6)/2, (windowHeight/3.5)*6+windowHeight/17+windowHeight/80);
  fill("rgb(150,150,150)");
  circle((windowWidth/6)*5-(windowWidth/6)/2, (windowHeight/3.5)*6+windowHeight/80, windowWidth / 32);
  
  fill(255);
  noStroke();
  text("few min\nor sec",(windowWidth/6)*6-(windowWidth/6)/2, (windowHeight/3.5)*6+windowHeight/17+windowHeight/80);
  fill("rgb(150,150,150)");
  circle((windowWidth/6)*6-(windowWidth/6)/2, (windowHeight/3.5)*6+windowHeight/80, windowWidth / 44);
  
  
  
  
  
    fill(255);
  textSize(windowHeight / 32);
  textAlign(CENTER,CENTER);
  text("How did you feel about the interaction?",windowWidth/2, (windowHeight/3.5)*7-windowHeight/12+windowHeight/120);  
  
  noStroke();

  for(i=1;i<6;i++){
    
    
  if (i == 1) {
      fill("#AFE6FF");
    } else if (i == 2) {
      fill("#12A4E6");
    } else if (i == 3) {
      fill("rgb(150,150,150)");
    } else if (i == 4) {
      fill("#FF8181");
    } else if (i == 5) {
      fill("#990202");
    }
    
  circle((windowWidth/5)*i-(windowWidth/5)/2, (windowHeight/3.5)*7+windowHeight/120, planetSize);
  }
  
  // textSize(windowHeight / 42);
  textSize(windowHeight / 47);
  textAlign(CENTER,TOP);
  
  fill(255);
  text("Very Good",(windowWidth/5)*1-(windowWidth/5)/2, (windowHeight/3.5)*7+windowHeight/13+windowHeight/120);
  
  fill(255);
  text("Good",(windowWidth/5)*2-(windowWidth/5)/2, (windowHeight/3.5)*7+windowHeight/13+windowHeight/120);

  
  fill(255);
  text("Neutral",(windowWidth/5)*3-(windowWidth/5)/2, (windowHeight/3.5)*7+windowHeight/13+windowHeight/120);

  
  fill(255);
  text("Bad",(windowWidth/5)*4-(windowWidth/5)/2, (windowHeight/3.5)*7+windowHeight/13+windowHeight/120);

  fill(255);
  text("Very Bad",(windowWidth/5)*5-(windowWidth/5)/2, (windowHeight/3.5)*7+windowHeight/13+windowHeight/120);

  
  
   
  
//   fill(255);
//   noStroke();
//   text("hello",(windowWidth/5)*1-(windowWidth/5)/2, (windowHeight/3.5)*4+windowHeight/17);
  
//   fill(255);
//   noStroke();
//   text("hello",(windowWidth/5)*2-(windowWidth/5)/2, (windowHeight/3.5)*4+windowHeight/17);
  
//   fill(255);
//   noStroke();
//   text("hello",(windowWidth/5)*3-(windowWidth/5)/2, (windowHeight/3.5)*4+windowHeight/17);
  
//   fill(255);
//   noStroke();
//   text("hello",(windowWidth/5)*4-(windowWidth/5)/2, (windowHeight/3.5)*4+windowHeight/17);
  
//   fill(255);
//   noStroke();
//   text("hello",(windowWidth/5)*5-(windowWidth/5)/2, (windowHeight/3.5)*4+windowHeight/17);
  

}
