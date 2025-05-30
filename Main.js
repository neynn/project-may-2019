var player;
var tileTextures = [];
var playerTextures = [];
var sound_Door, sound_MapSwitch, sound_Bump, sound_OpenChest;
var currentMap;

function preload() { //Loads the textures into the program.
  for(let i = 0; i < 13; i++){
    tileTextures[i] = loadImage('assets/textures/world/tileTextureID_' + i + '.png');
  }
  for(let j = 0; j < 5; j++){
    playerTextures[j] = loadImage('assets/textures/player/PLAYER_' + j + '.png');
  }
  sound_Door = loadSound('assets/sounds/door.ogg');
  sound_MapSwitch = loadSound('assets/sounds/mapSwitch.ogg');
  sound_Bump = loadSound('assets/sounds/bump.ogg');
  sound_OpenChest = loadSound('assets/sounds/openChest.mp3');
  bgm1 = loadSound('assets/music/bgm1.ogg');
  bgm2 = loadSound('assets/music/bgm2.ogg');
}

function setup() { //Sets the canvas and player up.
  createCanvas(576, 512);
  processTextures(tileTextures, playerTextures);
  player = new Player(128, 256);
  currentMap = mapConfig.map_START;
}

function draw() { //Begins total game loop.
  if (!bgm2.isPlaying()) {
    bgm2.play(0, 1, 0.5);
  }
  generateTiles(currentMap);
  player.display();
  player.movementDetection();
  if (mouseIsPressed) {
    player.interactWithObjectAt(mouseX, mouseY);
  }
}
