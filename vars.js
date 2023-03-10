var Game = {};

Game.config = {
  startingPlayer: "black", // Choose 'black' or 'red'.
  takenMsg: "This position is already taken. Please make another choice.",
  drawMsg: "This game is a draw.",
  winMsg: "The winner is: ",
  countToWin: 4,

  // 
  boardLength: 6,
  boardHeight: 5,
};

// Game State
Game.board = [[0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0]];

Game.currentPlayer = Game.config.startingPlayer;