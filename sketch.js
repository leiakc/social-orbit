//more modifications
//-centered the bottom buttons (next and done)
//-reset planet variable values when adding a new social interaction
//-adjusted stroke size for planet code decorations depending on planet size ((so decorations are relative size)) -- so they aren't too big and overcrowd the planet
//-adjusted verygood/good sun decorations so they can be seen better -- orange stroke behind the white stroke

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
  var myCanvas = createCanvas(windowWidth, (windowHeight / 4) * 2.5);
  myCanvas.parent("myCanvasHTML");

  //vars to help w relative proportions
  centerWidth = windowWidth / 2;
  thirdHeight = windowHeight / 3.1;

  //creating the solar system
  overall.push(new SolarSystem(0, 0));

  //stars setup
  for (let i = 0; i < starNum; i++) {
    x1[i] = int(random(0, windowWidth));
    y1[i] = int(random(0, windowHeight));
    size1[i] = int(random(1, windowWidth / 50));
  }

  //saving today's date
  d = day();
  m = month();
  y = year();

  //text font setup
  textFont("Helvetica");
}

//draw----------------------------------------------------------------------------------------------------------------
function draw() {
  background(0);

  //width and height of sun circle
  sunWidth = windowWidth / 10;

  //var for space btwn rings
  ringSpacer = windowWidth / 5;

  //sun + stars display
  overall[0].display();

  //drawing planet rings
  noFill();
  strokeWeight(1);
  stroke(255);
  ellipse(centerWidth, thirdHeight, sunWidth + ringSpacer * 1);
  ellipse(centerWidth, thirdHeight, sunWidth + ringSpacer * 2);
  ellipse(centerWidth, thirdHeight, sunWidth + ringSpacer * 3);
  ellipse(centerWidth, thirdHeight, sunWidth + ringSpacer * 4);

  //planets
  fill(0);
  noStroke();

  for (let i = 0; i < entry.length; i++) {
    //displays and moves planets
    entry[i].display();
  }

  //angle increases so that the planets keep rotating around the sun
  angle += 0.02;

  //on last page, writes "Social Orbit" and "[today's date]" at bottom left of the canvas
  if (screen == 4) {
    fill(255);
    noStroke();
    textAlign(RIGHT);
    textSize(windowHeight / 33);

    textSize(windowHeight / 43);
    text("Social Orbit", (windowWidth / 4) * 3.93, (windowHeight / 4) * 2.27);

    textSize(windowHeight / 33);
    //if the month number is less than 10, put a 0 before the month number display date
    if (m < 10) {
      //if the day number is less than 10, put a 0 before the day number display date
      if (d < 10) {
        text(
          "0" + d + "/0" + m + "/" + y,
          (windowWidth / 4) * 3.93,
          (windowHeight / 4) * 2.42
        );
      } else {
        text(
          d + "/0" + m + "/" + y,
          (windowWidth / 4) * 3.9,
          (windowHeight / 4) * 2.42
        );
      }
    } else {
      //if the day number is less than 10, put a 0 before the day number display date
      if (d < 10) {
        text(
          "0" + d + "/" + m + "/" + y,
          (windowWidth / 4) * 3.9,
          (windowHeight / 4) * 2.42
        );
      } else {
        text(
          d + "/" + m + "/" + y,
          (windowWidth / 4) * 3.9,
          (windowHeight / 4) * 2.42
        );
      }
    }
  }
}

//functions for the user input questions------------------------------------------------------------------------------
//the functions change the value for a specific data visualization attribute

///////////beginning question//////////////////
//day feeling
function option1DayFeeling() {
  dayFeeling = 1;
}

function option2DayFeeling() {
  dayFeeling = 2;
}

function option3DayFeeling() {
  dayFeeling = 3;
}

function option4DayFeeling() {
  dayFeeling = 4;
}

function option5DayFeeling() {
  dayFeeling = 5;
}

///////////social interaction entry//////////////////

//relationship type
function option1Relationship() {
  relationshipType = 1;
}

function option2Relationship() {
  relationshipType = 2;
}

function option3Relationship() {
  relationshipType = 3;
}

function option4Relationship() {
  relationshipType = 4;
}

function option5Relationship() {
  relationshipType = 5;
}

function option6Relationship() {
  relationshipType = 0;
}

//communication method
function option1Communication() {
  comType = 1;
}

