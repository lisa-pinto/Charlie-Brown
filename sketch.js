function setup() {
  createCanvas(600, 400);
  background(240);
  frameRate(20)

  w1 = color(61, 132, 255)
  w2 = color(64, 50, 100)

  a1 = color(252, 186, 3)
  a2 = color(255, 110, 13)

  p1 = color(122, 205, 250)
  p2 = color(181, 229, 255)

}

let flakes = []
let raindrops = []
let leaves = []
let flowers = []
let cs = []
let mode = 0

function preload() {
  // particles
  snowflake = loadImage('snowflake.png')
  leaf = loadImage('leaf.png')
  flower = loadImage('flower.png')

  //characters
  winter = loadImage('bggwinter.png')
  monsoon = loadImage('bggmonsoon.png')
  autumn = loadImage('bggautumn.png')
  spring = loadImage('bggspring.png')
  cs = [winter, monsoon, autumn, spring]
}


function draw() {

  // winter
  if (mode == 0) {
    setGradient(w1, w2)
    newflake = new snowparticle(-20)
    append(flakes, newflake)
    newflake.make()
    for (i = 0; i < flakes.length; i++) {
      flakes[i].y = flakes[i].y + 20 * (1 / flakes[i].h)
      flakes[i].make()
      if (flakes[i].y > height + 20) {
        flakes.splice(i, 1)
      }
    }
  }

  //monsoon
  if (mode == 1) {
    background(60, 89, 128)
    newdrop = new raindrop(-20)
    newdrop.make()
    append(raindrops, newdrop)
    for (i = 0; i < raindrops.length; i++) {
      raindrops[i].y = raindrops[i].y + raindrops[i].h1
      raindrops[i].make()
      if (raindrops[i].y > height + 20) {
        raindrops.splice(i, 1)
      }
    }
  }

  // autumn
  if (mode == 2) {
    setGradient(a1, a2)
    newleaf = new leafparticle(-20)
    append(leaves, newleaf)
    newleaf.make()
    for (i = 0; i < leaves.length; i++) {
      leaves[i].y = leaves[i].y + 20 * (1 / leaves[i].h)
      leaves[i].make()
      if (leaves[i].y > height + 20) {
        leaves.splice(i, 1)
      }
    }
  }

  // spring
  if (mode == 3) {
    setGradient(p1, p2)
    newflower = new flowerparticle(-20)
    append(flowers, newflower)
    newflower.make()
    for (i = 0; i < flowers.length; i++) {
      flowers[i].y = flowers[i].y + 20 * (1 / flowers[i].h)
      flowers[i].make()
      if (flowers[i].y > height + 20) {
        flowers.splice(i, 1)
      }
    }
  }



  image(cs[mode], 50, 170, 500, 230)

  // buttons
  noStroke()

  fill(71, 91, 191)
  if (dist(mouseX, mouseY, 560, 100) < 20) {
    fill(30, 44, 115)
  }
  circle(560, 100, 40) // winter

  fill(122, 124, 145)
  if (dist(mouseX, mouseY, 560, 150) < 20) {
    fill(56, 57, 61)
  }
  circle(560, 150, 40) // monsoon

  fill(207, 130, 78)
  if (dist(mouseX, mouseY, 560, 200) < 20) {
    fill(156, 85, 37)
  }
  circle(560, 200, 40) // autumn

  fill(114, 181, 133)
  if (dist(mouseX, mouseY, 560, 250) < 20) {
    fill(79, 158, 101)
  }
  circle(560, 250, 40) // spring  
}


function setGradient(c1, c2) {
  noFill();
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}


function mouseClicked() {
  if (dist(mouseX, mouseY, 560, 100) < 20) {
    mode = 0
  } else if (dist(mouseX, mouseY, 560, 150) < 20) {
    mode = 1
  } else if (dist(mouseX, mouseY, 560, 200) < 20) {
    mode = 2
  } else if (dist(mouseX, mouseY, 560, 250) < 20) {
    mode = 3
  }
}


class snowparticle {
  constructor(y) {
    this.x = random(0, 600)
    this.y = y
    this.h = random(8, 25)
    this.angle = random(0, 360)
  }
  make() {
    push()
    rotate(-this.angle)
    image(snowflake, this.x, this.y, this.h, this.h)
    pop()
  }
}

class raindrop {
  constructor(y) {
    this.x1 = random(0, 600)
    this.y = y
    this.h1 = random(2, 20)
  }
  make() {
    stroke(200)
    rect(this.x1, this.y, this.h1 / 20, this.h1)
  }
}


class leafparticle {
  constructor(y) {
    this.x = random(0, 600)
    this.y = y
    this.h = random(20, 40)
    this.angle = random(0, 30)
  }
  make() {
    push()
    rotate(this.angle)
    image(leaf, this.x, this.y, this.h, this.h)
    pop()
  }
}


class flowerparticle {
  constructor(y) {
    this.x = random(0, 600)
    this.y = y
    this.h = random(20, 40)
    this.angle = random(0, 30)
  }
  make() {
    push()
    rotate(this.angle)
    image(flower, this.x, this.y, this.h, this.h)
    pop()
  }
}