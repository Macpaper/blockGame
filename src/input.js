export default class InputHandler {
  constructor(paddle, game) {
    document.addEventListener("keydown", (e) => {
      console.log(e.key);
      switch (e.key) {
        case "w":
          paddle.moveUp();
          break;
        case "a":
          paddle.moveLeft();
          break;
        case "s":
          paddle.moveDown();
          break;
        case "d":
          paddle.moveRight();
          break;
        case "Escape":
          game.togglePause();
          break;
        case " ":
          game.start();
          break;
      }
    });
    document.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "w":
          paddle.moveStop();
          break;
        case "a":
          if (paddle.speed < 0) paddle.moveStop();
          break;
        case "s":
          if (paddle.speed > 0) paddle.moveStop();
          break;
        case "d":
          paddle.moveStop();
          break;
      }
    });
  }
}