function option2Communication() {
  comType = 2;
}

function option3Communication() {
  comType = 3;
}

function option4Communication() {
  comType = 4;
}

//interaction length
function option1InteractionLength() {
  interactionLength = 1;
}

function option2InteractionLength() {
  interactionLength = 2;
}

function option3InteractionLength() {
  interactionLength = 3;
}

function option4InteractionLength() {
  interactionLength = 4;
}

function option5InteractionLength() {
  interactionLength = 5;
}

function option6InteractionLength() {
  interactionLength = 6;
}

//time of day of interaction
function option1TimeOfDay() {
  timeOfDay = 1;
}

function option2TimeOfDay() {
  timeOfDay = 2;
}

function option3TimeOfDay() {
  timeOfDay = 3;
}

function option4TimeOfDay() {
  timeOfDay = 4;
}

function option5TimeOfDay() {
  timeOfDay = 5;
}

//interaction feeling
function option1Interaction() {
  interactionFeeling = 1;
}

function option2Interaction() {
  interactionFeeling = 2;
}

function option3Interaction() {
  interactionFeeling = 3;
}

function option4Interaction() {
  interactionFeeling = 4;
}

function option5Interaction() {
  interactionFeeling = 5;
}

///////////ending questions//////////////////

//feeling abt overall day's interactions
function option1SIFeeling() {
  SIFeeling = 1;
}

function option2SIFeeling() {
  SIFeeling = 2;
}

function option3SIFeeling() {
  SIFeeling = 3;
}

function option4SIFeeling() {
  SIFeeling = 4;
}

function option5SIFeeling() {
  SIFeeling = 5;
}

//satisfaction w day's interactions
function option1DaySatisfaction() {
  satisfactionDay = 1;
}

function option2DaySatisfaction() {
  satisfactionDay = 2;
}

function option3DaySatisfaction() {
  satisfactionDay = 3;
}

function option4DaySatisfaction() {
  satisfactionDay = 4;
}
function option5DaySatisfaction() {
  satisfactionDay = 5;
}

//next pressed
//goes to the next screen
//by hiding/showing different html elements
function nextPressed() {
  overall[0] = new SolarSystem(dayFeeling, satisfactionDay, SIFeeling);

  if (screen == 0) {
    screen = 1;
    document.getElementById("screen00").style.display = "none";
    document.getElementById("screen01").style.display = "block";

    document.getElementById("nextButton").style.visibility = "hidden";
  } else if (screen == 2) {
    screen = 1;
    document.getElementById("screen02").style.display = "none";
    document.getElementById("screen01").style.display = "block";

    document.getElementById("nextButton").style.visibility = "hidden";

    whichEntry += 1;
    
    personName = document.getElementById("who").value;

    //makes a new social interaction entry to create a new planet
    entry[whichEntry] = new Planet(
      personName,
      interactionFeeling,
      interactionLength,
      timeOfDay,
      relationshipType,
      comType
    );
  } else if (screen == 3) {
    screen = 4;
    document.getElementById("screen03").style.display = "none";
    document.getElementById("screen04").style.display = "block";

    document.getElementById("nextButton").style.visibility = "hidden";
    document.getElementById("doneButton").style.visibility = "hidden";

    document.getElementById("saveButtonImage").style.visibility = "visible";
    document.getElementById("saveButtonData").style.visibility = "visible";
  }

  //resets the input field for the forms
  document.getElementById("myform0").reset();
  document.getElementById("myform1").reset();
  document.getElementById("myform2").reset();
  document.getElementById("myform3").reset();
  document.getElementById("myform4").reset();
  document.getElementById("myform5").reset();
}

//buttons for: adding social interaction OR skipping it
//---adding social interaction
function addSocial() {
  screen = 2;
  document.getElementById("skipSocialButton").style.display = "none";
  document.getElementById("skipButton").style.visibility = "visible";
  document.getElementById("screen01").style.display = "none";
  document.getElementById("screen02").style.display = "block";

  document.getElementById("nextButton").style.visibility = "visible";

  //resets all the planet input variables values
  interactionFeeling = 0;
  interactionLength = 0;
  timeOfDay = 0;
  relationshipType = 0;
  comType = 0;
}

