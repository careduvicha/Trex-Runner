var student = {
    name: "Carlos Eduardo",
    grade: "7º",
    favorite_subject: "Matemática",
    marks: [8, 9.5, 10, 8.5]
}
var ball = {
    x: 30,
    y: 30,
    R: 30,
    color: ["blue", "yellow", "brown"]
}

var box
var vx = -2

function setup() {
    createCanvas(600, 600)
    console.log(student.name)
    console.log(student.grade)
    box = createSprite(100,100,100,100)
    box.shapeColor = "yellow"

}
function draw() {
    background("red")
    fill(ball.color[0])
    circle(ball.x, ball.y, ball.R)

    if(box.position.x <= 50||box.position.x >= 550 ){
        vx = -vx
    }
    box.velocityX = vx
    drawSprites()
}