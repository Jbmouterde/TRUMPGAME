// Button 
$("body > header > button").click(function(){
  window.location.href = "index1.html"
  // $("body > div.instructions.cache1").slideToggle(1500);
});
// $("body > div.instructions.cache1 > button.btn-default.btn-lg.posititonBtn").click(function(){
//   console.log ("o")
//   // $("body > div.border.cache2").slideToggle(1500);
//   window.location.href = "index.html"
//   ff  
// });

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
bonusImage.src = "./images/dollar.png";
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
bonus2Image.src = "./images/dollar.png";
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
bonus3Image.src = "./images/dollar.png";
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
  new Pipe(pipeImage,100, 70, 41.1, 27.5),
  new Pipe(pipeImage,300, 70, 41.1, 27.5),
  new Pipe(pipeImage, 500, 70, 41.1, 27.5),
  new Pipe(pipeImage, 700, 70, 41.1, 27.5),
  new Pipe(pipeImage, 800, 70, 41.1, 27.5),
  new Pipe(pipeImage, 1000, 70, 41.1, 27.5),
  new Pipe(pipeImage, 10, 70, 41.1, 27.5),
 
  // ligne 2
  new Pipe(pipeImage2,200, 170, 41.1, 27.5),
  new Pipe(pipeImage2,500, 170, 41.1, 27.5),
  new Pipe(pipeImage2,10, 170, 41.1, 27.5),

  // ligne 3
  new Pipe(pipeImage2,100, 350, 41.1, 27.5),
  new Pipe(pipeImage2,500, 350, 41.1, 27.5),
  new Pipe(pipeImage2,0, 350, 41.1, 27.5),

  //ligne 4
  new Pipe(pipeImage2,50, 450, 41.1, 27.5),
  new Pipe(pipeImage2,400, 450, 41.1, 27.5),
  new Pipe(pipeImage2,250, 450, 41.1, 27.5),

  // middle section 
 


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
  hero.drawMe();
  hero2.drawMe();
  
 
// DRAW THE ENNEMIES
allPipes.forEach(function (onePipe) {
  // onePipe.src = "./images/tree.png"
    
    onePipe.x -= Math.floor(Math.random()*5);
    onePipe.y += Math.floor(Math.random()*3);

    onePipe.drawMe();
    if (onePipe.x <= -onePipe.width) {
      onePipe.x = canvas.width;
    }
    if (onePipe.y >= canvas.width) {
      onePipe.y = 0;
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
  // stop celine from moving if she has collided
  if (pipeCollision()) {
    return;
  }
  // if (hero.x === bonus3.y && hero.y === bonus3.y)
  // alert("boloss")


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



