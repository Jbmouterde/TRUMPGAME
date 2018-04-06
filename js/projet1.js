
// Button 
$("body > header > button").click(function(){
  location.reload();
  // $("body > div.instructions.cache1").slideToggle(1500);
});

// $("body > div.instructions.cache1 > button.btn-default.btn-lg.posititonBtn").click(function(){
//   location.reload();
  
// });

// FONCTION CONSTRUCTOR ENNEMY
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

// COLLISION PARTS
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
  if(hero.y < 5 && hero.x === 465){
    window.location.href = "index3.html"
  }
}
// COLLISION WITH THE BLOCKS
function pipeCollision () {
  var hasCollided = false;

  allPipes.forEach(function (onePipe) {
    if (collision(hero, onePipe)){
      hasCollided = true;
      window.location.href = "index6.html"
      // updateStuff(); 
      // hero.x = 450;
      // hero.y = 530;
      // $("body > div.instructions.cache1 > div.plus > h2 > div:nth-child(1)").hide ();    
      }
  });
  return hasCollided;
}

// -----------------------------------------------------------------------------

// HERO 
var canvas = document.querySelector(".gameCanvas");
var ctx = canvas.getContext("2d");

// hero 
var heroImage = new Image();
heroImage.src = "./images/trum.png";
var hero = {
  x: 450,
  y: 530,
  width: 48.40,
  height: 62.95,
  drawMe: function () {
    if (this.x <= 0) {
      this.x = 0;
    } else if (this.x >= innerWidth - this.width) {
      this.x = innerWidth - this.width;
    }

    if (this.y <= 0) {
      this.y = 0;
    } else if (this.y >= innerHeight - this.height) {
      this.y = innerHeight - this.height;
    }
   
    ctx.drawImage(heroImage, this.x, this.y, this.width, this.height);
  }
};
// WIN IMAGE ; 
var hero2Image = new Image();
hero2Image.src = "./images/win .png";
var hero2 = {
  x: 450,
  y: 10,
  width: 62.95,
  height: 40.95,
  drawMe: function () {
    ctx.drawImage(hero2Image, this.x, this.y, this.width, this.height);
  }
};
// SCORE 
var score = 0; 

// Bonus 
// var bonusImage = new Image();
// bonusImage.src = "./images/dollar.png";
// var bonus = {
//   x: Math.floor(Math.random() * 1000),
//   y: 100,
//   width: 62.95,
//   height: 40.95,
//   drawMe: function () {
//     ctx.drawImage(bonusImage, this.x, this.y, this.width, this.height);
//   },
//   clearMe: function() {
//     ctx.clearRect(bonusImage);
//    }
// };

var bonus2Image = new Image();
bonus2Image.src = "./images/dollar.png";
var bonus2 = {
  x: Math.floor(Math.random() * 1000),
  y: 110,
  width: 62.95,
  height: 40.95,
  drawMe: function () {
    ctx.drawImage(bonus2Image, this.x, this.y, this.width, this.height);
  },
  clearMe: function() {
    ctx.clearRect(bonus2Image);
   }
};

// var bonus3Image = new Image();
// bonus3Image.src = "./images/tree.png";
// var bonus3 = {
//   x: Math.floor(Math.random() * 1000),
//   y: 380,
//   width: 62.95,
//   height: 31.95,
//   drawMe: function () {
//     ctx.drawImage(bonus3Image, this.x, this.y, this.width, this.height);
//   },
//   clearMe: function() {
//     ctx.clearRect(bonus3Image);
//    }
// };


///////////////////////
var pipeImage = new Image();
pipeImage.src = "./images/catennemy.png";

