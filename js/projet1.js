
// Button 
$("body > header > button").click(function(){
  console.log ("o")
  $("body > div.instructions.cache1").slideToggle(1500);
});

$("body > div.instructions.cache1 > button.btn-default.btn-lg.posititonBtn").click(function(){
  console.log ("o")
  // $("body > div.border.cache2").slideToggle(1500);
  location.reload();
  
});

// GAME 
function Pipe (pipeImage,myX, myY, myW, myH) {
  // this.pipeImage2 = pipeImage2;
  this.pipeImage = pipeImage;
  this.x = myX;
  this.y = myY;
  this.width = myW;
  this.height = myH;
}

Pipe.prototype.drawMe = function () {
  ctx.drawImage(pipeImage,this.x, this.y, this.width, this.height);
};


function getTop (obj) {
  return obj.y;
}
function getBottom (obj) {
  return obj.y + obj.height;
}
function getLeft (obj) {
  return obj.x;
}
function getRight (obj) {
  return obj.x + obj.width;
}

function collision (objA, objB) {
  return getBottom(objA) >= getTop(objB)    &&
         getTop(objA)    <= getBottom(objB) &&
         getRight(objA)  >= getLeft(objB)   &&
         getLeft(objA)   <= getRight(objB);
}
// WIN 
function win(win){
  if(hero.y < -5 && hero.x === 465 ){
    window.location.href = "index3.html"
    console.log ("YOU WIN");
    // var canvas2 = document.querySelector(".win");
    // var ctx2 = canvas.getContext("2d");
    // ctx.font = "50px Impact";
    // ctx.textBaseline = "hanging"
    // ctx.fillText("YOU WIN!",420,265);
    // clearInterval(Pipe);
    // clearInterval(onePipe);
   

  }
}

// LOSE 
// WIN 
// function lose(lose){
//   if(hasCollided === true ){
//     // var canvas2 = document.querySelector(".win");
//     // var ctx2 = canvas.getContext("2d");
//     ctx.font = "50px Impact";
//     ctx.textBaseline = "hanging"
//     ctx.fillText("YOU LOSE!",420,265);
//     clearInterval(Pipe);
//     clearInterval(onePipe);

//   }
// }
// COLLISION WITH THE BLOCKS
function pipeCollision () {
  var hasCollided = false;

  allPipes.forEach(function (onePipe) {
    if (collision(hero, onePipe)){
      hasCollided = true;
     // reset the game ?
    //  ctx.font = "50px Impact";
    //  ctx.textBaseline = "hanging"
    //  ctx.fillText("YOU LOSE!",420,265);
    //  clearInterval(Pipe);
    //  clearInterval(onePipe);
      updateStuff(); 
      hero.x = 450;
      hero.y = 530;
      $("body > div.instructions.cache1 > div.plus > h2 > div:nth-child(1)").hide ();
         
      }
  });

  return hasCollided;
}

// FONCTION POUR FAIRE DISPARAITRE
// function clearBonus() {
//   ctx.clearRect();
// }

// function life(){
//   if (hasCollided = true){
//    console.log ("mort")
//   }
//   return life ();
  
// }

// -----------------------------------------------------------------------------

// HERO 
var canvas = document.querySelector(".gameCanvas");
var ctx = canvas.getContext("2d");

// middle obstacle
// var middle1 = ctx.fillRect(765,170,40,100);
// var middle2 = ctx.fillRect(450,170,40,100);
// var middle3  = ctx.fillRect(135,170,40,100);

// hero 
var heroImage = new Image();
heroImage.src = "./images/trum.png";
var hero = {
  x: 450,
  y: 530,
  width: 48.40,
  height: 62.95,
  drawMe: function () {
    ctx.drawImage(heroImage, this.x, this.y, this.width, this.height);
  }
};
// WIN IMAGE ; 
var hero2Image = new Image();
hero2Image.src = "./images/win .png";
var hero2 = {
  x: 450,
  y: 0,
  width: 62.95,
  height: 40.95,
  drawMe: function () {
    ctx.drawImage(hero2Image, this.x, this.y, this.width, this.height);
  }
};
// Bonus 
var bonusImage = new Image();
bonusImage.src = "./images/dollar.png";
var bonus = {
  x: Math.floor(Math.random() * 1000),
  y: 100,
  width: 62.95,
  height: 40.95,
  drawMe: function () {
    ctx.drawImage(bonusImage, this.x, this.y, this.width, this.height);
  },
  clearMe: function() {
    ctx.clearRect(this.x, this.y, this.width, this.height);
   }
};
var score = 0; 
var bonus2Image = new Image();
bonus2Image.src = "./images/dollar.png";
var bonus2 = {
  x: Math.floor(Math.random() * 1000),
  y: 245,
  width: 62.95,
  height: 40.95,
  drawMe: function () {
    ctx.drawImage(bonus2Image, this.x, this.y, this.width, this.height);
  },
  clearMe: function() {
    ctx.clearRect(this.x, this.y, this.width, this.height);
   }
};

var bonus3Image = new Image();
bonus3Image.src = "./images/dollar.png";
var bonus3 = {
  x: Math.floor(Math.random() * 1000),
  y: 380,
  width: 62.95,
  height: 31.95,
  drawMe: function () {
    ctx.drawImage(bonus3Image, this.x, this.y, this.width, this.height);
  },
  clearMe: function() {
     ctx.clearRect(this.x, this.y, this.width, this.height);
    }
};



var pipeImage = new Image();
pipeImage.src = "./images/catennemy.png";

