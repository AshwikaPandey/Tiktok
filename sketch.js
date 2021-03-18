var h
var m
var s

function setup() {
  createCanvas(800,400);
  angleMode(degrees)
  
 
}

function draw() {

  background("pink");

  translate(200, 200)
  fill("blue")
  arc( 30, 20, 400, 400, s,PI)
  strokeWeight(8)
  stroke(200,200,40)

  rotate(-90)
  text(h+":",400,220) +  text(m+":",430,220)+ text(s+":",450,220)
  
  h=hour()
  m=minute()
  s=second()
  scAngle= map(s,0,60,0,360)
  push()
  rotate(scAngle)
  line(0,0,100,0)
  
  
  pop()
  
  push()
  scAngle= map(m,0,60,0,360)
  
  line(0,0,100,0)
  
  pop()
 
  
  
  
  
  drawSprites();
}