function generateTiles(tileMap) { //Generates tiles in a rows/colums manner.
  for (let i = 0; i < tileConfig.count; i++) {
    for (let j = 0; j < tileConfig.count; j++) {
      var currentTile = tileMap[j * tileConfig.count + i];
      image(tileConfig.types[currentTile].texture, tileConfig.size * i, tileConfig.size * j, tileConfig.size, tileConfig.size);
    }
  }
  return;
}
