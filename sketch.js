function setup(){
    createCanvas(1001,501)
}
let moveX = 0
let moveY = 20
function draw(){
    skyTex = 0
    skyMove = 490
    for(i=0;i<300;i++){
        noStroke()
        fill(76,236-skyTex,236-skyTex)
        rect(0,skyMove,1000,-2)
        skyTex = skyTex  + 0.5
        skyMove = skyMove - 2
    }
    stroke(0)
    fill("green")
    ellipse(800,460+60,1000,200)
    ellipse(0,460+60, 500,200)
    ellipse(400,460+60,500,190)
    ellipse(600,460+60,500,100)
    ellipse(200,460+60,500,150)
    
    fill("grey")
    rect(0,490,1000,80)
    fill("red")
    rect(moveX,moveY,50,10)
    moveX++
}