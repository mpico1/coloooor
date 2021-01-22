function setup() {
  createCanvas(600, 600);
  background(0);
    background(0);
}
let zoffa = 6;
//let show = [0,1,2,3,4,5,6];
let r = 10;
let g = 100;
let b = 200;
let rinc = 0.2;
let binc = 0.2;
let ginc = 0.2;
function draw() {
  
  translate(300,300);
  stroke(r,g,b,10);
  let xoff= 0;
  let yoff = 0;
  noFill();
  let shape;
  //show.push(zoffa);
  
  paint(xoff,yoff,zoffa);
  //stroke(0);
  //paint(xoff,yoff,show[0]);
  //show.shift();

  zoffa+=0.002;
  
  if(r>=255 || r<=0){rinc = rinc*(-1);}
  if(g>=255 || g<=0){ginc = ginc*(-1);}
  if(b>=255 || b<=0){binc = binc*(-1);console.log(b);}
  //console.log(b);
  r += rinc;
  g += ginc;
  b += binc;
  
}
let paint = function(xoff,yoff,zoff){
  
   shape = beginShape();
  for(let a = 0; a < TWO_PI; a+=0.005){

    let v = createVector(cos(a),sin(a));
    xoff = v.x+1;
    yoff = v.y+1;
    v.setMag(noise(xoff,yoff,zoff)*300);
    vertex(v.x, v.y);
  }
   endShape(CLOSE);
}
