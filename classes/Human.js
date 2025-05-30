class Human {
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.targetX = posX;
    this.targetY = posY;
    this.hasControl = true;
    this.targetTypeNow = 0;
    this.config = humanConfig;
  }

  display(){
    image(this.config.textures[this.targetTypeNow], this.posX, this.posY, this.config.size, this.config.size);
  }

  randomMovement(){
    let random = Math.floor(Math.random() * 4) + 1;
  }
}
