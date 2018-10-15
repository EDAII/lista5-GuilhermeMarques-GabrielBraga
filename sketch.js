var points = []

function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight)
}

function mousePressed() {
    var p = createVector(mouseX, mouseY)
    points.push(p)
}

function draw() {
    // put drawing code here
    background(30)
    let visited = []
    let unvisited = []
    arrayCopy(points, unvisited)
    if (visited.length == 0) {
        visited.push(unvisited[0])
        unvisited.splice(0, 1)
    }
    while (unvisited.length > 0) {
        var limit = 10000000
        var vIndex
        var unvIndex
        for (var i = 0; i < visited.length; i++) {
            for (var j = 0; j < unvisited.length; j++) {
                var v1 = visited[i]
                var v2 = unvisited[j]
                var d = dist(v1.x, v1.y, v2.x, v2.y)
                if (d < limit) {
                    limit = d
                    unvIndex = j
                    vIndex = i
                }
            }
        }
        var p1 = visited[vIndex]
        var p2 = unvisited[unvIndex]
        stroke(150,155,250)
        strokeWeight(2)
        line(p1.x, p1.y, p2.x, p2.y)
        visited.push(p2)
        unvisited.splice(unvIndex, 1)
    }

    points.forEach(point => {
      noStroke();
      ellipse(point.x, point.y, 16, 16);
    });
}