//bugs e erros

function setup() {
    createCanvas(400, 400);
    count()
}
  
function draw() {
    background(220);
    
}
  
function count(){
    let numbers = [1,2,3,4,5,6,7,8,9];
    let len = numbers.length;
  
    for(let i = 0; i<len; i++){
      console.log(numbers[i]);
    }
}