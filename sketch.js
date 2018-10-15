var points = []

function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight)
    background("#ccc")
}

function mousePressed() {
    var p = createVector(mouseX, mouseY)
    points.push(p)
}

function draw() {
    // put drawing code here
    points.forEach(point => {
        noStroke()
        ellipse(point.x, point.y, 16, 16)
    })
}