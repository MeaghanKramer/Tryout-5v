var a, b, x, y, v, c,d;

function setup() {
	createCanvas(500, 400);
  a = 100;
  b = 50;
  x = 55;
  y = 200;
  v = 15; 
  z = 15;
  va = 100;
  za = 100;
  vb = 4;
  zb = 4;
  c = 40;
  d = 40;
}

function draw() {
	background(0, 255, 255);

  ellipse(x,y,50,50);
  x = x + v;
  y = y + z;
  fill(555,200,400);

  if(y <= 0 || y > 400){
    z= z * -1;
  }

  if (x <= 0 || x > 500) {
    v = v * -1;
  }

  ellipse(a,b,20,20);
  a = a + va;
  b = b + za;
  fill(100,30,33);

  if (b <= 0 || b > 400) {
    za = za * -1;
  }

  if (a <= 0 || a > 500) {
    va = va * -1;
  }

  ellipse(c,d,20,20);
  c = c + vb;
  d = d + zb;
  fill (22,400,55);

  if (d <= 0 || d > 400) {
    zb = zb * -1;
  }

  if (c <= 0 || c > 500) {
    vb = vb * -1;
  }
}

