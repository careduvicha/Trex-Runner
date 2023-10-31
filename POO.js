//Programação Orientada a objetos
//box

//classe👇
class Box{
    //método👇
    constructor(x,y,w,h,vx,vy,color){ //👈constroi o objeto
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.vx = vx
        this.vy = vy
        this.color = color
    }
    // método -> o que o objeto pode fazer
    displayBox(){
        rectMode(CENTER)
        fill(this.color)
        rect(this.x, this.y, this.w, this.h)
        this.x = this.x+this.vx
        this.y = this.y+this.vy
    }

    setSpeed(vx,vy){
        this.x = this.x+vx
        this.y = this.y+vy
    }
}
var box2
var box1
var box3
function setup(){
    createCanvas(600,600)
    box2 = new Box(100,100,50,50,2,2,"blue")
    // box2.setY(400)
    box1 = new Box(100,200,30,20,-2,0,"yellow")
    box3 = new Box(200,200,100,100,0.5,0.9,"purple")
}

function draw(){
    background(220)

    box2.displayBox()
    box2.setSpeed(5,3)
    box1.displayBox()
    box1.setSpeed(2,5)
    box3.displayBox()
    box3.setSpeed(2,3)
}
    