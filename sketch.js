let estrelas = [];
let fator = 10;
function setup() {
  createCanvas(500, 500);
  for (let i = 0; i < 50; i++) {
    estrelas[i] = createVector(
      random(-width * fator, width * fator),
      random(-height * fator, height * fator),
      random(10, 500));
  }
}

function draw() {
  background(0);
  fill(255);
  translate(width / 2, height / 2);
  noStroke();

  for (let estrela of estrelas) {
    let x = estrela.x / estrela.z;
    let y = estrela.y / estrela.z;
    let d = map(estrela.z, 0, 500, 10, 1);
    circle(x, y, d);
    estrela.z -= 5;
    if (estrela.z < 1) {
      estrela.x = random(-width * fator, width * fator);
      estrela.y = random(-height * fator, height * fator);
      estrela.z = 400;
    }
  }
}
