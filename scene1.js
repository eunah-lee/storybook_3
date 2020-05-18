//drawing-p5.js

let sand;
let starfish;
let gif_loadImg, gif_createImg;

var data = "This is a sentence!";

function preload(){
  starfish = loadImage('https://cdn.glitch.com/27fa6543-415b-49de-8729-f20312c3abee%2Fstarfish.png?v=1589662051757');
  
  gif_loadImg = loadImage("https://cdn.glitch.com/27fa6543-415b-49de-8729-f20312c3abee%2Fsea.gif?v=1589661916878");
  //gif_createImg = createImg("https://cdn.glitch.com/27fa6543-415b-49de-8729-f20312c3abee%2Fsea.gif?v=1589661916878");

}

function setup() {
  sand = loadImage("https://cdn.glitch.com/27fa6543-415b-49de-8729-f20312c3abee%2Fscene1-background.jpg?v=1589662054750");
  var canvas = createCanvas(960, 540);
  canvas.position(240, 35); //make the position of the sketch the same with other
  
  
  typeWriter(data, 0, 20, 30, 100);
  
}

function draw() {
  background(sand);
  image(starfish, 100, 180, 300, 300);
  image(gif_loadImg, 20, 20);
  fill(0);
  
  
  //let script = 'Hello there!         Im Hiro, a starfish. I was chillin on a coral on my backyard and a wave flew me here...';
  //text(script, 10, 10, 100, 80);
  //text('Hello there!', 10, 10);
  
  }

function typeWriter(sentence, n, x, y, speed) {
  if (n < (sentence.length)) {
    text(sentence.substring(0, n+1), x, y);
    n++;
    setTimeout(function() {
      typeWriter(sentence, n, x, y, speed)
    }, speed);
  }
}


//text-plain javascript

var app = document.getElementById('typeWriter');

var typewriter = new Typewriter(app, {
    loop: false
});

typewriter.typeString('Hello there. ')
    .pauseFor(1000) //1000 millisecond = 1sec
    //.typeString('<br/>') //next sentance
    .typeString('Im Hiro, a starfish.')
    .pauseFor(1500)
    .deleteAll(2) //deleting speed(lower=>faster)
    .typeString('I was chillin on a coral in my backyard...')
    .pauseFor(1000)
    //.typeString('<br/>')
    .typeString('and a wave flew me here.')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Could you help me to find my way back home?')
    .start();

//.typeString('<strong>altered!</strong>')