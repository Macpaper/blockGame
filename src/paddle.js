export default class Paddle {
  constructor(game) {
    this.width = 150;
    this.height = 20;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.maxSpeed = 7;
    this.speed = 0;

    this.position = {
      x: this.gameWidth / 2 - this.width / 2,
      y: this.gameHeight - this.height  -  10,
    }
  }

  moveUp() {
    
  }
  moveLeft() {
    this.speed = -this.maxSpeed;
  }
  moveDown() {

  }
  moveStop() {
    this.speed = 0;
  }
  moveRight() {
    this.speed = this.maxSpeed;
  }

  draw(context) {
    context.fillStyle = '#0Af';
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    
    this.position.x += this.speed;
    if(this.position.x < 0) this.position.x = 0;
    if(this.position.x > this.gameWidth - this.width) this.position.x = this.gameWidth - this.width;
    

  }
}