
var trex, trexRunning
var ground, groundImg
var invGround
var cloud,cloudIMG
//preload carrega as mídias do jogo
function preload() {
  trexRunning = loadAnimation('./images/trex3.png', "./images/trex4.png")
  groundImg = loadImage("./images/ground2.png")
  cloudIMG = loadImage("./images/cloud.png")
}


//setup faz a configuração
function setup() {
  createCanvas(600, 200);

  //sprite trex
  trex = createSprite(50, 150, 30, 70)
  trex.addAnimation("running", trexRunning)
  trex.scale = 0.5


  //sprite Solo
  ground = createSprite(300, 180, 600, 10)
  ground.addImage(groundImg)
  ground.velocityX = -2

  invGround = createSprite(300, 190, 600, 10)
  invGround.visible = false


}

//draw faz o movimento, a ação do jogo
function draw() {
  background("#ebf5ff");

  //pulo do trex
  //console.log(Math.round(random(1,5)))
  if (keyDown("space") && trex.y > 150) {
    trex.velocityY = -10
  }
  trex.velocityY += 0.5
  trex.collide(invGround)
  if (ground.x < 0) {
    ground.x = ground.width / 2
  }
  createClouds()
  //coordenadas do mouse na tela
  text("X: " + mouseX + " / Y: " + mouseY, mouseX, mouseY)
  drawSprites();
  
}
function createClouds(){

if (frameCount%60==0) {
    cloud=createSprite(610,random(0,110),30,15)
    cloud.velocityX=-3
    cloud.scale=random(0.5, 1.5)
    cloud.addImage(cloudIMG)
    cloud.depth=trex.depth-1 
}



}






























