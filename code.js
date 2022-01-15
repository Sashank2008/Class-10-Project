var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var sofia = createSprite(29, 24, 20, 20);
var golden_cup = createSprite(400, 380,20,50);
var cardboard1 = createSprite(69, 26, 25, 100);
var cardboard2 = createSprite(51, 123, 100, 25);
var cardboard3 = createSprite(167, 84, 25, 100);
var cardboard4 = createSprite(250, 80, 100, 25);
var cardboard5 = createSprite(246, 176, 100, 25);
var cardboard6 = createSprite(197, 273, 25, 100);
var cardboard7 = createSprite(118, 212, 25, 50);
var cardboard8 = createSprite(152, 249, 50, 25);
var cardboard9 = createSprite(38, 165, 50, 25);
var cardboard10 = createSprite(90, 166, 25, 50);
var cardboard11 = createSprite(36, 272, 75, 25);
var cardboard12 = createSprite(68, 360, 25, 75);
var cardboard13 = createSprite(20, 369, 25, 50);
var cardboard14 = createSprite(145, 312, 50, 25);
var cardboard15 = createSprite(122, 380, 25, 40);
var cardboard16 = createSprite(169, 200, 25, 40);
var cardboard17 = createSprite(36, 216, 25, 50);
var cardboard18 = createSprite(282, 16, 100, 25);
var cardboard19 = createSprite(107.5, 32, 25, 40);
var cardboard20 = createSprite(316, 186, 25, 100);
var cardboard21 = createSprite(283, 276, 100, 25);
var cardboard22 = createSprite(278, 344, 25, 100);

function draw() {
background("pink");
sofia.X = 0;
sofia.Y = 0;
sofia.shapeColor = "red";
golden_cup.shapeColor = "yellow";
if (keyDown("RIGHT_ARROW")) {
  sofia.velocityX = 3;
  sofia.velocityY = 0;
}
if (keyDown("LEFT_ARROW")){
  sofia.velocityX = -3;
  sofia.velocityY = 0;
}
if (keyDown("UP_ARROW")) {
  sofia.velocityX = 0;
  sofia.velocityY = -3;
}
if (keyDown("DOWN_ARROW")) {
  sofia.velocityX = 0;
  sofia.velocityY = 3;
}

if (sofia.isTouching(golden_cup)) {
  fill("yellow");
  textSize(100);
  text("You Win", 20, 200);
  
  
}
if (sofia.isTouching(golden_cup)) {
   sofia.velocityX = 0;
   sofia.velocityY = 0;
}
sofia.bounceOff(cardboard1);
sofia.bounceOff(cardboard2);
sofia.bounceOff(cardboard3);
sofia.bounceOff(cardboard4);
sofia.bounceOff(cardboard5);
sofia.bounceOff(cardboard6);
sofia.bounceOff(cardboard7);
sofia.bounceOff(cardboard8);
sofia.bounceOff(cardboard9);
sofia.bounceOff(cardboard10);
sofia.bounceOff(cardboard11);
sofia.bounceOff(cardboard12);
sofia.bounceOff(cardboard13);
sofia.bounceOff(cardboard14);
sofia.bounceOff(cardboard15);
sofia.bounceOff(cardboard16);
sofia.bounceOff(cardboard17);
sofia.bounceOff(cardboard18);
sofia.bounceOff(cardboard19);
sofia.bounceOff(cardboard20);
sofia.bounceOff(cardboard21);
sofia.bounceOff(cardboard22);
edges=createEdgeSprites();
sofia.bounceOff(edges);
drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
