// Button 
$("body > header > button").click(function(){
  console.log ("o")
  $("body > div.instructions.cache1").slideToggle(1500);
});

$("body > div.instructions.cache1 > button.btn-default.btn-lg.posititonBtn").click(function(){
  console.log ("o")
  // $("body > div.border.cache2").slideToggle(1500);
  window.location.href = "index.html"
  ff  
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
  // ctx.fillStyle = "deeppink";
//   var ennemyImage = new Image();
// ennemyImage.src = "./images/catennemy.png";
  ctx.drawImage(pipeImage,this.x, this.y, this.width, this.height);
  // ctx.drawImage(pipeImage2,this.x, this.y, this.width, this.height);
 
  
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
    // window.location.href = "index4.html"
    console.log ("YOU WIN");
    // var canvas2 = document.querySelector(".win");
    // var ctx2 = canvas.getContext("2d");
    ctx.font = "50px Impact";
    ctx.textBaseline = "hanging"
    ctx.fillText("YOU WIN!",420,265);
    clearInterval(Pipe);
    clearInterval(onePipe);
   

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
      // $("body > div.instructions.cache1 > div.plus > h2 > div:nth-child(2)").hide ();
         
      }
  });

  return hasCollided;
}

// function collision with the bonus 
// function bonusCollision () {
//   var hasCollided2 = false;
//     if (collision(hero, bonus)){
//       hasCollided2 = true;
//       updateStuff();
//       hero.y = 100;
      
//      // reset the game ?    
//   };
//   return hasCollided2;
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
hero2Image.src = "./images/soucoup.png";
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
bonusImage.src = "./images/mexique .png";
var bonus = {
  x: Math.floor(Math.random() * 1000),
  y: 100,
  width: 62.95,
  height: 40.95,
  drawMe: function () {
    ctx.drawImage(bonusImage, this.x, this.y, this.width, this.height);
  }
};
var bonus2Image = new Image();
bonus2Image.src = "./images/mexique .png";
var bonus2 = {
  x: Math.floor(Math.random() * 1000),
  y: 245,
  width: 62.95,
  height: 40.95,
  drawMe: function () {
    ctx.drawImage(bonus2Image, this.x, this.y, this.width, this.height);
  }
};
var score = 0; 

var bonus3Image = new Image();
bonus3Image.src = "./images/mexique .png";
var bonus3 = {
  x: Math.floor(Math.random() * 1000),
  y: 380,
  width: 62.95,
  height: 31.95,
  drawMe: function () {
    ctx.drawImage(bonus3Image, this.x, this.y, this.width, this.height);
  }
};



var pipeImage = new Image();
pipeImage.src = "./images/mexique .png";

var pipeImage2 = new Image();
pipeImage2.src = "./images/milky.jpg";
///////////////////////
// ligne obstacle
var allPipes = [
  //ligne 1
  new Pipe(pipeImage,100, 70, 62.95, 31.95),
  new Pipe(pipeImage,300, 70, 62.95, 31.95),
  new Pipe(pipeImage, 500, 70, 62.95, 31.95),
  new Pipe(pipeImage, 700, 70, 62.95, 31.95),
  new Pipe(pipeImage, 800, 70, 62.95, 31.95),
  new Pipe(pipeImage, 1000, 70, 62.95, 31.95),
  new Pipe(pipeImage, 10, 70, 62.95, 31.95),
 
  // ligne 2
  new Pipe(pipeImage2,200, 170, 62.95, 31.95),
  new Pipe(pipeImage2,500, 170, 62.95, 31.95),
  new Pipe(pipeImage2,10, 170, 62.95, 31.95),

  // ligne 3
  new Pipe(pipeImage2,100, 350, 62.95, 31.95),
  new Pipe(pipeImage2,500, 350, 62.95, 31.95),
  new Pipe(pipeImage2,0, 350, 62.95, 31.95),

  //ligne 4
  new Pipe(pipeImage2,50, 450, 62.95, 31.95),
  new Pipe(pipeImage2,400, 450, 62.95, 31.95),
  new Pipe(pipeImage2,250, 450, 62.95, 31.95),

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
//  lose(lose);
//  initial();
//  life();

// midddle obstacle == useless ? ???? 
  // ctx.fillStyle = "green";
  // var middle1 = ctx.fillRect(840,215,30,70);
  // var middle2 = ctx.fillRect(470,215,30,70);
  // var middle3  = ctx.fillRect(150,215,30,70);
  // win.drawMe();

  hero.drawMe();
  hero2.drawMe();
  bonus.drawMe();
  bonus2.drawMe();
  bonus3.drawMe();

  allPipes.forEach(function (onePipe) {
  // onePipe.src = "./images/tree.png"
    
    onePipe.x -= Math.floor(Math.random()*7);
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
  
  
  requestAnimationFrame(function () {
    updateStuff();
  });

}

// start the drawing loop
updateStuff();

// -----------------------------------------------------------------------------

var body = document.querySelector("body");
body.onkeydown = function () {
  // stop celine from moving if she has collided
  if (pipeCollision()) {
    return;
  }
  // if (hero.x === bonus3.y && hero.y === bonus3.y)
  // alert("boloss")


  switch (event.keyCode) {
    case 38: // up arrow
      hero.y -= 15;
      score += 1;
      $("#compteur").text(score + "PTS" )
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


// chronometrer 

function Chronometer() {
  this.currentTime = 10;
  this.intervalId = 0;
  this.seconds = ""; 
  this.minutes = ""; 
}

Chronometer.prototype.startClick = function () {
  var that = this; 
  function incrementTime(){
    that.currentTime --;
    that.setTime()
    printTime()

  }
 this.intervalId = setInterval(incrementTime,1000);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60)
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (n) {
 if (n.toString().length === 2) return n.toString()
 else return "0" + n
 
};
Chronometer.prototype.minTime = function () {
if (this.currentTime <= 0){
  location.reload();
  return minTime
}}

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes())
  this.seconds = this.twoDigitsNumber(this.setSeconds())

};

var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');

function printTime() {
  minDec.innerText = chronometer.minutes[0];
  minUni.innerText = chronometer.minutes[1];
  secDec.innerText = chronometer.seconds[0];
  secUni.innerText = chronometer.seconds[1];
}
// Start/Stop Button
btnLeft.addEventListener('click', function () {
  chronometer.startClick();
});


