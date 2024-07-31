function setup() {
    createCanvas(600, 600);
  }
  
  function draw(){
  background(`black`);
  
    stroke("red");
    fill("blue");
  
  //console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    } 
  }
  