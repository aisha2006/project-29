class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        density: 3
    }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);
}
display1(){
  var pos =this.body.position;
  fill("green");
  rect(pos.x, pos.y, this.width, this.height);
  
}

display2(){
  var pos =this.body.position;
  fill("blue");
  rect(pos.x, pos.y, this.width, this.height);

}
display3(){
  var pos =this.body.position;
  fill("yellow");
  rect(pos.x, pos.y, this.width, this.height);

}
display4(){
  var pos =this.body.position;
  fill("red");
  rect(pos.x, pos.y, this.width, this.height);

}
  }

