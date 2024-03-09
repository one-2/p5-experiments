function setup() {
    createCanvas(300, 300, WEBGL);
}

function draw() {
    background(200);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    normalMaterial();
    box(100);
}
