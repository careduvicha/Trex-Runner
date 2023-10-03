//declarando as variáveis
var trex, trexRunning
var ground, groundImg
var invGround
//preload carrega as mídias do jogo
function preload() {
  trexRunning = loadAnimation('./images/trex3.png', "./images/trex4.png")
  groundImg = loadImage("./images/ground2.png")
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
  background("lightgray");

  //pulo do trex
  //console.log(trex.y)
  if (keyDown("space") && trex.y > 150) {
    trex.velocityY = -10
  }
  trex.velocityY += 0.5
  trex.collide(invGround)
  if (ground.x < 0) {
    ground.x = ground.width / 2
  }
  //coordenadas do mouse na tela
  text("X: " + mouseX + " / Y: " + mouseY, mouseX, mouseY)
  drawSprites();
}
