function setup() {
    createCanvas(500, 500)
    let topLeftCornerX = 50;
    let topLeftCornerY = 50;
    let paddingX = topLeftCornerX * 2;
    let paddingY = topLeftCornerY * 2;
    strokeWeight(30);
    fill(100, 180, 145);
    stroke(55, 123, 230)
    rect(topLeftCornerX, topLeftCornerY, width-paddingX, height-paddingY);
}

function draw() {
    let x = random() * width;
    let y = random() * height;
    fill(100, random() * 255, random() * 255);
    strokeWeight(2)
    ellipse(x, y, 20, 20);
}
