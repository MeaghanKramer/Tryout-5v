var x, y, v;

function setup() {
	createCanvas(500, 400);

  x = 55;
  y = 200;
  v = 5; 
  z = 5;
}

function draw() {
	background(0, 255, 255);
  ellipse(x,y,50,50);
  x = x + v;
  y = y + z;

  if(y <= 0 || y > 400){
    z= z * -1;
  }

  if (x <= 0 || x > 500) {
    v = v * -1;
  }


}