//---not adding a social interaction and going to the last page
function skipSocial() {
  screen = 3;
  document.getElementById("screen01").style.display = "none";
  document.getElementById("screen03").style.display = "block";

  document.getElementById("nextButton").style.display = "none";
  // document.getElementById("nextButton").style.visibility = "hidden";
  document.getElementById("doneButton").style.visibility = "visible";
}

//saves image of canvas
function saveIT() {
  saveCanvas("myOrbit", ".jpg");
}

//saves the data
//- in two sections:
//--- solarSystemData for beginning and ending questions
//--- planetData for social interaction entries
function saveData() {
  saveJSON(overall, "solarSystemData.json");
  saveJSON(entry, "planetData.json");
}

//class for the SolarSystem includes:
//-the sun
//-the stars
//---which are affected by the beginning and ending user input questions
class SolarSystem {
  //entry information
  //to make solar system

  constructor(day_feeling, satisfaction_day, si_feeling) {
    //feeling about the day determines
    //---colour of the sun
    if (day_feeling == 1) {
      this.sunColour = "#FFF6A3";
    } else if (day_feeling == 2) {
      this.sunColour = "#FFEB44";
    } else if (day_feeling == 3) {
      this.sunColour = "#EBD300";
    } else if (day_feeling == 4) {
      this.sunColour = "#BFAC00";
    } else if (day_feeling == 5) {
      this.sunColour = "#857701";
    } else {
      this.sunColour = "#EBD300";
    }

    //satisfaction about day's interactions affects
    //---decorations on the sun
    if (satisfaction_day == 1) {
      this.satisfaction_day = 1;
    } else if (satisfaction_day == 2) {
      this.satisfaction_day = 2;
    } else if (satisfaction_day == 3) {
      this.satisfaction_day = 3;
    } else if (satisfaction_day == 4) {
      this.satisfaction_day = 4;
    } else if (satisfaction_day == 5) {
      this.satisfaction_day = 5;
    } else {
      this.satisfaction_day = 3;
    }

    //feeling about the day's social interactions affects
    //---display of stars
    this.si_feeling = si_feeling;
  }

