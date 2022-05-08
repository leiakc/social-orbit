//legend - instance mode

//variables-----------------------------------------------------------------------------------

var legend = function (g){

g.sunWidth = 0; //width of the sun

g.ringSpacerL = 0; //amount of space between each ring (solar system planet ring)

g.angle = 0; //helps w planet rotation around sun

//vars for stars
g.x1 = []; //array for the x co-ordinate of the stars
g.y1 = []; //array for the y co-ordinate of the stars

g.pointCount = 9; //how many dots for the in-person communication method data visualization

g.planetSize = 0;

//setup-------------------------------------------------------------------------------------
g.setup = function() {
  //creating the canvas
  // myCanvasLegend = g.createCanvas(theWidth, theHeight*2.85);
  // myCanvasLegend.parent("myCanvasLegendHTML");
  g.createCanvas(theWidth, theHeight*2.85);
  
  g.textFont("Helvetica");
  // g.textAlign(g.CENTER);
  g.textStyle(g.NORMAL);
  
  g.planetSize = theWidth/12;

// }

// //draw--------------------------------------------------------------------------------------
// g.draw = function() {
  g.background(0);
  
  g.sunWidth = theWidth / 7.5;
  
  ///////////////////////////////////////////////////////////////
  
  //this goes on the bottom so it goes first in the code
  
  g.noFill();
  g.stroke(255)
  g.strokeWeight(strokeModifier*1);

  //rings
  
  g.ringSpacerL = ((((theWidth/6)*2-(theWidth/6)/2) - ((theWidth/6)*1-(theWidth/6)/2))*2) ;
  
  //closest to sun
  g.noFill();
  g.stroke(255);
  
  g.ellipse((theWidth/6)*1-(theWidth/6)/2, (theHeight/3.5)*8, theWidth-(g.ringSpacerL)*2);
  
  g.ellipse((theWidth/6)*1-(theWidth/6)/2, (theHeight/3.5)*8, theWidth-(g.ringSpacerL));
  
  g.ellipse((theWidth/6)*1-(theWidth/6)/2, (theHeight/3.5)*8, theWidth);
  
  //furthest from sun
  g.ellipse((theWidth/6)*1-(theWidth/6)/2, (theHeight/3.5)*8, theWidth+(g.ringSpacerL));
  
  //black boxes that hide most of the rings
  g.noStroke();
  g.fill(0);
  // g.rect(0, ((theHeight/3.5)*6), theWidth, theHeight/2.25);
  
  g.beginShape();
  g.vertex(0, 0); //g.TOP left 
  g.vertex(theWidth,0); //g.TOP right 
  g.vertex(theWidth,((theHeight/3.5)*6)+theHeight/1.95); // bottom right
  g.vertex(0, ((theHeight/3.5)*6)+theHeight/1.95);
  g.endShape(g.CLOSE);
  // g.rect(0, ((theHeight/3.5)*8)+(theHeight/17), theWidth, theHeight/2.25);
  g.rect((theWidth/6)*1, ((theHeight/3.5)*8)+(theHeight/17), theWidth, theHeight/22);
  
  //writing
   g.fill(255);
  g.textSize(theHeight / 36);
  g.textAlign(g.CENTER,g.CENTER);
  
  //What time of day was the interaction?/////////////////////////////////////////////////////////// 
  g.text("What time of day was the interaction?",theWidth/2, (theHeight/3.5)*8-theHeight/10); 
  
  ////////////////legend title////////////////////////////////////////////////////////////////////
  g.noStroke();
  
  g.fill(255);
  g.textStyle(g.BOLD);
  g.textSize(theHeight / 25);
  g.textAlign(g.CENTER,g.CENTER);
  g.textFont('Space Mono');
  g.text("Legend",theWidth/2, (theHeight/3.5)-theHeight/5); //5.5
  g.textStyle(g.NORMAL);
  
  g.textFont('Helvetica');  
  ///////////////////////////////////////////////////////////////////////////////////////////////
  //sun and planets
    g.noStroke();
  for(i=1;i<7;i++){
    g.fill("rgb(150,150,150)");
    if(i!==6){
  g.circle((theWidth/6)*i-(theWidth/6)/2, (theHeight/3.5)*8, g.planetSize);
    } else {
      g.circle((theWidth/6)*i-(theWidth/6)/2-(theWidth/200), (theHeight/3.5)*8, g.planetSize);
    }
    
    if(i==1){
      g.fill("#EBD300");
    g.noStroke();
    g.circle((theWidth/6)*i-(theWidth/6)/2, (theHeight/3.5)*8, g.sunWidth);
    }
    
    if(i==6){
      //draws a ring around the planet if the social interaction happens throughout the day
      g.noFill();
     g.stroke(255);
      g.strokeWeight(strokeModifier*1);
      g.circle((theWidth/6)*i-(theWidth/6)/2-(theWidth/200),
        (theHeight/3.5)*8,
        g.planetSize + g.planetSize
      );
      g.noStroke();
    }
  }
  
  g.textSize(theHeight / 50);
  g.textAlign(g.CENTER,g.TOP);
  
  g.fill(255);
  g.noStroke();
  g.text("Morning",(theWidth/6)*2-(theWidth/6)/2, (theHeight/3.5)*8+theHeight/14);
  g.text("Afternoon",(theWidth/6)*3-(theWidth/6)/2, (theHeight/3.5)*8+theHeight/14);
  g.text("Evening",(theWidth/6)*4-(theWidth/6)/2, (theHeight/3.5)*8+theHeight/14);
  g.text("Night",(theWidth/6)*5-(theWidth/6)/2, (theHeight/3.5)*8+theHeight/14);
  g.text("Throughout\nthe Day",(theWidth/6)*6-(theWidth/6)/2-theWidth/100, (theHeight/3.5)*8+theHeight/14);
  
  /////////////////////////////////////////////////////////////////
             
  //How are you today?///////////////////////////////////////////////////////////////////////////
  g.fill(255);
  g.textSize(theHeight / 36);
  g.textAlign(g.CENTER,g.CENTER);
  g.text("How are you today?",theWidth/2, (theHeight/3.5)-theHeight/11-theHeight/45.4);
  
  //dif suns
  //drawing sun
  g.textSize(theHeight / 50);
  g.textAlign(g.CENTER,g.TOP);
  g.fill(255);
  g.text("Very Good",(theWidth/5)*1-(theWidth/5)/2, (theHeight/3.5)+theHeight/13-theHeight/45.4);
    g.fill("#FFF6A3");
    g.noStroke();
    g.circle((theWidth/5)*1-(theWidth/5)/2, (theHeight/3.5)-theHeight/45.4, g.sunWidth);
  
  g.fill(255);
  g.text("Good",(theWidth/5)*2-(theWidth/5)/2, (theHeight/3.5)+theHeight/13-theHeight/45.4);
  g.fill("#FFEB44");
    g.noStroke();
    g.circle((theWidth/5)*2-(theWidth/5)/2, (theHeight/3.5)-theHeight/45.4, g.sunWidth);
  
  g.fill(255);
  g.text("Neutral",(theWidth/5)*3-(theWidth/5)/2, (theHeight/3.5)+theHeight/13-theHeight/45.4);
  g.fill("#EBD300");
    g.noStroke();
    g.circle((theWidth/5)*3-(theWidth/5)/2, (theHeight/3.5)-theHeight/45.4, g.sunWidth);
  
  g.fill(255);
  g.text("Bad",(theWidth/5)*4-(theWidth/5)/2, (theHeight/3.5)+theHeight/13-theHeight/45.4);
  g.fill("#BFAC00");
    g.noStroke();
    g.circle((theWidth/5)*4-(theWidth/5)/2, (theHeight/3.5)-theHeight/45.4, g.sunWidth);
  
  g.fill(255);
  g.text("Very Bad",(theWidth/5)*5-(theWidth/5)/2, (theHeight/3.5)+theHeight/13-theHeight/45.4);
  g.fill("#857701");
    g.noStroke();
    g.circle((theWidth/5)*5-(theWidth/5)/2, (theHeight/3.5)-theHeight/45.4, g.sunWidth);

  //sun decorations
  //How did you feel about today's social interactions?/////////////////////////////////////////////
  g.fill(255);
  g.textSize(theHeight / 36);
  g.textAlign(g.CENTER,g.CENTER);
  g.text("How did you feel about \ntoday's social interactions?",theWidth/2, (theHeight/3.5)*2-theHeight/8.25-theHeight/208);
  
  g.textSize(theHeight / 50);
  g.textAlign(g.CENTER,g.TOP);
  
  g.fill(255);
  g.text("Very Good",(theWidth/5)*1-(theWidth/5)/2, (theHeight/3.5)*2+theHeight/13-theHeight/208);
  g.fill("#DCDCDC");
    g.noStroke();
    g.circle((theWidth/5)*1-(theWidth/5)/2, (theHeight/3.5)*2-theHeight/208, g.sunWidth);

  g.x2 = (theWidth/5)*1-(theWidth/5)/2;
  g.y2 = (theHeight/3.5)*2-theHeight/208;
  g.sWidth = theWidth/10;
  // g.sunWidth = theWidth / 7.5;
  // if (this.si_feeling == 1) {
      
     g.stroke("#E49300");
      g.strokeWeight(strokeModifier*3);
      g.circle(g.x2, g.y2, theWidth / 11);
      
     g.stroke(255);
      g.strokeWeight(strokeModifier*1);
      g.circle(g.x2, g.y2, theWidth / 11);
      
     g.stroke("#E49300");
      g.strokeWeight(strokeModifier*3);
      g.circle(g.x2, g.y2, theWidth / 18);
      
     g.stroke(255);
      g.strokeWeight(strokeModifier*1);
      g.circle(g.x2, g.y2, theWidth / 18);
      
      g.noFill();

     g.stroke("#E49300");
      g.strokeWeight(strokeModifier*4.5);
      g.circle(
       g.x2 + g.sWidth / 4,
       g.y2 + g.sWidth / 4,
        theWidth / 15
      );
      
     g.stroke(255);
      g.strokeWeight(strokeModifier*2.5);
      g.circle(
       g.x2 + g.sWidth / 4,
       g.y2 + g.sWidth / 4,
        theWidth / 15
      );
        
     g.stroke("#E49300");
      g.strokeWeight(strokeModifier*3.5);
      g.circle(
       g.x2 - g.sWidth / 4,
       g.y2 - g.sWidth / 3,
        theWidth / 20
      );
      
     g.stroke(255);
      g.strokeWeight(strokeModifier*1.5);
      g.circle(
       g.x2 - g.sWidth / 4,
       g.y2 - g.sWidth / 3,
        theWidth / 20
      );
  
  g.fill(255);
  g.noStroke();
  g.text("Good",(theWidth/5)*2-(theWidth/5)/2, (theHeight/3.5)*2+theHeight/13-theHeight/208);
  g.fill("#DCDCDC");
    g.circle((theWidth/5)*2-(theWidth/5)/2, (theHeight/3.5)*2-theHeight/208, g.sunWidth);
      
      g.noFill();
     g.stroke("#E49300");
      g.strokeWeight(strokeModifier*4.5);
      g.circle(
        (theWidth/5)*2-(theWidth/5)/2 + g.sWidth / 4,
       g.y2 + g.sWidth / 4,
        theWidth / 15
      );
      g.strokeWeight(strokeModifier*3.5);
      g.circle(
        (theWidth/5)*2-(theWidth/5)/2 - g.sWidth / 4,
       g.y2 - g.sWidth / 3,
        theWidth / 20
      );
      
     g.stroke(255);
      g.strokeWeight(strokeModifier*2.5);
      g.circle(
        (theWidth/5)*2-(theWidth/5)/2 + g.sWidth / 4,
       g.y2 + g.sWidth / 4,
        theWidth / 15
      );
      g.strokeWeight(strokeModifier*1.5);
      g.circle(
        (theWidth/5)*2-(theWidth/5)/2 - g.sWidth / 4,
       g.y2 - g.sWidth / 3,
        theWidth / 20
      );
  
   g.fill(255);
  g.noStroke();
  g.text("Neutral",(theWidth/5)*3-(theWidth/5)/2, (theHeight/3.5)*2+theHeight/13-theHeight/208);
  g.fill("#DCDCDC");
    g.circle((theWidth/5)*3-(theWidth/5)/2, (theHeight/3.5)*2-theHeight/208, g.sunWidth);

      g.noStroke();
      g.fill(150, 150, 150, 150);
      g.circle((theWidth/5)*3-(theWidth/5)/2 + g.sWidth / 4, g.y2, theWidth / 27.5);
  
  g.fill(255);
  g.noStroke();
  g.text("Bad",(theWidth/5)*4-(theWidth/5)/2, (theHeight/3.5)*2+theHeight/13-theHeight/208);
  g.fill("#DCDCDC");
    g.circle((theWidth/5)*4-(theWidth/5)/2, (theHeight/3.5)*2-theHeight/208, g.sunWidth);
  
     g.stroke(0);
      g.strokeWeight(strokeModifier*2);
      g.line(
        (theWidth/5)*4-(theWidth/5)/2 - theWidth / 20,
       g.y2 - theWidth / 20,
        (theWidth/5)*4-(theWidth/5)/2 + theWidth / 20,
       g.y2 + theWidth / 20
      );
  
    g.fill(255);
  g.noStroke();
  g.text("Very Bad",(theWidth/5)*5-(theWidth/5)/2, (theHeight/3.5)*2+theHeight/13-theHeight/208);
  g.fill("#DCDCDC");
    g.circle((theWidth/5)*5-(theWidth/5)/2, (theHeight/3.5)*2-theHeight/208, g.sunWidth);
  
     g.stroke(0);
      g.strokeWeight(strokeModifier*2);
      g.line(
        (theWidth/5)*5-(theWidth/5)/2 - theWidth / 20,
       g.y2 - theWidth / 20,
        (theWidth/5)*5-(theWidth/5)/2 + theWidth / 20,
       g.y2 + theWidth / 20
      );

      g.strokeWeight(strokeModifier*4);
      g.line(
        (theWidth/5)*5-(theWidth/5)/2 + theWidth / 40 - g.sWidth / 5,
       g.y2 - theWidth / 40 - g.sWidth / 5,
        (theWidth/5)*5-(theWidth/5)/2 - theWidth / 40 - g.sWidth / 5,
       g.y2 + theWidth / 40 - g.sWidth / 5
      );

      g.strokeWeight(strokeModifier*6);
      g.line(
        (theWidth/5)*5-(theWidth/5)/2 + theWidth / 30,
       g.y2 - theWidth / 30,
        (theWidth/5)*5-(theWidth/5)/2 - theWidth / 30,
       g.y2 + theWidth / 30
      );

      g.strokeWeight(strokeModifier*4);
      g.line(
        (theWidth/5)*5-(theWidth/5)/2 + theWidth / 40 + g.sWidth / 5,
       g.y2 - theWidth / 40 + g.sWidth / 5,
        (theWidth/5)*5-(theWidth/5)/2 - theWidth / 40 + g.sWidth / 5,
       g.y2 + theWidth / 40 + g.sWidth / 5
      );
  
  //stars
  //How satisfied are you with today's social interactions?///////////////////////////////////////////
  g.fill(255);
  g.textSize(theHeight / 36);
  g.textAlign(g.CENTER,g.CENTER);
  g.text("How satisfied are you with \ntoday's social interactions?",theWidth/2, (theHeight/3.5)*3-theHeight/8.3+theHeight/33);  
  
  g.textSize(theHeight / 50);
  g.textAlign(g.CENTER,g.TOP);
  
  g.fill(255);
  g.noStroke();
  g.text("Very\nSatisfied",(theWidth/5)*1-(theWidth/5)/2, (theHeight/3.5)*3+theHeight/13+theHeight/33);

  g.fill(255, 255, 255, 50);
  g.circle((theWidth/5)*1-(theWidth/5)/2+theWidth/20,(
          theHeight/3.5)*3+theHeight/22.15+theHeight/33, 
         (theWidth/50)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.circle((theWidth/5)*1-(theWidth/5)/2+theWidth/20,(
          theHeight/3.5)*3+theHeight/22.15+theHeight/33, 
         (theWidth/50)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.circle((theWidth/5)*1-(theWidth/5)/2+theWidth/20,(
          theHeight/3.5)*3+theHeight/22.15+theHeight/33, 
         (theWidth/50)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.circle((theWidth/5)*1-(theWidth/5)/2, (theHeight/3.5)*3+theHeight/33, (theWidth/75)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.circle((theWidth/5)*1-(theWidth/5)/2, (theHeight/3.5)*3+theHeight/33, (theWidth/75)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.circle((theWidth/5)*1-(theWidth/5)/2, (theHeight/3.5)*3+theHeight/33, (theWidth/75)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.circle((theWidth/5)*1-(theWidth/5)/2-theWidth/20, 
        (theHeight/3.5)*3-theHeight/45+theHeight/33, 
         (theWidth/120)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.circle((theWidth/5)*1-(theWidth/5)/2-theWidth/20, 
        (theHeight/3.5)*3-theHeight/45+theHeight/33, 
         (theWidth/120)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.circle((theWidth/5)*1-(theWidth/5)/2-theWidth/20, 
        (theHeight/3.5)*3-theHeight/45+theHeight/33, 
         (theWidth/120)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.circle((theWidth/5)*1-(theWidth/5)/2-theWidth/32, 
         (theHeight/3.5)*3+theHeight/45+theHeight/33, 
         (theWidth/220)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.circle((theWidth/5)*1-(theWidth/5)/2-theWidth/32, 
         (theHeight/3.5)*3+theHeight/45+theHeight/33, 
         (theWidth/220)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.circle((theWidth/5)*1-(theWidth/5)/2-theWidth/32, 
         (theHeight/3.5)*3+theHeight/45+theHeight/33, 
         (theWidth/220)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.circle((theWidth/5)*1-(theWidth/5)/2+theWidth/70, 
         (theHeight/3.5)*3-theHeight/25+theHeight/33, 
         (theWidth/90)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.circle((theWidth/5)*1-(theWidth/5)/2+theWidth/70, 
         (theHeight/3.5)*3-theHeight/25+theHeight/33, 
         (theWidth/90)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.circle((theWidth/5)*1-(theWidth/5)/2+theWidth/70, 
         (theHeight/3.5)*3-theHeight/25+theHeight/33, 
         (theWidth/90)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.circle((theWidth/5)*1-(theWidth/5)/2+theWidth/20, 
         (theHeight/3.5)*3-theHeight/50+theHeight/33, 
         (theWidth/90)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.circle((theWidth/5)*1-(theWidth/5)/2+theWidth/20, 
         (theHeight/3.5)*3-theHeight/50+theHeight/33, 
         (theWidth/90)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.circle((theWidth/5)*1-(theWidth/5)/2+theWidth/20, 
         (theHeight/3.5)*3-theHeight/50+theHeight/33, 
         (theWidth/90)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.circle((theWidth/5)*1-(theWidth/5)/2-theWidth/18, 
         (theHeight/3.5)*3+theHeight/24+theHeight/33, 
         (theWidth/80)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.circle((theWidth/5)*1-(theWidth/5)/2-theWidth/18, 
         (theHeight/3.5)*3+theHeight/24+theHeight/33, 
         (theWidth/80)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.circle((theWidth/5)*1-(theWidth/5)/2-theWidth/18, 
         (theHeight/3.5)*3+theHeight/24+theHeight/33, 
         (theWidth/80)+ 3);
    
  g.fill(255);
  g.noStroke();
  g.text("Satisfied",(theWidth/5)*2-(theWidth/5)/2, (theHeight/3.5)*3+theHeight/13+theHeight/33); 

  g.circle((theWidth/5)*2-(theWidth/5)/2+theWidth/20,(
          theHeight/3.5)*3+theHeight/22.15+theHeight/33, 
         (theWidth/50)+ 3);

  g.circle((theWidth/5)*2-(theWidth/5)/2, (theHeight/3.5)*3, (theWidth/75)+ 3);  

  g.circle((theWidth/5)*2-(theWidth/5)/2-theWidth/20, 
        (theHeight/3.5)*3-theHeight/45+theHeight/33, 
         (theWidth/120)+ 3);

  g.circle((theWidth/5)*2-(theWidth/5)/2-theWidth/32, 
         (theHeight/3.5)*3+theHeight/45+theHeight/33, 
         (theWidth/220)+ 3);
  
  g.circle((theWidth/5)*2-(theWidth/5)/2+theWidth/70, 
         (theHeight/3.5)*3-theHeight/25+theHeight/33, 
         (theWidth/90)+ 3);

  g.circle((theWidth/5)*2-(theWidth/5)/2+theWidth/20, 
         (theHeight/3.5)*3-theHeight/50+theHeight/33, 
         (theWidth/90)+ 3);

  g.circle((theWidth/5)*2-(theWidth/5)/2-theWidth/18, 
         (theHeight/3.5)*3+theHeight/24+theHeight/33, 
         (theWidth/80)+ 3);
  
  g.fill(255);
  g.noStroke();
  g.text("Neutral",(theWidth/5)*3-(theWidth/5)/2, (theHeight/3.5)*3+theHeight/13+theHeight/33);
  
  g.fill(255);
       g.stroke(255);
        g.strokeWeight(strokeModifier*3.5);
  
  g.point((theWidth/5)*3-(theWidth/5)/2+theWidth/20,(
          theHeight/3.5)*3+theHeight/22.15+theHeight/33);

  g.point((theWidth/5)*3-(theWidth/5)/2, (theHeight/3.5)*3+theHeight/33);
  
  g.point((theWidth/5)*3-(theWidth/5)/2-theWidth/20, 
        (theHeight/3.5)*3-theHeight/45+theHeight/33);

  g.point((theWidth/5)*3-(theWidth/5)/2-theWidth/32, 
         (theHeight/3.5)*3+theHeight/45+theHeight/33);
  
  g.point((theWidth/5)*3-(theWidth/5)/2+theWidth/70, 
         (theHeight/3.5)*3-theHeight/25+theHeight/33);
  
  g.point((theWidth/5)*3-(theWidth/5)/2+theWidth/20, 
         (theHeight/3.5)*3-theHeight/50+theHeight/33);

  g.point((theWidth/5)*3-(theWidth/5)/2-theWidth/18, 
         (theHeight/3.5)*3+theHeight/24+theHeight/33);
  
  g.fill(255);
  g.noStroke();
  g.text("Dissatisfied",(theWidth/5)*4-(theWidth/5)/2, (theHeight/3.5)*3+theHeight/13+theHeight/33);
  
   g.square((theWidth/5)*4-(theWidth/5)/2+theWidth/20,(
          theHeight/3.5)*3+theHeight/22.15+theHeight/33, 
         (theWidth/50)+ 3);

  g.square((theWidth/5)*4-(theWidth/5)/2, (theHeight/3.5)*3+theHeight/33, (theWidth/75)+ 3);
  

  g.square((theWidth/5)*4-(theWidth/5)/2-theWidth/20, 
        (theHeight/3.5)*3-theHeight/45+theHeight/33, 
         (theWidth/120)+ 3);


  g.square((theWidth/5)*4-(theWidth/5)/2-theWidth/32, 
         (theHeight/3.5)*3+theHeight/45+theHeight/33, 
         (theWidth/220)+ 3);
  

  g.square((theWidth/5)*4-(theWidth/5)/2+theWidth/70, 
         (theHeight/3.5)*3-theHeight/25+theHeight/33, 
         (theWidth/90)+ 3);
  

  g.square((theWidth/5)*4-(theWidth/5)/2+theWidth/20, 
         (theHeight/3.5)*3-theHeight/50+theHeight/33, 
         (theWidth/90)+ 3);

  g.square((theWidth/5)*4-(theWidth/5)/2-theWidth/18, 
         (theHeight/3.5)*3+theHeight/24+theHeight/33, 
         (theWidth/80)+ 3);
  
  g.fill(255);
  g.noStroke();
  g.text("Very\nDissatisfied",(theWidth/5)*5-(theWidth/5)/2, (theHeight/3.5)*3+theHeight/13+theHeight/33);
  
   g.fill(255, 255, 255, 50);
  g.square((theWidth/5)*5-(theWidth/5)/2+theWidth/20,(
          theHeight/3.5)*3+theHeight/22.15+theHeight/33, 
         (theWidth/50)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.square((theWidth/5)*5-(theWidth/5)/2+theWidth/20,(
          theHeight/3.5)*3+theHeight/22.15+theHeight/33, 
         (theWidth/50)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.square((theWidth/5)*5-(theWidth/5)/2+theWidth/20,(
          theHeight/3.5)*3+theHeight/22.15+theHeight/33, 
         (theWidth/50)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.square((theWidth/5)*5-(theWidth/5)/2, (theHeight/3.5)*3+theHeight/33, (theWidth/75)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.square((theWidth/5)*5-(theWidth/5)/2, (theHeight/3.5)*3+theHeight/33, (theWidth/75)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.square((theWidth/5)*5-(theWidth/5)/2, (theHeight/3.5)*3+theHeight/33, (theWidth/75)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.square((theWidth/5)*5-(theWidth/5)/2-theWidth/20, 
        (theHeight/3.5)*3-theHeight/45+theHeight/33, 
         (theWidth/120)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.square((theWidth/5)*5-(theWidth/5)/2-theWidth/20, 
        (theHeight/3.5)*3-theHeight/45+theHeight/33, 
         (theWidth/120)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.square((theWidth/5)*5-(theWidth/5)/2-theWidth/20, 
        (theHeight/3.5)*3-theHeight/45+theHeight/33, 
         (theWidth/120)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.square((theWidth/5)*5-(theWidth/5)/2-theWidth/32, 
         (theHeight/3.5)*3+theHeight/45+theHeight/33, 
         (theWidth/220)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.square((theWidth/5)*5-(theWidth/5)/2-theWidth/32, 
         (theHeight/3.5)*3+theHeight/45+theHeight/33, 
         (theWidth/220)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.square((theWidth/5)*5-(theWidth/5)/2-theWidth/32, 
         (theHeight/3.5)*3+theHeight/45+theHeight/33, 
         (theWidth/220)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.square((theWidth/5)*5-(theWidth/5)/2+theWidth/70, 
         (theHeight/3.5)*3-theHeight/25+theHeight/33, 
         (theWidth/90)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.square((theWidth/5)*5-(theWidth/5)/2+theWidth/70, 
         (theHeight/3.5)*3-theHeight/25+theHeight/33, 
         (theWidth/90)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.square((theWidth/5)*5-(theWidth/5)/2+theWidth/70, 
         (theHeight/3.5)*3-theHeight/25+theHeight/33, 
         (theWidth/90)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.square((theWidth/5)*5-(theWidth/5)/2+theWidth/20, 
         (theHeight/3.5)*3-theHeight/50+theHeight/33, 
         (theWidth/90)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.square((theWidth/5)*5-(theWidth/5)/2+theWidth/20, 
         (theHeight/3.5)*3-theHeight/50+theHeight/33, 
         (theWidth/90)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.square((theWidth/5)*5-(theWidth/5)/2+theWidth/20, 
         (theHeight/3.5)*3-theHeight/50+theHeight/33, 
         (theWidth/90)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.square((theWidth/5)*5-(theWidth/5)/2-theWidth/18, 
         (theHeight/3.5)*3+theHeight/24+theHeight/33, 
         (theWidth/80)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.square((theWidth/5)*5-(theWidth/5)/2-theWidth/18, 
         (theHeight/3.5)*3+theHeight/24+theHeight/33, 
         (theWidth/80)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.square((theWidth/5)*5-(theWidth/5)/2-theWidth/18, 
         (theHeight/3.5)*3+theHeight/24+theHeight/33, 
         (theWidth/80)+ 3);
  
  //planet stuff
  //relationship 
  //What kind of relationship do you have?///////////////////////////////////////////////////////////
  g.fill(255);
  g.textSize(theHeight / 36);
  g.textAlign(g.CENTER,g.CENTER);
  g.text("What kind of relationship do you have?",theWidth/2, (theHeight/3.5)*4-theHeight/12+theHeight/22.15);  
  
  g.textSize(theHeight / 50);
  g.textAlign(g.CENTER,g.TOP);

  g.fill(255);
  g.noStroke();
  g.text("Friends",(theWidth/6)*1-(theWidth/6)/2, (theHeight/3.5)*4+theHeight/17+theHeight/22.15);
  g.noStroke();
  g.fill("rgb(150,150,150)");
  
  for(i=1;i<7;i++){
  g.circle((theWidth/6)*i-(theWidth/6)/2, (theHeight/3.5)*4+theHeight/22.15, g.planetSize);
  }
    
  g.noFill();
     g.stroke(255);
      g.strokeWeight(strokeModifier*1);
      g.circle(((theWidth/6)*1-(theWidth/6)/2) - g.planetSize / 6, (theHeight/3.5)*4+theHeight/22.15, g.planetSize / 2);
      g.circle(((theWidth/6)*1-(theWidth/6)/2) + g.planetSize / 6, (theHeight/3.5)*4+theHeight/22.15, g.planetSize / 2);
  
  g.fill(255);
  g.noStroke();
  g.text("Family",(theWidth/6)*2-(theWidth/6)/2, (theHeight/3.5)*4+theHeight/17+theHeight/22.15);
  
  g.fill(255);
     g.stroke(255);
      g.strokeWeight(strokeModifier*3);
      g.line((((theWidth/6)*2-(theWidth/6)/2)) - g.planetSize / 2.3,
        (theHeight/3.5)*4+theHeight/22.15,
        (((theWidth/6)*2-(theWidth/6)/2)) + g.planetSize / 2.3,
        (theHeight/3.5)*4+theHeight/22.15);
  
  g.strokeWeight(strokeModifier*2 );
      g.line(
        ((theWidth/6)*2-(theWidth/6)/2) - g.planetSize / 2.7,
        (theHeight/3.5)*4 + g.planetSize / 4+theHeight/22.15,
        ((theWidth/6)*2-(theWidth/6)/2) + g.planetSize / 2.7,
        (theHeight/3.5)*4 + g.planetSize / 4+theHeight/22.15
      );
      g.line(
        ((theWidth/6)*2-(theWidth/6)/2) - g.planetSize / 2.7,
        (theHeight/3.5)*4 - g.planetSize / 4+theHeight/22.15,
        ((theWidth/6)*2-(theWidth/6)/2) + g.planetSize / 2.7,
        (theHeight/3.5)*4 - g.planetSize / 4+theHeight/22.15
      );
      g.strokeWeight(strokeModifier*1 );
      g.line(
        ((theWidth/6)*2-(theWidth/6)/2) - g.planetSize / 3.8,
        (theHeight/3.5)*4 + g.planetSize / 2.5+theHeight/22.15,
        ((theWidth/6)*2-(theWidth/6)/2) + g.planetSize / 3.8,
        (theHeight/3.5)*4 + g.planetSize / 2.5+theHeight/22.15
      );
      g.line(
        ((theWidth/6)*2-(theWidth/6)/2) - g.planetSize / 3.8,
        (theHeight/3.5)*4 - g.planetSize / 2.5+theHeight/22.15,
        ((theWidth/6)*2-(theWidth/6)/2) + g.planetSize / 3.8,
        (theHeight/3.5)*4 - g.planetSize / 2.5+theHeight/22.15
      );
  
  g.fill(255);
  g.noStroke();
  g.text("Romantic /\nDating",(theWidth/6)*3-(theWidth/6)/2, (theHeight/3.5)*4+theHeight/17+theHeight/22.15);
  
  g.noFill();
     g.stroke(255);

      g.strokeWeight(strokeModifier*2);
      g.bezier(
        (theWidth/6)*3-(theWidth/6)/2 - g.planetSize / 2,
        (theHeight/3.5)*4+theHeight/22.15,
        (theWidth/6)*3-(theWidth/6)/2 - g.planetSize / 8,
        (theHeight/3.5)*4 - g.planetSize / 0.75+theHeight/22.15,
        (theWidth/6)*3-(theWidth/6)/2 + g.planetSize / 8,
        (theHeight/3.5)*4 + g.planetSize / 0.75+theHeight/22.15,
        (theWidth/6)*3-(theWidth/6)/2 + g.planetSize / 2,
        (theHeight/3.5)*4+theHeight/22.15
      );

      g.strokeWeight(strokeModifier*1);
      g.bezier(
        (theWidth/6)*3-(theWidth/6)/2 - g.planetSize / 2,
        (theHeight/3.5)*4+theHeight/22.15,
        (theWidth/6)*3-(theWidth/6)/2 - g.planetSize / 4,
        (theHeight/3.5)*4 - g.planetSize / 1+theHeight/22.15,
        (theWidth/6)*3-(theWidth/6)/2 + g.planetSize / 4,
        (theHeight/3.5)*4 + g.planetSize / 1+theHeight/22.15,
        (theWidth/6)*3-(theWidth/6)/2 + g.planetSize / 2,
        (theHeight/3.5)*4+theHeight/22.15
      );

      g.bezier(
        (theWidth/6)*3-(theWidth/6)/2 - g.planetSize / 2,
        (theHeight/3.5)*4+theHeight/22.15,
        (theWidth/6)*3-(theWidth/6)/2 - g.planetSize / 4,
        (theHeight/3.5)*4 - g.planetSize / 2+theHeight/22.15,
        (theWidth/6)*3-(theWidth/6)/2 + g.planetSize / 4,
        (theHeight/3.5)*4 + g.planetSize / 2+theHeight/22.15,
        (theWidth/6)*3-(theWidth/6)/2 + g.planetSize / 2,
        (theHeight/3.5)*4+theHeight/22.15
      );
  
  g.fill(255);
  g.noStroke();
  g.text("Work",(theWidth/6)*4-(theWidth/6)/2, (theHeight/3.5)*4+theHeight/17+theHeight/22.15);
  
 g.stroke(255);
  g.noFill();
      g.strokeWeight(strokeModifier*0.5);
      // g.fill(this.planetColour-30);
      g.circle((theWidth/6)*4-(theWidth/6)/2, (theHeight/3.5)*4+theHeight/22.15, g.planetSize / 1.25);

      // g.fill(this.planetColour-60);
      g.strokeWeight(strokeModifier*1);
      g.circle((theWidth/6)*4-(theWidth/6)/2, (theHeight/3.5)*4+theHeight/22.15, g.planetSize / 1.8);
      // g.fill(this.planetColour-90);
      g.strokeWeight(strokeModifier*1.75);
      g.circle((theWidth/6)*4-(theWidth/6)/2, (theHeight/3.5)*4+theHeight/22.15, g.planetSize / 4);
  
  g.fill(255);
  g.noStroke();
  g.text("Acquaint-\nances",(theWidth/6)*5-(theWidth/6)/2, (theHeight/3.5)*4+theHeight/17+theHeight/22.15);
  
  g.noFill();
     g.stroke(255);
      g.strokeWeight(strokeModifier*1.75);

      g.circle((theWidth/6)*5-(theWidth/6)/2 - g.planetSize / 2.75, (theHeight/3.5)*4+theHeight/22.15, g.planetSize / 4);
      g.circle((theWidth/6)*5-(theWidth/6)/2, (theHeight/3.5)*4+theHeight/22.15, g.planetSize / 4);
      g.circle((theWidth/6)*5-(theWidth/6)/2 + g.planetSize / 2.75, (theHeight/3.5)*4+theHeight/22.15, g.planetSize / 4);
      g.circle((theWidth/6)*5-(theWidth/6)/2, (theHeight/3.5)*4 + g.planetSize / 2.75+theHeight/22.15, g.planetSize / 4);
      g.circle((theWidth/6)*5-(theWidth/6)/2, (theHeight/3.5)*4 - g.planetSize / 2.75+theHeight/22.15, g.planetSize / 4);
  
  g.fill(255);
  g.noStroke();
  g.text("Other",(theWidth/6)*6-(theWidth/6)/2, (theHeight/3.5)*4+theHeight/17+theHeight/22.15);
  
  //communication method
  //How did you communicate?//////////////////////////////////////////////////////////////////
      g.fill(255);
  g.textSize(theHeight / 36);
  g.textAlign(g.CENTER,g.CENTER);
  g.text("How did you communicate?",theWidth/2, (theHeight/3.5)*5-theHeight/11+theHeight/21.9);  
  
  g.noStroke();
  g.fill("rgb(150,150,150)");
  for(i=1;i<5;i++){
  g.circle((theWidth/4)*i-(theWidth/4)/2, (theHeight/3.5)*5+theHeight/21.9, g.planetSize);
  }
  
  g.textSize(theHeight / 50);
  g.textAlign(g.CENTER,g.TOP);
  
  //have not adjusted text up CUZ not sure if will keep the stuff on the second g.line 
  g.fill(255);
  g.noStroke();
  g.text("Written",(theWidth/4)*1-(theWidth/4)/2, (theHeight/3.5)*5+theHeight/17+theHeight/21.9);
  
 g.stroke(255);
      g.strokeWeight(strokeModifier*1.5);
      g.line(
        (theWidth/4)*1-(theWidth/4)/2 + g.planetSize / 3.5,
        (theHeight/3.5)*5 - g.planetSize / 4+theHeight/21.9,
        (theWidth/4)*1-(theWidth/4)/2 + g.planetSize / 1.4,
        (theHeight/3.5)*5 - g.planetSize / 1.6+theHeight/21.9
      );

      g.line(
        (theWidth/4)*1-(theWidth/4)/2 + g.planetSize / 3.5,
        (theHeight/3.5)*5 - g.planetSize / 4 + g.planetSize / 4+theHeight/21.9,
        (theWidth/4)*1-(theWidth/4)/2 + g.planetSize / 1.4,
        (theHeight/3.5)*5 - g.planetSize / 1.6 + g.planetSize / 4+theHeight/21.9
      );

      g.line(
        (theWidth/4)*1-(theWidth/4)/2 + g.planetSize / 3.5,
        (theHeight/3.5)*5 - g.planetSize / 4 + (g.planetSize / 4) * 2+theHeight/21.9,
        (theWidth/4)*1-(theWidth/4)/2 + g.planetSize / 1.4,
        (theHeight/3.5)*5 - g.planetSize / 1.6 + (g.planetSize / 4) * 2+theHeight/21.9
      );
  
  g.fill(255);
  g.noStroke();
  g.text("Spoken",(theWidth/4)*2-(theWidth/4)/2, (theHeight/3.5)*5+theHeight/17+theHeight/21.9);
  
  g.fill(255);
      g.noStroke();
      g.triangle(
        (theWidth/4)*2-(theWidth/4)/2 + g.planetSize / 1 - g.planetSize / 3,
        (theHeight/3.5)*5 - g.planetSize / 1.2 + g.planetSize / 3+theHeight/21.9,
        (theWidth/4)*2-(theWidth/4)/2 + g.planetSize / 2 - g.planetSize / 3,
        (theHeight/3.5)*5 - g.planetSize / 2 + g.planetSize / 3+theHeight/21.9,
        (theWidth/4)*2-(theWidth/4)/2 + g.planetSize / 2 - g.planetSize / 3,
        (theHeight/3.5)*5 - g.planetSize / 0.9 + g.planetSize / 3+theHeight/21.9
      );
  
  g.fill(255);
  g.noStroke();
  g.text("Video",(theWidth/4)*3-(theWidth/4)/2, (theHeight/3.5)*5+theHeight/17+theHeight/21.9);
  
  g.noStroke();

      g.fill(255);

      g.ellipse(
        (theWidth/4)*3-(theWidth/4)/2 + g.planetSize / 1 - g.planetSize / 2,
        (theHeight/3.5)*5+theHeight/21.9,
        g.planetSize / 4
      );

      g.bezier(
        (theWidth/4)*3-(theWidth/4)/2 - g.planetSize / 1 + g.planetSize / 4,
        (theHeight/3.5)*5+theHeight/21.9,
        (theWidth/4)*3-(theWidth/4)/2 - g.planetSize / 6 + g.planetSize / 4,
        (theHeight/3.5)*5 - g.planetSize / 1.3+theHeight/21.9,
        (theWidth/4)*3-(theWidth/4)/2 - g.planetSize / 6 + g.planetSize / 4,
        (theHeight/3.5)*5 + g.planetSize / 1.3+theHeight/21.9,
        (theWidth/4)*3-(theWidth/4)/2 - g.planetSize / 1 + g.planetSize / 4,
        (theHeight/3.5)*5+theHeight/21.9
      );
  
  g.fill(255);
  g.noStroke();
  
  g.text("In-Person",(theWidth/4)*4-(theWidth/4)/2, (theHeight/3.5)*5+theHeight/17+theHeight/21.9);
  
  g.fill(255);
      g.noStroke();
//       for (g.i = 0; i < g.radians(360 + 0); i += g.radians(360 / g.pointCount)) {
//         g.diameter = g.planetSize * 1.8 - g.planetSize / 3;
//         g.x = (g.diameter / 2) * Math.cos(i) + (theWidth/4)*4-(theWidth/4)/2;
//         g.y = (g.diameter / 2) * Math.sin(i) + (theHeight/3.5)*5+theHeight/21.9;

//         g.ellipse(g.x, g.y, g.planetSize / 4.5);
//         g.angle = 0;
//       }

  //Around how long was your interaction?///////////////////////////////////////////////////////////
      g.fill(255);
  g.textSize(theHeight / 36);
  g.textAlign(g.CENTER,g.CENTER);
  g.text("Around how long was your interaction?",theWidth/2, (theHeight/3.5)*6-theHeight/12.5+theHeight/80);  
  
  g.textSize(theHeight / 50);
  g.textAlign(g.CENTER,g.TOP);
  
  g.fill(255);
  g.noStroke();
  g.text("3 h+",(theWidth/6)*1-(theWidth/6)/2, (theHeight/3.5)*6+theHeight/17+theHeight/80);
  g.fill("rgb(150,150,150)");
  g.circle((theWidth/6)*1-(theWidth/6)/2, (theHeight/3.5)*6+theHeight/80, theWidth / 10.5);
  
  g.fill(255);
  g.noStroke();
  g.text("1 - 3 h",(theWidth/6)*2-(theWidth/6)/2, (theHeight/3.5)*6+theHeight/17+theHeight/80);
  g.fill("rgb(150,150,150)");
  g.circle((theWidth/6)*2-(theWidth/6)/2, (theHeight/3.5)*6+theHeight/80, theWidth / 14);
  
  g.fill(255);
  g.noStroke();
  g.text("30 min\n- 1 h",(theWidth/6)*3-(theWidth/6)/2, (theHeight/3.5)*6+theHeight/17+theHeight/80);
  g.fill("rgb(150,150,150)");
  g.circle((theWidth/6)*3-(theWidth/6)/2, (theHeight/3.5)*6+theHeight/80, theWidth / 18);
  
  g.fill(255);
  g.noStroke();
  g.text("10 min\n- 30 min",(theWidth/6)*4-(theWidth/6)/2, (theHeight/3.5)*6+theHeight/17+theHeight/80);
  g.fill("rgb(150,150,150)");
  g.circle((theWidth/6)*4-(theWidth/6)/2, (theHeight/3.5)*6+theHeight/80, theWidth / 23);
  
  g.fill(255);
  g.noStroke();
  g.text("5 min\n- 10 min",(theWidth/6)*5-(theWidth/6)/2, (theHeight/3.5)*6+theHeight/17+theHeight/80);
  g.fill("rgb(150,150,150)");
  g.circle((theWidth/6)*5-(theWidth/6)/2, (theHeight/3.5)*6+theHeight/80, theWidth / 32);
  
  g.fill(255);
  g.noStroke();
  g.text("few min\nor sec",(theWidth/6)*6-(theWidth/6)/2, (theHeight/3.5)*6+theHeight/17+theHeight/80);
  g.fill("rgb(150,150,150)");
  g.circle((theWidth/6)*6-(theWidth/6)/2, (theHeight/3.5)*6+theHeight/80, theWidth / 44);
  
  //How did you feel about the interaction?//////////////////////////////////////////////////////////
  g.fill(255);
  g.textSize(theHeight / 36);
  g.textAlign(g.CENTER,g.CENTER);
  g.text("How did you feel about the interaction?",theWidth/2, (theHeight/3.5)*7-theHeight/12+theHeight/120);  
  
  g.noStroke();

  for(i=1;i<6;i++){
    
  if (i == 1) {
      g.fill("#AFE6FF");
    } else if (i == 2) {
      g.fill("#12A4E6");
    } else if (i == 3) {
      g.fill("rgb(150,150,150)");
    } else if (i == 4) {
      g.fill("#FF8181");
    } else if (i == 5) {
      g.fill("#990202");
    }
  g.circle((theWidth/5)*i-(theWidth/5)/2, (theHeight/3.5)*7+theHeight/120, g.planetSize);
  }
  
  g.textSize(theHeight / 50);
  g.textAlign(g.CENTER,g.TOP);
  
  g.fill(255);
  g.text("Very Good",(theWidth/5)*1-(theWidth/5)/2,
       (theHeight/3.5)*7+theHeight/13+theHeight/120);
  
  g.fill(255);
  g.text("Good",(theWidth/5)*2-(theWidth/5)/2,
       (theHeight/3.5)*7+theHeight/13+theHeight/120);

  g.fill(255);
  g.text("Neutral",(theWidth/5)*3-(theWidth/5)/2,
       (theHeight/3.5)*7+theHeight/13+theHeight/120);

  g.fill(255);
  g.text("Bad",(theWidth/5)*4-(theWidth/5)/2, (theHeight/3.5)*7+theHeight/13+theHeight/120);

  g.fill(255);
  g.text("Very Bad",(theWidth/5)*5-(theWidth/5)/2,
       (theHeight/3.5)*7+theHeight/13+theHeight/120);
  
  ////for seeing the top of the legend canvas
  //   g.stroke(255);
  // g.strokeWeight(strokeModifier*10);
  // g.fill(255);
  // g.line(0,0,theWidth,0);
}
}

var myCanvasLegend = new p5 (legend, 'myCanvasLegendHTML');