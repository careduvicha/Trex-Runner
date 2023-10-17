
var trex, trexRunning
var ground, groundImg
var invGround
var cloud, cloudIMG
var cactus, cactusimg1, cactusimg2, cactusimg3, cactusimg4, cactusimg5, cactusimg6
var score=0
//preload carrega as mídias do jogo
function preload() {
  trexRunning = loadAnimation('./images/trex3.png', "./images/trex4.png")
  groundImg = loadImage("./images/ground2.png")
  cloudIMG = loadImage("./images/cloud.png")
  cactusimg1 = loadImage("./images/obstacle1.png")
  cactusimg2 = loadImage("./images/obstacle2.png")
  cactusimg3 = loadImage("./images/obstacle3.png")
  cactusimg4 = loadImage("./images/obstacle4.png")
  cactusimg5 = loadImage("./images/obstacle5.png")
  cactusimg6 = loadImage("./images/obstacle6.png")
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
  createCactus()
  fill("black")
  textSize(20)
 text("Score: "+score,480,40)
 score=Math.round(frameCount/3)
  //coordenadas do mouse na tela
  text("X: " + mouseX + " / Y: " + mouseY, mouseX, mouseY)
  drawSprites();

}
function createClouds() {
  if (frameCount % 60 == 0) {
    cloud = createSprite(610, random(0, 110), 30, 15)
    cloud.velocityX = -3
    cloud.scale = random(0.5, 1.5)
    cloud.addImage(cloudIMG)
    cloud.depth = trex.depth - 1
    cloud.lifetime=200
  }
  
}
function createCactus() {
  if (frameCount % 85 == 0) {
    cactus = createSprite(610, 170, 30, 15)
    cactus.velocityX = -3
    cactus.depth = trex.depth - 1
    var choseCactus = Math.round(random(1, 6))
    switch (choseCactus) {
      case 1:
        cactus.addImage(cactusimg1)
        break;
      case 2:
        cactus.addImage(cactusimg2)
        break;
      case 3:
        cactus.addImage(cactusimg3)
        break;
      case 4:
        cactus.addImage(cactusimg4)
        break;
      case 5:
        cactus.addImage(cactusimg5)
        break;
      case 6:
        cactus.addImage(cactusimg6)
        break;
    }
    cactus.scale = 0.4
    cactus.lifetime = 200
  }
}






























