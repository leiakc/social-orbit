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
  // myCanvasLegend = g.createCanvas(g.displayWidth*legendModifierH, g.displayHeight*legendModifierH*2.85);
  // myCanvasLegend.parent("myCanvasLegendHTML");
  g.createCanvas(g.displayWidth*legendModifierH, g.displayHeight*legendModifierH*2.85);
  
  g.textFont("Helvetica");
  // g.textAlign(g.CENTER);
  g.textStyle(g.NORMAL);
  
  g.planetSize = g.displayWidth*legendModifierH/12;

// }

// //draw--------------------------------------------------------------------------------------
// g.draw = function() {
  g.background(0);
  
  g.sunWidth = g.displayWidth*legendModifierH / 7.5;
  
  ///////////////////////////////////////////////////////////////
  
  //this goes on the bottom so it goes first in the code
  
  g.noFill();
  g.stroke(255)
  g.strokeWeight(strokeModifier*1);

  //rings
  
  g.ringSpacerL = ((((g.displayWidth*legendModifierH/6)*2-(g.displayWidth*legendModifierH/6)/2) - ((g.displayWidth*legendModifierH/6)*1-(g.displayWidth*legendModifierH/6)/2))*2) ;
  
  //closest to sun
  g.noFill();
  g.stroke(255);
  
  g.ellipse((g.displayWidth*legendModifierH/6)*1-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*8, g.displayWidth*legendModifierH-(g.ringSpacerL)*2);
  
  g.ellipse((g.displayWidth*legendModifierH/6)*1-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*8, g.displayWidth*legendModifierH-(g.ringSpacerL));
  
  g.ellipse((g.displayWidth*legendModifierH/6)*1-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*8, g.displayWidth*legendModifierH);
  
  //furthest from sun
  g.ellipse((g.displayWidth*legendModifierH/6)*1-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*8, g.displayWidth*legendModifierH+(g.ringSpacerL));
  
  //black boxes that hide most of the rings
  g.noStroke();
  g.fill(0);
  // g.rect(0, ((g.displayHeight*legendModifierH/3.5)*6), g.displayWidth*legendModifierH, g.displayHeight*legendModifierH/2.25);
  
  g.beginShape();
  g.vertex(0, 0); //g.TOP left 
  g.vertex(g.displayWidth*legendModifierH,0); //g.TOP right 
  g.vertex(g.displayWidth*legendModifierH,((g.displayHeight*legendModifierH/3.5)*6)+g.displayHeight*legendModifierH/1.95); // bottom right
  g.vertex(0, ((g.displayHeight*legendModifierH/3.5)*6)+g.displayHeight*legendModifierH/1.95);
  g.endShape(g.CLOSE);
  // g.rect(0, ((g.displayHeight*legendModifierH/3.5)*8)+(g.displayHeight*legendModifierH/17), g.displayWidth*legendModifierH, g.displayHeight*legendModifierH/2.25);
  g.rect((g.displayWidth*legendModifierH/6)*1, ((g.displayHeight*legendModifierH/3.5)*8)+(g.displayHeight*legendModifierH/17), g.displayWidth*legendModifierH, g.displayHeight*legendModifierH/22);
  
  //writing
   g.fill(255);
  g.textSize(g.displayHeight*legendModifierH / 36);
  g.textAlign(g.CENTER,g.CENTER);
  
  //What time of day was the interaction?/////////////////////////////////////////////////////////// 
  g.text("What time of day was the interaction?",g.displayWidth*legendModifierH/2, (g.displayHeight*legendModifierH/3.5)*8-g.displayHeight*legendModifierH/10); 
  
  ////////////////legend title////////////////////////////////////////////////////////////////////
  g.noStroke();
  
  g.fill(255);
  g.textStyle(g.BOLD);
  g.textSize(g.displayHeight*legendModifierH / 25);
  g.textAlign(g.CENTER,g.CENTER);
  g.textFont('Space Mono');
  g.text("Legend",g.displayWidth*legendModifierH/2, (g.displayHeight*legendModifierH/3.5)-g.displayHeight*legendModifierH/5); //5.5
  g.textStyle(g.NORMAL);
  
  g.textFont('Helvetica');  
  ///////////////////////////////////////////////////////////////////////////////////////////////
  //sun and planets
    g.noStroke();
  for(i=1;i<7;i++){
    g.fill("rgb(150,150,150)");
    if(i!==6){
  g.circle((g.displayWidth*legendModifierH/6)*i-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*8, g.planetSize);
    } else {
      g.circle((g.displayWidth*legendModifierH/6)*i-(g.displayWidth*legendModifierH/6)/2-(g.displayWidth*legendModifierH/200), (g.displayHeight*legendModifierH/3.5)*8, g.planetSize);
    }
    
    if(i==1){
      g.fill("#EBD300");
    g.noStroke();
    g.circle((g.displayWidth*legendModifierH/6)*i-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*8, g.sunWidth);
    }
    
    if(i==6){
      //draws a ring around the planet if the social interaction happens throughout the day
      g.noFill();
     g.stroke(255);
      g.strokeWeight(strokeModifier*1);
      g.circle((g.displayWidth*legendModifierH/6)*i-(g.displayWidth*legendModifierH/6)/2-(g.displayWidth*legendModifierH/200),
        (g.displayHeight*legendModifierH/3.5)*8,
        g.planetSize + g.planetSize
      );
      g.noStroke();
    }
  }
  
  g.textSize(g.displayHeight*legendModifierH / 50);
  g.textAlign(g.CENTER,g.TOP);
  
  g.fill(255);
  g.noStroke();
  g.text("Morning",(g.displayWidth*legendModifierH/6)*2-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*8+g.displayHeight*legendModifierH/14);
  g.text("Afternoon",(g.displayWidth*legendModifierH/6)*3-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*8+g.displayHeight*legendModifierH/14);
  g.text("Evening",(g.displayWidth*legendModifierH/6)*4-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*8+g.displayHeight*legendModifierH/14);
  g.text("Night",(g.displayWidth*legendModifierH/6)*5-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*8+g.displayHeight*legendModifierH/14);
  g.text("Throughout\nthe Day",(g.displayWidth*legendModifierH/6)*6-(g.displayWidth*legendModifierH/6)/2-g.displayWidth*legendModifierH/100, (g.displayHeight*legendModifierH/3.5)*8+g.displayHeight*legendModifierH/14);
  
  /////////////////////////////////////////////////////////////////
             
  //How are you today?///////////////////////////////////////////////////////////////////////////
  g.fill(255);
  g.textSize(g.displayHeight*legendModifierH / 36);
  g.textAlign(g.CENTER,g.CENTER);
  g.text("How are you today?",g.displayWidth*legendModifierH/2, (g.displayHeight*legendModifierH/3.5)-g.displayHeight*legendModifierH/11-g.displayHeight*legendModifierH/45.4);
  
  //dif suns
  //drawing sun
  g.textSize(g.displayHeight*legendModifierH / 50);
  g.textAlign(g.CENTER,g.TOP);
  g.fill(255);
  g.text("Very Good",(g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)+g.displayHeight*legendModifierH/13-g.displayHeight*legendModifierH/45.4);
    g.fill("#FFF6A3");
    g.noStroke();
    g.circle((g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)-g.displayHeight*legendModifierH/45.4, g.sunWidth);
  
  g.fill(255);
  g.text("Good",(g.displayWidth*legendModifierH/5)*2-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)+g.displayHeight*legendModifierH/13-g.displayHeight*legendModifierH/45.4);
  g.fill("#FFEB44");
    g.noStroke();
    g.circle((g.displayWidth*legendModifierH/5)*2-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)-g.displayHeight*legendModifierH/45.4, g.sunWidth);
  
  g.fill(255);
  g.text("Neutral",(g.displayWidth*legendModifierH/5)*3-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)+g.displayHeight*legendModifierH/13-g.displayHeight*legendModifierH/45.4);
  g.fill("#EBD300");
    g.noStroke();
    g.circle((g.displayWidth*legendModifierH/5)*3-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)-g.displayHeight*legendModifierH/45.4, g.sunWidth);
  
  g.fill(255);
  g.text("Bad",(g.displayWidth*legendModifierH/5)*4-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)+g.displayHeight*legendModifierH/13-g.displayHeight*legendModifierH/45.4);
  g.fill("#BFAC00");
    g.noStroke();
    g.circle((g.displayWidth*legendModifierH/5)*4-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)-g.displayHeight*legendModifierH/45.4, g.sunWidth);
  
  g.fill(255);
  g.text("Very Bad",(g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)+g.displayHeight*legendModifierH/13-g.displayHeight*legendModifierH/45.4);
  g.fill("#857701");
    g.noStroke();
    g.circle((g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)-g.displayHeight*legendModifierH/45.4, g.sunWidth);

  //sun decorations
  //How did you feel about today's social interactions?/////////////////////////////////////////////
  g.fill(255);
  g.textSize(g.displayHeight*legendModifierH / 36);
  g.textAlign(g.CENTER,g.CENTER);
  g.text("How did you feel about \ntoday's social interactions?",g.displayWidth*legendModifierH/2, (g.displayHeight*legendModifierH/3.5)*2-g.displayHeight*legendModifierH/8.25-g.displayHeight*legendModifierH/208);
  
  g.textSize(g.displayHeight*legendModifierH / 50);
  g.textAlign(g.CENTER,g.TOP);
  
  g.fill(255);
  g.text("Very Good",(g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*2+g.displayHeight*legendModifierH/13-g.displayHeight*legendModifierH/208);
  g.fill("#DCDCDC");
    g.noStroke();
    g.circle((g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*2-g.displayHeight*legendModifierH/208, g.sunWidth);

  g.x2 = (g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2;
  g.y2 = (g.displayHeight*legendModifierH/3.5)*2-g.displayHeight*legendModifierH/208;
  g.sWidth = g.displayWidth*legendModifierH/10;
  // g.sunWidth = g.displayWidth*legendModifierH / 7.5;
  // if (this.si_feeling == 1) {
      
     g.stroke("#E49300");
      g.strokeWeight(strokeModifier*3);
      g.circle(g.x2, g.y2, g.displayWidth*legendModifierH / 11);
      
     g.stroke(255);
      g.strokeWeight(strokeModifier*1);
      g.circle(g.x2, g.y2, g.displayWidth*legendModifierH / 11);
      
     g.stroke("#E49300");
      g.strokeWeight(strokeModifier*3);
      g.circle(g.x2, g.y2, g.displayWidth*legendModifierH / 18);
      
     g.stroke(255);
      g.strokeWeight(strokeModifier*1);
      g.circle(g.x2, g.y2, g.displayWidth*legendModifierH / 18);
      
      g.noFill();

     g.stroke("#E49300");
      g.strokeWeight(strokeModifier*4.5);
      g.circle(
       g.x2 + g.sWidth / 4,
       g.y2 + g.sWidth / 4,
        g.displayWidth*legendModifierH / 15
      );
      
     g.stroke(255);
      g.strokeWeight(strokeModifier*2.5);
      g.circle(
       g.x2 + g.sWidth / 4,
       g.y2 + g.sWidth / 4,
        g.displayWidth*legendModifierH / 15
      );
        
     g.stroke("#E49300");
      g.strokeWeight(strokeModifier*3.5);
      g.circle(
       g.x2 - g.sWidth / 4,
       g.y2 - g.sWidth / 3,
        g.displayWidth*legendModifierH / 20
      );
      
     g.stroke(255);
      g.strokeWeight(strokeModifier*1.5);
      g.circle(
       g.x2 - g.sWidth / 4,
       g.y2 - g.sWidth / 3,
        g.displayWidth*legendModifierH / 20
      );
  
  g.fill(255);
  g.noStroke();
  g.text("Good",(g.displayWidth*legendModifierH/5)*2-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*2+g.displayHeight*legendModifierH/13-g.displayHeight*legendModifierH/208);
  g.fill("#DCDCDC");
    g.circle((g.displayWidth*legendModifierH/5)*2-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*2-g.displayHeight*legendModifierH/208, g.sunWidth);
      
      g.noFill();
     g.stroke("#E49300");
      g.strokeWeight(strokeModifier*4.5);
      g.circle(
        (g.displayWidth*legendModifierH/5)*2-(g.displayWidth*legendModifierH/5)/2 + g.sWidth / 4,
       g.y2 + g.sWidth / 4,
        g.displayWidth*legendModifierH / 15
      );
      g.strokeWeight(strokeModifier*3.5);
      g.circle(
        (g.displayWidth*legendModifierH/5)*2-(g.displayWidth*legendModifierH/5)/2 - g.sWidth / 4,
       g.y2 - g.sWidth / 3,
        g.displayWidth*legendModifierH / 20
      );
      
     g.stroke(255);
      g.strokeWeight(strokeModifier*2.5);
      g.circle(
        (g.displayWidth*legendModifierH/5)*2-(g.displayWidth*legendModifierH/5)/2 + g.sWidth / 4,
       g.y2 + g.sWidth / 4,
        g.displayWidth*legendModifierH / 15
      );
      g.strokeWeight(strokeModifier*1.5);
      g.circle(
        (g.displayWidth*legendModifierH/5)*2-(g.displayWidth*legendModifierH/5)/2 - g.sWidth / 4,
       g.y2 - g.sWidth / 3,
        g.displayWidth*legendModifierH / 20
      );
  
   g.fill(255);
  g.noStroke();
  g.text("Neutral",(g.displayWidth*legendModifierH/5)*3-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*2+g.displayHeight*legendModifierH/13-g.displayHeight*legendModifierH/208);
  g.fill("#DCDCDC");
    g.circle((g.displayWidth*legendModifierH/5)*3-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*2-g.displayHeight*legendModifierH/208, g.sunWidth);

      g.noStroke();
      g.fill(150, 150, 150, 150);
      g.circle((g.displayWidth*legendModifierH/5)*3-(g.displayWidth*legendModifierH/5)/2 + g.sWidth / 4, g.y2, g.displayWidth*legendModifierH / 27.5);
  
  g.fill(255);
  g.noStroke();
  g.text("Bad",(g.displayWidth*legendModifierH/5)*4-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*2+g.displayHeight*legendModifierH/13-g.displayHeight*legendModifierH/208);
  g.fill("#DCDCDC");
    g.circle((g.displayWidth*legendModifierH/5)*4-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*2-g.displayHeight*legendModifierH/208, g.sunWidth);
  
     g.stroke(0);
      g.strokeWeight(strokeModifier*2);
      g.line(
        (g.displayWidth*legendModifierH/5)*4-(g.displayWidth*legendModifierH/5)/2 - g.displayWidth*legendModifierH / 20,
       g.y2 - g.displayWidth*legendModifierH / 20,
        (g.displayWidth*legendModifierH/5)*4-(g.displayWidth*legendModifierH/5)/2 + g.displayWidth*legendModifierH / 20,
       g.y2 + g.displayWidth*legendModifierH / 20
      );
  
    g.fill(255);
  g.noStroke();
  g.text("Very Bad",(g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*2+g.displayHeight*legendModifierH/13-g.displayHeight*legendModifierH/208);
  g.fill("#DCDCDC");
    g.circle((g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*2-g.displayHeight*legendModifierH/208, g.sunWidth);
  
     g.stroke(0);
      g.strokeWeight(strokeModifier*2);
      g.line(
        (g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2 - g.displayWidth*legendModifierH / 20,
       g.y2 - g.displayWidth*legendModifierH / 20,
        (g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2 + g.displayWidth*legendModifierH / 20,
       g.y2 + g.displayWidth*legendModifierH / 20
      );

      g.strokeWeight(strokeModifier*4);
      g.line(
        (g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2 + g.displayWidth*legendModifierH / 40 - g.sWidth / 5,
       g.y2 - g.displayWidth*legendModifierH / 40 - g.sWidth / 5,
        (g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2 - g.displayWidth*legendModifierH / 40 - g.sWidth / 5,
       g.y2 + g.displayWidth*legendModifierH / 40 - g.sWidth / 5
      );

      g.strokeWeight(strokeModifier*6);
      g.line(
        (g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2 + g.displayWidth*legendModifierH / 30,
       g.y2 - g.displayWidth*legendModifierH / 30,
        (g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2 - g.displayWidth*legendModifierH / 30,
       g.y2 + g.displayWidth*legendModifierH / 30
      );

      g.strokeWeight(strokeModifier*4);
      g.line(
        (g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2 + g.displayWidth*legendModifierH / 40 + g.sWidth / 5,
       g.y2 - g.displayWidth*legendModifierH / 40 + g.sWidth / 5,
        (g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2 - g.displayWidth*legendModifierH / 40 + g.sWidth / 5,
       g.y2 + g.displayWidth*legendModifierH / 40 + g.sWidth / 5
      );
  
  //stars
  //How satisfied are you with today's social interactions?///////////////////////////////////////////
  g.fill(255);
  g.textSize(g.displayHeight*legendModifierH / 36);
  g.textAlign(g.CENTER,g.CENTER);
  g.text("How satisfied are you with \ntoday's social interactions?",g.displayWidth*legendModifierH/2, (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/8.3+g.displayHeight*legendModifierH/33);  
  
  g.textSize(g.displayHeight*legendModifierH / 50);
  g.textAlign(g.CENTER,g.TOP);
  
  g.fill(255);
  g.noStroke();
  g.text("Very\nSatisfied",(g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/13+g.displayHeight*legendModifierH/33);

  g.fill(255, 255, 255, 50);
  g.circle((g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/20,(
          g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/22.15+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/50)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.circle((g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/20,(
          g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/22.15+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/50)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.circle((g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/20,(
          g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/22.15+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/50)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.circle((g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/33, (g.displayWidth*legendModifierH/75)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.circle((g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/33, (g.displayWidth*legendModifierH/75)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.circle((g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/33, (g.displayWidth*legendModifierH/75)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.circle((g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/20, 
        (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/45+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/120)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.circle((g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/20, 
        (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/45+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/120)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.circle((g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/20, 
        (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/45+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/120)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.circle((g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/32, 
         (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/45+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/220)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.circle((g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/32, 
         (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/45+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/220)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.circle((g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/32, 
         (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/45+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/220)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.circle((g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/70, 
         (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/25+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/90)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.circle((g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/70, 
         (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/25+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/90)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.circle((g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/70, 
         (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/25+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/90)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.circle((g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/20, 
         (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/50+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/90)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.circle((g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/20, 
         (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/50+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/90)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.circle((g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/20, 
         (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/50+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/90)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.circle((g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/18, 
         (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/24+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/80)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.circle((g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/18, 
         (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/24+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/80)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.circle((g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/18, 
         (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/24+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/80)+ 3);
    
  g.fill(255);
  g.noStroke();
  g.text("Satisfied",(g.displayWidth*legendModifierH/5)*2-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/13+g.displayHeight*legendModifierH/33); 

  g.circle((g.displayWidth*legendModifierH/5)*2-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/20,(
          g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/22.15+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/50)+ 3);

  g.circle((g.displayWidth*legendModifierH/5)*2-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*3, (g.displayWidth*legendModifierH/75)+ 3);  

  g.circle((g.displayWidth*legendModifierH/5)*2-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/20, 
        (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/45+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/120)+ 3);

  g.circle((g.displayWidth*legendModifierH/5)*2-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/32, 
         (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/45+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/220)+ 3);
  
  g.circle((g.displayWidth*legendModifierH/5)*2-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/70, 
         (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/25+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/90)+ 3);

  g.circle((g.displayWidth*legendModifierH/5)*2-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/20, 
         (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/50+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/90)+ 3);

  g.circle((g.displayWidth*legendModifierH/5)*2-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/18, 
         (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/24+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/80)+ 3);
  
  g.fill(255);
  g.noStroke();
  g.text("Neutral",(g.displayWidth*legendModifierH/5)*3-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/13+g.displayHeight*legendModifierH/33);
  
  g.fill(255);
       g.stroke(255);
        g.strokeWeight(strokeModifier*3.5);
  
  g.point((g.displayWidth*legendModifierH/5)*3-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/20,(
          g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/22.15+g.displayHeight*legendModifierH/33);

  g.point((g.displayWidth*legendModifierH/5)*3-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/33);
  
  g.point((g.displayWidth*legendModifierH/5)*3-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/20, 
        (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/45+g.displayHeight*legendModifierH/33);

  g.point((g.displayWidth*legendModifierH/5)*3-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/32, 
         (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/45+g.displayHeight*legendModifierH/33);
  
  g.point((g.displayWidth*legendModifierH/5)*3-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/70, 
         (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/25+g.displayHeight*legendModifierH/33);
  
  g.point((g.displayWidth*legendModifierH/5)*3-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/20, 
         (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/50+g.displayHeight*legendModifierH/33);

  g.point((g.displayWidth*legendModifierH/5)*3-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/18, 
         (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/24+g.displayHeight*legendModifierH/33);
  
  g.fill(255);
  g.noStroke();
  g.text("Dissatisfied",(g.displayWidth*legendModifierH/5)*4-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/13+g.displayHeight*legendModifierH/33);
  
   g.square((g.displayWidth*legendModifierH/5)*4-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/20,(
          g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/22.15+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/50)+ 3);

  g.square((g.displayWidth*legendModifierH/5)*4-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/33, (g.displayWidth*legendModifierH/75)+ 3);
  

  g.square((g.displayWidth*legendModifierH/5)*4-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/20, 
        (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/45+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/120)+ 3);


  g.square((g.displayWidth*legendModifierH/5)*4-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/32, 
         (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/45+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/220)+ 3);
  

  g.square((g.displayWidth*legendModifierH/5)*4-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/70, 
         (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/25+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/90)+ 3);
  

  g.square((g.displayWidth*legendModifierH/5)*4-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/20, 
         (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/50+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/90)+ 3);

  g.square((g.displayWidth*legendModifierH/5)*4-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/18, 
         (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/24+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/80)+ 3);
  
  g.fill(255);
  g.noStroke();
  g.text("Very\nDissatisfied",(g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/13+g.displayHeight*legendModifierH/33);
  
   g.fill(255, 255, 255, 50);
  g.square((g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/20,(
          g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/22.15+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/50)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.square((g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/20,(
          g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/22.15+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/50)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.square((g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/20,(
          g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/22.15+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/50)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.square((g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/33, (g.displayWidth*legendModifierH/75)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.square((g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/33, (g.displayWidth*legendModifierH/75)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.square((g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/33, (g.displayWidth*legendModifierH/75)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.square((g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/20, 
        (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/45+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/120)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.square((g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/20, 
        (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/45+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/120)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.square((g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/20, 
        (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/45+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/120)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.square((g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/32, 
         (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/45+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/220)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.square((g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/32, 
         (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/45+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/220)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.square((g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/32, 
         (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/45+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/220)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.square((g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/70, 
         (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/25+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/90)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.square((g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/70, 
         (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/25+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/90)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.square((g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/70, 
         (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/25+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/90)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.square((g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/20, 
         (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/50+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/90)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.square((g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/20, 
         (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/50+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/90)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.square((g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2+g.displayWidth*legendModifierH/20, 
         (g.displayHeight*legendModifierH/3.5)*3-g.displayHeight*legendModifierH/50+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/90)+ 3);
  
  g.fill(255, 255, 255, 50);
  g.square((g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/18, 
         (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/24+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/80)* 3.5 + 3);
  
  g.fill(255, 255, 255, 90);
  g.square((g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/18, 
         (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/24+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/80)* 2.2 + 3);
  
  g.fill(255, 255, 255);
  g.square((g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2-g.displayWidth*legendModifierH/18, 
         (g.displayHeight*legendModifierH/3.5)*3+g.displayHeight*legendModifierH/24+g.displayHeight*legendModifierH/33, 
         (g.displayWidth*legendModifierH/80)+ 3);
  
  //planet stuff
  //relationship 
  //What kind of relationship do you have?///////////////////////////////////////////////////////////
  g.fill(255);
  g.textSize(g.displayHeight*legendModifierH / 36);
  g.textAlign(g.CENTER,g.CENTER);
  g.text("What kind of relationship do you have?",g.displayWidth*legendModifierH/2, (g.displayHeight*legendModifierH/3.5)*4-g.displayHeight*legendModifierH/12+g.displayHeight*legendModifierH/22.15);  
  
  g.textSize(g.displayHeight*legendModifierH / 50);
  g.textAlign(g.CENTER,g.TOP);

  g.fill(255);
  g.noStroke();
  g.text("Friends",(g.displayWidth*legendModifierH/6)*1-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*4+g.displayHeight*legendModifierH/17+g.displayHeight*legendModifierH/22.15);
  g.noStroke();
  g.fill("rgb(150,150,150)");
  
  for(i=1;i<7;i++){
  g.circle((g.displayWidth*legendModifierH/6)*i-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*4+g.displayHeight*legendModifierH/22.15, g.planetSize);
  }
    
  g.noFill();
     g.stroke(255);
      g.strokeWeight(strokeModifier*1);
      g.circle(((g.displayWidth*legendModifierH/6)*1-(g.displayWidth*legendModifierH/6)/2) - g.planetSize / 6, (g.displayHeight*legendModifierH/3.5)*4+g.displayHeight*legendModifierH/22.15, g.planetSize / 2);
      g.circle(((g.displayWidth*legendModifierH/6)*1-(g.displayWidth*legendModifierH/6)/2) + g.planetSize / 6, (g.displayHeight*legendModifierH/3.5)*4+g.displayHeight*legendModifierH/22.15, g.planetSize / 2);
  
  g.fill(255);
  g.noStroke();
  g.text("Family",(g.displayWidth*legendModifierH/6)*2-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*4+g.displayHeight*legendModifierH/17+g.displayHeight*legendModifierH/22.15);
  
  g.fill(255);
     g.stroke(255);
      g.strokeWeight(strokeModifier*3);
      g.line((((g.displayWidth*legendModifierH/6)*2-(g.displayWidth*legendModifierH/6)/2)) - g.planetSize / 2.3,
        (g.displayHeight*legendModifierH/3.5)*4+g.displayHeight*legendModifierH/22.15,
        (((g.displayWidth*legendModifierH/6)*2-(g.displayWidth*legendModifierH/6)/2)) + g.planetSize / 2.3,
        (g.displayHeight*legendModifierH/3.5)*4+g.displayHeight*legendModifierH/22.15);
  
  g.strokeWeight(strokeModifier*2 );
      g.line(
        ((g.displayWidth*legendModifierH/6)*2-(g.displayWidth*legendModifierH/6)/2) - g.planetSize / 2.7,
        (g.displayHeight*legendModifierH/3.5)*4 + g.planetSize / 4+g.displayHeight*legendModifierH/22.15,
        ((g.displayWidth*legendModifierH/6)*2-(g.displayWidth*legendModifierH/6)/2) + g.planetSize / 2.7,
        (g.displayHeight*legendModifierH/3.5)*4 + g.planetSize / 4+g.displayHeight*legendModifierH/22.15
      );
      g.line(
        ((g.displayWidth*legendModifierH/6)*2-(g.displayWidth*legendModifierH/6)/2) - g.planetSize / 2.7,
        (g.displayHeight*legendModifierH/3.5)*4 - g.planetSize / 4+g.displayHeight*legendModifierH/22.15,
        ((g.displayWidth*legendModifierH/6)*2-(g.displayWidth*legendModifierH/6)/2) + g.planetSize / 2.7,
        (g.displayHeight*legendModifierH/3.5)*4 - g.planetSize / 4+g.displayHeight*legendModifierH/22.15
      );
      g.strokeWeight(strokeModifier*1 );
      g.line(
        ((g.displayWidth*legendModifierH/6)*2-(g.displayWidth*legendModifierH/6)/2) - g.planetSize / 3.8,
        (g.displayHeight*legendModifierH/3.5)*4 + g.planetSize / 2.5+g.displayHeight*legendModifierH/22.15,
        ((g.displayWidth*legendModifierH/6)*2-(g.displayWidth*legendModifierH/6)/2) + g.planetSize / 3.8,
        (g.displayHeight*legendModifierH/3.5)*4 + g.planetSize / 2.5+g.displayHeight*legendModifierH/22.15
      );
      g.line(
        ((g.displayWidth*legendModifierH/6)*2-(g.displayWidth*legendModifierH/6)/2) - g.planetSize / 3.8,
        (g.displayHeight*legendModifierH/3.5)*4 - g.planetSize / 2.5+g.displayHeight*legendModifierH/22.15,
        ((g.displayWidth*legendModifierH/6)*2-(g.displayWidth*legendModifierH/6)/2) + g.planetSize / 3.8,
        (g.displayHeight*legendModifierH/3.5)*4 - g.planetSize / 2.5+g.displayHeight*legendModifierH/22.15
      );
  
  g.fill(255);
  g.noStroke();
  g.text("Romantic /\nDating",(g.displayWidth*legendModifierH/6)*3-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*4+g.displayHeight*legendModifierH/17+g.displayHeight*legendModifierH/22.15);
  
  g.noFill();
     g.stroke(255);

      g.strokeWeight(strokeModifier*2);
      g.bezier(
        (g.displayWidth*legendModifierH/6)*3-(g.displayWidth*legendModifierH/6)/2 - g.planetSize / 2,
        (g.displayHeight*legendModifierH/3.5)*4+g.displayHeight*legendModifierH/22.15,
        (g.displayWidth*legendModifierH/6)*3-(g.displayWidth*legendModifierH/6)/2 - g.planetSize / 8,
        (g.displayHeight*legendModifierH/3.5)*4 - g.planetSize / 0.75+g.displayHeight*legendModifierH/22.15,
        (g.displayWidth*legendModifierH/6)*3-(g.displayWidth*legendModifierH/6)/2 + g.planetSize / 8,
        (g.displayHeight*legendModifierH/3.5)*4 + g.planetSize / 0.75+g.displayHeight*legendModifierH/22.15,
        (g.displayWidth*legendModifierH/6)*3-(g.displayWidth*legendModifierH/6)/2 + g.planetSize / 2,
        (g.displayHeight*legendModifierH/3.5)*4+g.displayHeight*legendModifierH/22.15
      );

      g.strokeWeight(strokeModifier*1);
      g.bezier(
        (g.displayWidth*legendModifierH/6)*3-(g.displayWidth*legendModifierH/6)/2 - g.planetSize / 2,
        (g.displayHeight*legendModifierH/3.5)*4+g.displayHeight*legendModifierH/22.15,
        (g.displayWidth*legendModifierH/6)*3-(g.displayWidth*legendModifierH/6)/2 - g.planetSize / 4,
        (g.displayHeight*legendModifierH/3.5)*4 - g.planetSize / 1+g.displayHeight*legendModifierH/22.15,
        (g.displayWidth*legendModifierH/6)*3-(g.displayWidth*legendModifierH/6)/2 + g.planetSize / 4,
        (g.displayHeight*legendModifierH/3.5)*4 + g.planetSize / 1+g.displayHeight*legendModifierH/22.15,
        (g.displayWidth*legendModifierH/6)*3-(g.displayWidth*legendModifierH/6)/2 + g.planetSize / 2,
        (g.displayHeight*legendModifierH/3.5)*4+g.displayHeight*legendModifierH/22.15
      );

      g.bezier(
        (g.displayWidth*legendModifierH/6)*3-(g.displayWidth*legendModifierH/6)/2 - g.planetSize / 2,
        (g.displayHeight*legendModifierH/3.5)*4+g.displayHeight*legendModifierH/22.15,
        (g.displayWidth*legendModifierH/6)*3-(g.displayWidth*legendModifierH/6)/2 - g.planetSize / 4,
        (g.displayHeight*legendModifierH/3.5)*4 - g.planetSize / 2+g.displayHeight*legendModifierH/22.15,
        (g.displayWidth*legendModifierH/6)*3-(g.displayWidth*legendModifierH/6)/2 + g.planetSize / 4,
        (g.displayHeight*legendModifierH/3.5)*4 + g.planetSize / 2+g.displayHeight*legendModifierH/22.15,
        (g.displayWidth*legendModifierH/6)*3-(g.displayWidth*legendModifierH/6)/2 + g.planetSize / 2,
        (g.displayHeight*legendModifierH/3.5)*4+g.displayHeight*legendModifierH/22.15
      );
  
  g.fill(255);
  g.noStroke();
  g.text("Work",(g.displayWidth*legendModifierH/6)*4-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*4+g.displayHeight*legendModifierH/17+g.displayHeight*legendModifierH/22.15);
  
 g.stroke(255);
  g.noFill();
      g.strokeWeight(strokeModifier*0.5);
      // g.fill(this.planetColour-30);
      g.circle((g.displayWidth*legendModifierH/6)*4-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*4+g.displayHeight*legendModifierH/22.15, g.planetSize / 1.25);

      // g.fill(this.planetColour-60);
      g.strokeWeight(strokeModifier*1);
      g.circle((g.displayWidth*legendModifierH/6)*4-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*4+g.displayHeight*legendModifierH/22.15, g.planetSize / 1.8);
      // g.fill(this.planetColour-90);
      g.strokeWeight(strokeModifier*1.75);
      g.circle((g.displayWidth*legendModifierH/6)*4-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*4+g.displayHeight*legendModifierH/22.15, g.planetSize / 4);
  
  g.fill(255);
  g.noStroke();
  g.text("Acquaint-\nances",(g.displayWidth*legendModifierH/6)*5-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*4+g.displayHeight*legendModifierH/17+g.displayHeight*legendModifierH/22.15);
  
  g.noFill();
     g.stroke(255);
      g.strokeWeight(strokeModifier*1.75);

      g.circle((g.displayWidth*legendModifierH/6)*5-(g.displayWidth*legendModifierH/6)/2 - g.planetSize / 2.75, (g.displayHeight*legendModifierH/3.5)*4+g.displayHeight*legendModifierH/22.15, g.planetSize / 4);
      g.circle((g.displayWidth*legendModifierH/6)*5-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*4+g.displayHeight*legendModifierH/22.15, g.planetSize / 4);
      g.circle((g.displayWidth*legendModifierH/6)*5-(g.displayWidth*legendModifierH/6)/2 + g.planetSize / 2.75, (g.displayHeight*legendModifierH/3.5)*4+g.displayHeight*legendModifierH/22.15, g.planetSize / 4);
      g.circle((g.displayWidth*legendModifierH/6)*5-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*4 + g.planetSize / 2.75+g.displayHeight*legendModifierH/22.15, g.planetSize / 4);
      g.circle((g.displayWidth*legendModifierH/6)*5-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*4 - g.planetSize / 2.75+g.displayHeight*legendModifierH/22.15, g.planetSize / 4);
  
  g.fill(255);
  g.noStroke();
  g.text("Other",(g.displayWidth*legendModifierH/6)*6-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*4+g.displayHeight*legendModifierH/17+g.displayHeight*legendModifierH/22.15);
  
  //communication method
  //How did you communicate?//////////////////////////////////////////////////////////////////
      g.fill(255);
  g.textSize(g.displayHeight*legendModifierH / 36);
  g.textAlign(g.CENTER,g.CENTER);
  g.text("How did you communicate?",g.displayWidth*legendModifierH/2, (g.displayHeight*legendModifierH/3.5)*5-g.displayHeight*legendModifierH/11+g.displayHeight*legendModifierH/21.9);  
  
  g.noStroke();
  g.fill("rgb(150,150,150)");
  for(i=1;i<5;i++){
  g.circle((g.displayWidth*legendModifierH/4)*i-(g.displayWidth*legendModifierH/4)/2, (g.displayHeight*legendModifierH/3.5)*5+g.displayHeight*legendModifierH/21.9, g.planetSize);
  }
  
  g.textSize(g.displayHeight*legendModifierH / 50);
  g.textAlign(g.CENTER,g.TOP);
  
  //have not adjusted text up CUZ not sure if will keep the stuff on the second g.line 
  g.fill(255);
  g.noStroke();
  g.text("Written",(g.displayWidth*legendModifierH/4)*1-(g.displayWidth*legendModifierH/4)/2, (g.displayHeight*legendModifierH/3.5)*5+g.displayHeight*legendModifierH/17+g.displayHeight*legendModifierH/21.9);
  
 g.stroke(255);
      g.strokeWeight(strokeModifier*1.5);
      g.line(
        (g.displayWidth*legendModifierH/4)*1-(g.displayWidth*legendModifierH/4)/2 + g.planetSize / 3.5,
        (g.displayHeight*legendModifierH/3.5)*5 - g.planetSize / 4+g.displayHeight*legendModifierH/21.9,
        (g.displayWidth*legendModifierH/4)*1-(g.displayWidth*legendModifierH/4)/2 + g.planetSize / 1.4,
        (g.displayHeight*legendModifierH/3.5)*5 - g.planetSize / 1.6+g.displayHeight*legendModifierH/21.9
      );

      g.line(
        (g.displayWidth*legendModifierH/4)*1-(g.displayWidth*legendModifierH/4)/2 + g.planetSize / 3.5,
        (g.displayHeight*legendModifierH/3.5)*5 - g.planetSize / 4 + g.planetSize / 4+g.displayHeight*legendModifierH/21.9,
        (g.displayWidth*legendModifierH/4)*1-(g.displayWidth*legendModifierH/4)/2 + g.planetSize / 1.4,
        (g.displayHeight*legendModifierH/3.5)*5 - g.planetSize / 1.6 + g.planetSize / 4+g.displayHeight*legendModifierH/21.9
      );

      g.line(
        (g.displayWidth*legendModifierH/4)*1-(g.displayWidth*legendModifierH/4)/2 + g.planetSize / 3.5,
        (g.displayHeight*legendModifierH/3.5)*5 - g.planetSize / 4 + (g.planetSize / 4) * 2+g.displayHeight*legendModifierH/21.9,
        (g.displayWidth*legendModifierH/4)*1-(g.displayWidth*legendModifierH/4)/2 + g.planetSize / 1.4,
        (g.displayHeight*legendModifierH/3.5)*5 - g.planetSize / 1.6 + (g.planetSize / 4) * 2+g.displayHeight*legendModifierH/21.9
      );
  
  g.fill(255);
  g.noStroke();
  g.text("Spoken",(g.displayWidth*legendModifierH/4)*2-(g.displayWidth*legendModifierH/4)/2, (g.displayHeight*legendModifierH/3.5)*5+g.displayHeight*legendModifierH/17+g.displayHeight*legendModifierH/21.9);
  
  g.fill(255);
      g.noStroke();
      g.triangle(
        (g.displayWidth*legendModifierH/4)*2-(g.displayWidth*legendModifierH/4)/2 + g.planetSize / 1 - g.planetSize / 3,
        (g.displayHeight*legendModifierH/3.5)*5 - g.planetSize / 1.2 + g.planetSize / 3+g.displayHeight*legendModifierH/21.9,
        (g.displayWidth*legendModifierH/4)*2-(g.displayWidth*legendModifierH/4)/2 + g.planetSize / 2 - g.planetSize / 3,
        (g.displayHeight*legendModifierH/3.5)*5 - g.planetSize / 2 + g.planetSize / 3+g.displayHeight*legendModifierH/21.9,
        (g.displayWidth*legendModifierH/4)*2-(g.displayWidth*legendModifierH/4)/2 + g.planetSize / 2 - g.planetSize / 3,
        (g.displayHeight*legendModifierH/3.5)*5 - g.planetSize / 0.9 + g.planetSize / 3+g.displayHeight*legendModifierH/21.9
      );
  
  g.fill(255);
  g.noStroke();
  g.text("Video",(g.displayWidth*legendModifierH/4)*3-(g.displayWidth*legendModifierH/4)/2, (g.displayHeight*legendModifierH/3.5)*5+g.displayHeight*legendModifierH/17+g.displayHeight*legendModifierH/21.9);
  
  g.noStroke();

      g.fill(255);

      g.ellipse(
        (g.displayWidth*legendModifierH/4)*3-(g.displayWidth*legendModifierH/4)/2 + g.planetSize / 1 - g.planetSize / 2,
        (g.displayHeight*legendModifierH/3.5)*5+g.displayHeight*legendModifierH/21.9,
        g.planetSize / 4
      );

      g.bezier(
        (g.displayWidth*legendModifierH/4)*3-(g.displayWidth*legendModifierH/4)/2 - g.planetSize / 1 + g.planetSize / 4,
        (g.displayHeight*legendModifierH/3.5)*5+g.displayHeight*legendModifierH/21.9,
        (g.displayWidth*legendModifierH/4)*3-(g.displayWidth*legendModifierH/4)/2 - g.planetSize / 6 + g.planetSize / 4,
        (g.displayHeight*legendModifierH/3.5)*5 - g.planetSize / 1.3+g.displayHeight*legendModifierH/21.9,
        (g.displayWidth*legendModifierH/4)*3-(g.displayWidth*legendModifierH/4)/2 - g.planetSize / 6 + g.planetSize / 4,
        (g.displayHeight*legendModifierH/3.5)*5 + g.planetSize / 1.3+g.displayHeight*legendModifierH/21.9,
        (g.displayWidth*legendModifierH/4)*3-(g.displayWidth*legendModifierH/4)/2 - g.planetSize / 1 + g.planetSize / 4,
        (g.displayHeight*legendModifierH/3.5)*5+g.displayHeight*legendModifierH/21.9
      );
  
  g.fill(255);
  g.noStroke();
  
  g.text("In-Person",(g.displayWidth*legendModifierH/4)*4-(g.displayWidth*legendModifierH/4)/2, (g.displayHeight*legendModifierH/3.5)*5+g.displayHeight*legendModifierH/17+g.displayHeight*legendModifierH/21.9);
  
  g.fill(255);
      g.noStroke();
//       for (g.i = 0; i < g.radians(360 + 0); i += g.radians(360 / g.pointCount)) {
//         g.diameter = g.planetSize * 1.8 - g.planetSize / 3;
//         g.x = (g.diameter / 2) * Math.cos(i) + (g.displayWidth*legendModifierH/4)*4-(g.displayWidth*legendModifierH/4)/2;
//         g.y = (g.diameter / 2) * Math.sin(i) + (g.displayHeight*legendModifierH/3.5)*5+g.displayHeight*legendModifierH/21.9;

//         g.ellipse(g.x, g.y, g.planetSize / 4.5);
//         g.angle = 0;
//       }

  //Around how long was your interaction?///////////////////////////////////////////////////////////
      g.fill(255);
  g.textSize(g.displayHeight*legendModifierH / 36);
  g.textAlign(g.CENTER,g.CENTER);
  g.text("Around how long was your interaction?",g.displayWidth*legendModifierH/2, (g.displayHeight*legendModifierH/3.5)*6-g.displayHeight*legendModifierH/12.5+g.displayHeight*legendModifierH/80);  
  
  g.textSize(g.displayHeight*legendModifierH / 50);
  g.textAlign(g.CENTER,g.TOP);
  
  g.fill(255);
  g.noStroke();
  g.text("3 h+",(g.displayWidth*legendModifierH/6)*1-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*6+g.displayHeight*legendModifierH/17+g.displayHeight*legendModifierH/80);
  g.fill("rgb(150,150,150)");
  g.circle((g.displayWidth*legendModifierH/6)*1-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*6+g.displayHeight*legendModifierH/80, g.displayWidth*legendModifierH / 10.5);
  
  g.fill(255);
  g.noStroke();
  g.text("1 - 3 h",(g.displayWidth*legendModifierH/6)*2-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*6+g.displayHeight*legendModifierH/17+g.displayHeight*legendModifierH/80);
  g.fill("rgb(150,150,150)");
  g.circle((g.displayWidth*legendModifierH/6)*2-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*6+g.displayHeight*legendModifierH/80, g.displayWidth*legendModifierH / 14);
  
  g.fill(255);
  g.noStroke();
  g.text("30 min\n- 1 h",(g.displayWidth*legendModifierH/6)*3-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*6+g.displayHeight*legendModifierH/17+g.displayHeight*legendModifierH/80);
  g.fill("rgb(150,150,150)");
  g.circle((g.displayWidth*legendModifierH/6)*3-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*6+g.displayHeight*legendModifierH/80, g.displayWidth*legendModifierH / 18);
  
  g.fill(255);
  g.noStroke();
  g.text("10 min\n- 30 min",(g.displayWidth*legendModifierH/6)*4-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*6+g.displayHeight*legendModifierH/17+g.displayHeight*legendModifierH/80);
  g.fill("rgb(150,150,150)");
  g.circle((g.displayWidth*legendModifierH/6)*4-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*6+g.displayHeight*legendModifierH/80, g.displayWidth*legendModifierH / 23);
  
  g.fill(255);
  g.noStroke();
  g.text("5 min\n- 10 min",(g.displayWidth*legendModifierH/6)*5-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*6+g.displayHeight*legendModifierH/17+g.displayHeight*legendModifierH/80);
  g.fill("rgb(150,150,150)");
  g.circle((g.displayWidth*legendModifierH/6)*5-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*6+g.displayHeight*legendModifierH/80, g.displayWidth*legendModifierH / 32);
  
  g.fill(255);
  g.noStroke();
  g.text("few min\nor sec",(g.displayWidth*legendModifierH/6)*6-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*6+g.displayHeight*legendModifierH/17+g.displayHeight*legendModifierH/80);
  g.fill("rgb(150,150,150)");
  g.circle((g.displayWidth*legendModifierH/6)*6-(g.displayWidth*legendModifierH/6)/2, (g.displayHeight*legendModifierH/3.5)*6+g.displayHeight*legendModifierH/80, g.displayWidth*legendModifierH / 44);
  
  //How did you feel about the interaction?//////////////////////////////////////////////////////////
  g.fill(255);
  g.textSize(g.displayHeight*legendModifierH / 36);
  g.textAlign(g.CENTER,g.CENTER);
  g.text("How did you feel about the interaction?",g.displayWidth*legendModifierH/2, (g.displayHeight*legendModifierH/3.5)*7-g.displayHeight*legendModifierH/12+g.displayHeight*legendModifierH/120);  
  
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
  g.circle((g.displayWidth*legendModifierH/5)*i-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*7+g.displayHeight*legendModifierH/120, g.planetSize);
  }
  
  g.textSize(g.displayHeight*legendModifierH / 50);
  g.textAlign(g.CENTER,g.TOP);
  
  g.fill(255);
  g.text("Very Good",(g.displayWidth*legendModifierH/5)*1-(g.displayWidth*legendModifierH/5)/2,
       (g.displayHeight*legendModifierH/3.5)*7+g.displayHeight*legendModifierH/13+g.displayHeight*legendModifierH/120);
  
  g.fill(255);
  g.text("Good",(g.displayWidth*legendModifierH/5)*2-(g.displayWidth*legendModifierH/5)/2,
       (g.displayHeight*legendModifierH/3.5)*7+g.displayHeight*legendModifierH/13+g.displayHeight*legendModifierH/120);

  g.fill(255);
  g.text("Neutral",(g.displayWidth*legendModifierH/5)*3-(g.displayWidth*legendModifierH/5)/2,
       (g.displayHeight*legendModifierH/3.5)*7+g.displayHeight*legendModifierH/13+g.displayHeight*legendModifierH/120);

  g.fill(255);
  g.text("Bad",(g.displayWidth*legendModifierH/5)*4-(g.displayWidth*legendModifierH/5)/2, (g.displayHeight*legendModifierH/3.5)*7+g.displayHeight*legendModifierH/13+g.displayHeight*legendModifierH/120);

  g.fill(255);
  g.text("Very Bad",(g.displayWidth*legendModifierH/5)*5-(g.displayWidth*legendModifierH/5)/2,
       (g.displayHeight*legendModifierH/3.5)*7+g.displayHeight*legendModifierH/13+g.displayHeight*legendModifierH/120);
  
  ////for seeing the top of the legend canvas
  //   g.stroke(255);
  // g.strokeWeight(strokeModifier*10);
  // g.fill(255);
  // g.line(0,0,g.displayWidth*legendModifierH,0);
}
}

var myCanvasLegend = new p5 (legend, 'myCanvasLegendHTML');