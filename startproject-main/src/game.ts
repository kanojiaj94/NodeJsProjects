import * as PIXI from "pixi.js";
import BG from "./images/bg.png";
import wheel from "./images/wheel-center.png";
import wheelSlice from "./images/wheel-slice.png";
import spinButton from "./images/spin.jpg"

//
// STAP 1 - maak een pixi canvas
//
const pixi = new PIXI.Application({ width: 1000, height: 1000 });
document.body.appendChild(pixi.view);

//
// STAP 2 - preload alle afbeeldingen
//
const loader = new PIXI.Loader();
loader.add("BGTexture", BG).add("wheelTexture", wheel)
   .add('spinButtonTexture', spinButton)
   .add('wheelSliceTexture', wheelSlice)
loader.load(() => loadCompleted());

//
// STAP 3 - maak een sprite als de afbeeldingen zijn geladen
//
function loadCompleted() {
  let waterBG = new PIXI.Sprite(loader.resources["BGTexture"].texture!);
  let wheelCenter = new PIXI.Sprite(loader.resources["wheelTexture"].texture!);
  let spinButton = new PIXI.Sprite(loader.resources["spinButtonTexture"].texture!);
  let wheelSlice = new PIXI.Sprite(loader.resources["wheelSliceTexture"].texture!);
  
  // wheel center
  wheelCenter.anchor._x = 0;
  wheelCenter.anchor._y = 0;
  wheelCenter.position.x = 400;
  wheelCenter.position.y = 400;
  wheelCenter.width = 100;
  wheelCenter.height = 100;

  // wheel slice
  wheelCenter.anchor._x = 0;
  wheelCenter.anchor._y = 0;
  wheelCenter.position.x = 400;
  wheelCenter.position.y = 400;
  wheelCenter.width = 100;
  wheelCenter.height = 100;

  // spin button
  spinButton.anchor._x = 0;
  spinButton.anchor._y = 0;
  spinButton.position.x = 700;
  spinButton.position.y = 750;
  spinButton.width = 200;
  spinButton.height = 50;
  pixi.stage.addChild(waterBG);
  pixi.stage.addChild(wheelCenter);
  pixi.stage.addChild(wheelSlice);
  pixi.stage.addChild(spinButton);
}