// ligne obstacle
var allPipes = [
  //ligne 1
  new Pipe(pipeImage,100, 80, 30, 30),
  new Pipe(pipeImage,300, 80, 30, 30),
  new Pipe(pipeImage, 500, 80, 30, 30),
  new Pipe(pipeImage, 700, 80, 30, 30),
  new Pipe(pipeImage, 800, 80, 30, 30),
  new Pipe(pipeImage, 1000, 80, 30, 30),
  new Pipe(pipeImage, 10, 80, 30, 30),
 
  // ligne 2
  new Pipe(pipeImage,200, 170, 30, 30),
  new Pipe(pipeImage,500, 170, 30, 30),
  new Pipe(pipeImage,10, 170, 30, 30),

  // ligne 3
  new Pipe(pipeImage,100, 350, 30, 30),
  new Pipe(pipeImage,500, 350, 30, 30),
  new Pipe(pipeImage,0, 350, 30, 30),

  //ligne 4
  new Pipe(pipeImage,50, 450, 30, 30),
  new Pipe(pipeImage,400, 450, 30, 30),
  new Pipe(pipeImage,250, 450, 30, 30),

];

function createStuff () {
  // clear old drawings from the entire canvas before drawing again
  ctx.clearRect(0, 0, canvas.width, canvas.height);
// CALL FONCTION WIN
 win(win);
  // DRAW BONUS
  // bonus.drawMe();
  // bonus2.drawMe();
  // bonus3.drawMe();
// DRAW HERO
  hero.drawMe()
  
  hero2.drawMe();
  
 
// DRAW THE ENNEMIES
allPipes.forEach(function (onePipe) {
  onePipe.x -= Math.floor(Math.random()*3.5);
  onePipe.drawMe();
  if (onePipe.x <= -onePipe.width) {
    onePipe.x = canvas.width;
  }
}); 

  // 
  requestAnimationFrame(function () {
    createStuff();
  });
}


function updateStuff () {
//   // clear old drawings from the entire canvas before drawing again
//  ctx.clearRect(0, 0, canvas.width, canvas.height);
// // CALL FONCTION WIN
//  win(win);
// // DRAW HERO
//   hero.drawMe();
  
//   // DRAW BONUS
//   bonus.drawMe();
//   bonus2.drawMe();
//   bonus3.drawMe();
// // DRAW THE ENNEMIES
//   allPipes.forEach(function (onePipe) {
    
//     onePipe.x -= Math.floor(Math.random()*3.5);
//     onePipe.drawMe();
//     if (onePipe.x <= -onePipe.width) {
//       onePipe.x = canvas.width;
//     }
//   });

  // COLLISION ENNEMY

  // pipeCollision()
 // COLLISION BONUS 
//  if (collision(hero,bonus3) === true){
//   bonus3.clearMe()
// }
//  if (collision(hero,bonus3) === false){
//   bonus3.drawMe()
// }
 
if (collision(hero,bonus2) === true){
  bonus2.clearMe()
  score += 50;
  $("#compteur").text(score + "PTS" )
}
 if (collision(hero,bonus2) === false){
  bonus2.drawMe()
}
// if (collision(hero,bonus3) === true){
//   bonus3.clearMe()
//   score += 50;
//   $("#compteur").text(score + "PTS" )
// }
//  if (collision(hero,bonus3) === false){
//   bonus3.drawMe()
// }
// if (collision(hero,bonus) === true){
//   bonus.clearMe()
// }
//  if (collision(hero,bonus) === false){
//   bonus.drawMe()
// }

  requestAnimationFrame(function () {
    updateStuff()
  });
}

// start the drawing loop
createStuff();
updateStuff();


// -----------------------------------------------------------------------------

var body = document.querySelector("body");
body.onkeydown = function () {
  // IF COLLISION ENNEMY
  if (pipeCollision()) {
    return;
  }
  // IF COLLISION BONUS 
// if (collision(hero.x,bonus.x) && collision(hero.y, bonus.y)){
//   bonus.clearMe()
// }
// if (collision(hero.x,bonus2.x) && collision(hero.y, bonus2.y)){
//   bonus2.clearMe()
//   score += 50;
//   $("#compteur").text(score + "PTS" )
// }
// if (collision(hero,bonus3)){
//   bonus3.clearMe()
//   score += 50;
//     $("#compteur").text(score + "PTS" )
    
// }
// COMMANDS  
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
  }
};