  display() {
    //drawing stars
    noStroke();
    for (let i = 0; i < starNum; i++) {
      fill(255);
      if (this.satisfaction_day == 1) {
        fill(255, 255, 255, 50);
        ellipse(x1[i], y1[i], size1[i] * 3.5 + 3);

        fill(255, 255, 255, 90);
        ellipse(x1[i], y1[i], size1[i] * 2.2 + 3);

        fill(255);
        ellipse(x1[i], y1[i], size1[i] + 3);
      } else if (this.satisfaction_day == 2) {
        fill(255);
        ellipse(x1[i], y1[i], size1[i] + 3);
      } else if (this.satisfaction_day == 3) {
        fill(255);
        stroke(255);
        strokeWeight(3.5);
        point(x1[i], y1[i]);
        noStroke();
      } else if (this.satisfaction_day == 4) {
        fill(255);
        square(x1[i], y1[i], size1[i] + 3);
      } else if (this.satisfaction_day == 5) {
        fill(255, 255, 255, 50);
        square(x1[i], y1[i], size1[i] * 3 + 1);

        fill(255, 255, 255, 90);
        square(x1[i], y1[i], size1[i] * 2 + 1);

        fill(255);
        square(x1[i], y1[i], size1[i] + 1);
      } else {
      }
    }

    //drawing sun
    fill(this.sunColour);
    noStroke();
    circle(centerWidth, thirdHeight, windowWidth / 7.5);

    //sun decoration for overall social interaction feeling
    if (this.si_feeling == 1) {
      
      stroke("#E49300");
      strokeWeight(3);
      circle(centerWidth, thirdHeight, windowWidth / 11);
      
      stroke(255);
      strokeWeight(1);
      circle(centerWidth, thirdHeight, windowWidth / 11);
      
      stroke("#E49300");
      strokeWeight(3);
      circle(centerWidth, thirdHeight, windowWidth / 18);
      
      stroke(255);
      strokeWeight(1);
      circle(centerWidth, thirdHeight, windowWidth / 18);
      
      noFill();

      stroke("#E49300");
      strokeWeight(4.5);
      circle(
        centerWidth + sunWidth / 4,
        thirdHeight + sunWidth / 4,
        windowWidth / 15
      );
      
      stroke(255);
      strokeWeight(2.5);
      circle(
        centerWidth + sunWidth / 4,
        thirdHeight + sunWidth / 4,
        windowWidth / 15
      );
        
      stroke("#E49300");
      strokeWeight(3.5);
      circle(
        centerWidth - sunWidth / 4,
        thirdHeight - sunWidth / 3,
        windowWidth / 20
      );
      
      stroke(255);
      strokeWeight(1.5);
      circle(
        centerWidth - sunWidth / 4,
        thirdHeight - sunWidth / 3,
        windowWidth / 20
      );
      
    } else if (this.si_feeling == 2) {
      noFill();
      stroke("#E49300");
      strokeWeight(4.5);
      circle(
        centerWidth + sunWidth / 4,
        thirdHeight + sunWidth / 4,
        windowWidth / 15
      );
      strokeWeight(3.5);
      circle(
        centerWidth - sunWidth / 4,
        thirdHeight - sunWidth / 3,
        windowWidth / 20
      );
      
      stroke(255);
      strokeWeight(2.5);
      circle(
        centerWidth + sunWidth / 4,
        thirdHeight + sunWidth / 4,
        windowWidth / 15
      );
      strokeWeight(1.5);
      circle(
        centerWidth - sunWidth / 4,
        thirdHeight - sunWidth / 3,
        windowWidth / 20
      );
    } else if (this.si_feeling == 3) {
      noStroke();
      fill(150, 150, 150, 150);
      circle(centerWidth + sunWidth / 4, thirdHeight, windowWidth / 27.5);
    } else if (this.si_feeling == 4) {
      stroke(0);
      strokeWeight(2);
      line(
        centerWidth - windowWidth / 20,
        thirdHeight - windowWidth / 20,
        centerWidth + windowWidth / 20,
        thirdHeight + windowWidth / 20
      );
    } else if (this.si_feeling == 5) {
      stroke(0);
      strokeWeight(2);
      line(
        centerWidth - windowWidth / 20,
        thirdHeight - windowWidth / 20,
        centerWidth + windowWidth / 20,
        thirdHeight + windowWidth / 20
      );

      strokeWeight(4);
      line(
        centerWidth + windowWidth / 40 - sunWidth / 5,
        thirdHeight - windowWidth / 40 - sunWidth / 5,
        centerWidth - windowWidth / 40 - sunWidth / 5,
        thirdHeight + windowWidth / 40 - sunWidth / 5
      );

      strokeWeight(6);
      line(
        centerWidth + windowWidth / 30,
        thirdHeight - windowWidth / 30,
        centerWidth - windowWidth / 30,
        thirdHeight + windowWidth / 30
      );

      strokeWeight(4);
      line(
        centerWidth + windowWidth / 40 + sunWidth / 5,
        thirdHeight - windowWidth / 40 + sunWidth / 5,
        centerWidth - windowWidth / 40 + sunWidth / 5,
        thirdHeight + windowWidth / 40 + sunWidth / 5
      );
    }
  }
}

//class for Planet creates a planet based on the
//---social interaction entry user input questions
class Planet {
  //entry information
  //to make planet

  constructor(
    person_name,
    interaction_feeling,
    interaction_length,
    time_of_day,
    relationship_type,
    com_type
  ) {
      this.who=person_name;
    //interaction feeling determines
    //---colour of the planet
    if (interaction_feeling == 1) {
      this.planetColour = "#AFE6FF";
    } else if (interaction_feeling == 2) {
      this.planetColour = "#12A4E6";
    } else if (interaction_feeling == 3) {
      this.planetColour = "rgb(150,150,150)";
    } else if (interaction_feeling == 4) {
      this.planetColour = "#FF8181";
    } else if (interaction_feeling == 5) {
      this.planetColour = "#990202";
    } else {
      this.planetColour = "rgb(150,150,150)";
    }

    //interaction length determines
    //---size of the planet
    if (interaction_length == 1) {
      this.planetSize = windowWidth / 10.5;
      this.strokeMultiplier = 1;
    } else if (interaction_length == 2) {
      this.planetSize = windowWidth / 14;
      this.strokeMultiplier = 1;
    } else if (interaction_length == 3) {
      this.planetSize = windowWidth / 18;
      this.strokeMultiplier = 0.9;
    } else if (interaction_length == 4) {
      this.planetSize = windowWidth / 23;
      this.strokeMultiplier = 0.5;
    } else if (interaction_length == 5) {
      this.planetSize = windowWidth / 32;
      this.strokeMultiplier = 0.5;
    } else if (interaction_length == 6) {
      this.planetSize = windowWidth / 44;
      this.strokeMultiplier = 0.3;
    } else {
      this.planetSize = windowWidth / 23;
      this.strokeMultiplier = 0.9;
    }

    //interaction time of day determines
    //---which ring the planet is on
    if (time_of_day == 1) {
      this.time_of_day = 1;
      this.throughout = false;
    } else if (time_of_day == 2) {
      this.time_of_day = 2;
      this.throughout = false;
    } else if (time_of_day == 3) {
      this.time_of_day = 3;
      this.throughout = false;
    } else if (time_of_day == 4) {
      this.time_of_day = 4;
      this.throughout = false;
    } else if (time_of_day == 0) {
      this.time_of_day = int(random(1, 5));
      this.throughout = false;
    } else {
      this.time_of_day = int(random(1, 5));
      this.throughout = true;
    }

    //helps place the planet on the ring
    this.startAngle = 0;

    //randomly determines planet speed
    this.addAngle = random(0, 0.04);

    //relationship type determines
    //---inside decorations on the planet
    this.relationship_type = relationship_type;

    //communication method/type determines
    //---outside decorations of the planet
    this.com_type = com_type;
  }