var pipeImage2 = new Image();
pipeImage2.src = "./images/milky.jpg";

///////////////////////
// ligne obstacle
var allPipes = [
  //ligne 1
  new Pipe(pipeImage,100, 70, 30, 30),
  new Pipe(pipeImage,300, 70, 30, 30),
  new Pipe(pipeImage, 500, 70, 30, 30),
  new Pipe(pipeImage, 700, 70, 30, 30),
  new Pipe(pipeImage, 800, 70, 30, 30),
  new Pipe(pipeImage, 1000, 70, 30, 30),
  new Pipe(pipeImage, 10, 70, 30, 30),
 
  // ligne 2
  new Pipe(pipeImage2,200, 170, 30, 30),
  new Pipe(pipeImage2,500, 170, 30, 30),
  new Pipe(pipeImage2,10, 170, 30, 30),

  // ligne 3
  new Pipe(pipeImage2,100, 350, 30, 30),
  new Pipe(pipeImage2,500, 350, 30, 30),
  new Pipe(pipeImage2,0, 350, 30, 30),

  //ligne 4
  new Pipe(pipeImage2,50, 450, 30, 30),
  new Pipe(pipeImage2,400, 450, 30, 30),
  new Pipe(pipeImage2,250, 450, 30, 30),

  // middle section 
 


];


function updateStuff () {
  // clear old drawings from the entire canvas before drawing again
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText("Position_x: " + hero.x, 580,40);
  ctx.fillText("Position_y: " + hero.y, 580,60);
  // ctx.fillText("YOU WIN" + hero.y,40, 53 )
  //obstacle middle
 win(win);

//  if bonus3Collision();




  hero.drawMe();
  hero2.drawMe();
  bonus.drawMe();
  bonus2.drawMe();
  bonus3.drawMe();

  allPipes.forEach(function (onePipe) {
    
    onePipe.x -= Math.floor(Math.random()*3.5);
    onePipe.drawMe();
    if (onePipe.x <= -onePipe.width) {
      onePipe.x = canvas.width;
    }
  });
// if(bonusCollision()){
//   return
// }

  if (pipeCollision()) {
    return;
   
  }
 
  if (collision(hero,bonus3)){
    score += 50;
      $("#compteur").text(score + "PTS" )
    bonus3.clearMe()
    
  }
  if (collision(hero,bonus)){
    score += 50;
      $("#compteur").text(score + "PTS" )
    bonus.clearMe()
  }
  if (collision(hero,bonus2)){
    score += 50;
      $("#compteur").text(score + "PTS" )
    bonus2.clearMe()
  }
  
  
  requestAnimationFrame(function () {
    updateStuff();
  });

}

// start the drawing loop
updateStuff();

// -----------------------------------------------------------------------------

var body = document.querySelector("body");
body.onkeydown = function () {
  if (pipeCollision()) {
    return;
  }
  if (collision(hero.x,bonus.x) && collision(hero.y, bonus.y)){
    bonus.clearMe()
  }
  if (collision(hero.x,bonus2.x) && collision(hero.y, bonus2.y)){
    bonus2.clearMe()
  }
  if (collision(hero.x,bonus3.x) && collision(hero.y, bonus3.y)){
    bonus3.clearMe()
    score += 50;
      $("#compteur").text(score + "PTS" )
      
  }


  
  switch (event.keyCode) {
    case 38: // up arrow
      hero.y -= 15;
      break;

    case 37: // left arrow
      hero.x -= 15;
      break;
   
    case 40: // down arrow
      hero.y += 15;
      break;
    
    case 39: // right arrow
      hero.x += 15;
      break;

      case 13: // enter
      hero.x = 450;
      hero.y = 530;
      break;
  }
 
};


// chronometrer //

// function Chronometer() {
//   this.currentTime = 10;
//   this.intervalId = 0;
//   this.seconds = ""; 
//   this.minutes = ""; 
// }

// Chronometer.prototype.startClick = function () {
//   var that = this; 
//   function incrementTime(){
//     that.currentTime --;
//     that.setTime()
//     printTime()

//   }
//  this.intervalId = setInterval(incrementTime,1000);
// };

// Chronometer.prototype.setMinutes = function () {
//   return Math.floor(this.currentTime / 60)
// };

// Chronometer.prototype.setSeconds = function () {
//   return this.currentTime % 60;
// };

// Chronometer.prototype.twoDigitsNumber = function (n) {
//  if (n.toString().length === 2) return n.toString()
//  else return "0" + n
 
// };
// Chronometer.prototype.minTime = function () {
// if (this.currentTime <= 0){
//   location.reload();
//   return minTime
// }}

// Chronometer.prototype.setTime = function () {
//   this.minutes = this.twoDigitsNumber(this.setMinutes())
//   this.seconds = this.twoDigitsNumber(this.setSeconds())

// };

// var chronometer = new Chronometer();
// var btnLeft     = document.getElementById('btnLeft');
// var btnRight    = document.getElementById('btnRight');
// var minDec      = document.getElementById('minDec');
// var minUni      = document.getElementById('minUni');
// var secDec      = document.getElementById('secDec');
// var secUni      = document.getElementById('secUni');

// function printTime() {
//   minDec.innerText = chronometer.minutes[0];
//   minUni.innerText = chronometer.minutes[1];
//   secDec.innerText = chronometer.seconds[0];
//   secUni.innerText = chronometer.seconds[1];
// }
// // Start/Stop Button
// btnLeft.addEventListener('click', function () {
//   chronometer.startClick();
// });