  display() {
    //planet stuff
    fill(this.planetColour);
    noStroke();

    //keeps planet moving around the sun
    this.startAngle += this.addAngle;

    let planetX =
      centerWidth -
      ((sunWidth + ringSpacer * this.time_of_day) / 2) *
        Math.cos(this.startAngle);
    let planetY =
      ((sunWidth + ringSpacer * this.time_of_day) / 2) *
        Math.sin(this.startAngle) +
      thirdHeight;

    //drawing the planet
    ellipse(planetX, planetY, this.planetSize);

    if (this.throughout == true) {
      //draws a ring around the planet if the social interaction happens throughout the day
      noFill();
      stroke(255);
      strokeWeight(1 * this.strokeMultiplier);
      ellipse(
        centerWidth -
          ((sunWidth + ringSpacer * this.time_of_day) / 2) *
            Math.cos(this.startAngle),
        ((sunWidth + ringSpacer * this.time_of_day) / 2) *
          Math.sin(this.startAngle) +
          thirdHeight,
        this.planetSize + this.planetSize
      );
      noStroke();
    }

    if (this.relationship_type == 1) {
      //friends

      noFill();
      stroke(255);
      strokeWeight(1 * this.strokeMultiplier);
      circle(planetX - this.planetSize / 6, planetY, this.planetSize / 2);
      circle(planetX + this.planetSize / 6, planetY, this.planetSize / 2);
    } else if (this.relationship_type == 2) {
      //family

      fill(255);
      stroke(255);
      strokeWeight(3 * this.strokeMultiplier);
      line(
        planetX - this.planetSize / 2.3,
        planetY,
        planetX + this.planetSize / 2.3,
        planetY
      );
      strokeWeight(2 * this.strokeMultiplier);
      line(
        planetX - this.planetSize / 2.7,
        planetY + this.planetSize / 4,
        planetX + this.planetSize / 2.7,
        planetY + this.planetSize / 4
      );
      line(
        planetX - this.planetSize / 2.7,
        planetY - this.planetSize / 4,
        planetX + this.planetSize / 2.7,
        planetY - this.planetSize / 4
      );
      strokeWeight(1 * this.strokeMultiplier);
      line(
        planetX - this.planetSize / 3.8,
        planetY + this.planetSize / 2.5,
        planetX + this.planetSize / 3.8,
        planetY + this.planetSize / 2.5
      );
      line(
        planetX - this.planetSize / 3.8,
        planetY - this.planetSize / 2.5,
        planetX + this.planetSize / 3.8,
        planetY - this.planetSize / 2.5
      );
    } else if (this.relationship_type == 3) {
      //romantic/dating

      noFill();
      stroke(255);

      strokeWeight(2 * this.strokeMultiplier);
      bezier(
        planetX - this.planetSize / 2,
        planetY,
        planetX - this.planetSize / 8,
        planetY - this.planetSize / 0.75,
        planetX + this.planetSize / 8,
        planetY + this.planetSize / 0.75,
        planetX + this.planetSize / 2,
        planetY
      );

      strokeWeight(1 * this.strokeMultiplier);
      bezier(
        planetX - this.planetSize / 2,
        planetY,
        planetX - this.planetSize / 4,
        planetY - this.planetSize / 1,
        planetX + this.planetSize / 4,
        planetY + this.planetSize / 1,
        planetX + this.planetSize / 2,
        planetY
      );

      bezier(
        planetX - this.planetSize / 2,
        planetY,
        planetX - this.planetSize / 4,
        planetY - this.planetSize / 2,
        planetX + this.planetSize / 4,
        planetY + this.planetSize / 2,
        planetX + this.planetSize / 2,
        planetY
      );
    } else if (this.relationship_type == 4) {
      //work/professional

      stroke(255);
      strokeWeight(0.5 * this.strokeMultiplier);
      // fill(this.planetColour-30);
      circle(planetX, planetY, this.planetSize / 1.25);

      // fill(this.planetColour-60);
      strokeWeight(1 * this.strokeMultiplier);
      circle(planetX, planetY, this.planetSize / 1.8);
      // fill(this.planetColour-90);
      strokeWeight(1.75 * this.strokeMultiplier);
      circle(planetX, planetY, this.planetSize / 4);
    } else if (this.relationship_type == 5) {
      //aquaintances

      noFill();
      stroke(255);
      strokeWeight(1.75 * this.strokeMultiplier);

      circle(planetX - this.planetSize / 2.75, planetY, this.planetSize / 4);
      circle(planetX, planetY, this.planetSize / 4);
      circle(planetX + this.planetSize / 2.75, planetY, this.planetSize / 4);
      circle(planetX, planetY + this.planetSize / 2.75, this.planetSize / 4);
      circle(planetX, planetY - this.planetSize / 2.75, this.planetSize / 4);
    } else {
    }

    if (this.com_type == 1) {
      //written - text

      stroke(255);
      strokeWeight(1.5 * this.strokeMultiplier);
      line(
        planetX + this.planetSize / 3.5,
        planetY - this.planetSize / 4,
        planetX + this.planetSize / 1.4,
        planetY - this.planetSize / 1.6
      );

      line(
        planetX + this.planetSize / 3.5,
        planetY - this.planetSize / 4 + this.planetSize / 4,
        planetX + this.planetSize / 1.4,
        planetY - this.planetSize / 1.6 + this.planetSize / 4
      );

      line(
        planetX + this.planetSize / 3.5,
        planetY - this.planetSize / 4 + (this.planetSize / 4) * 2,
        planetX + this.planetSize / 1.4,
        planetY - this.planetSize / 1.6 + (this.planetSize / 4) * 2
      );
    } else if (this.com_type == 2) {
      //spoken

      fill(255);
      noStroke();
      triangle(
        planetX + this.planetSize / 1 - this.planetSize / 3,
        planetY - this.planetSize / 1.2 + this.planetSize / 3,
        planetX + this.planetSize / 2 - this.planetSize / 3,
        planetY - this.planetSize / 2 + this.planetSize / 3,
        planetX + this.planetSize / 2 - this.planetSize / 3,
        planetY - this.planetSize / 0.9 + this.planetSize / 3
      );
    } else if (this.com_type == 3) {
      //video

      noStroke();

      fill(255);

      ellipse(
        planetX + this.planetSize / 1 - this.planetSize / 2,
        planetY,
        this.planetSize / 4
      );

      bezier(
        planetX - this.planetSize / 1 + this.planetSize / 4,
        planetY,
        planetX - this.planetSize / 6 + this.planetSize / 4,
        planetY - this.planetSize / 1.3,
        planetX - this.planetSize / 6 + this.planetSize / 4,
        planetY + this.planetSize / 1.3,
        planetX - this.planetSize / 1 + this.planetSize / 4,
        planetY
      );
    } else if (this.com_type == 4) {
      //in-person

      //code for drawing multiple circles evenly spaced out
      fill(255);
      noStroke();
      for (let i = 0; i < radians(360 + 0); i += radians(360 / pointCount)) {
        let diameter = this.planetSize * 1.8 - this.planetSize / 3;
        let x = (diameter / 2) * Math.cos(i) + planetX;
        let y = (diameter / 2) * Math.sin(i) + planetY;

        ellipse(x, y, this.planetSize / 4.5);
        angle = 0;
      }
    }
  }
}
