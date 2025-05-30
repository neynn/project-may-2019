function processTextures(tileTextureArray, playerTextureArray) { //Converts textures into an object description of the object with the corresponding 'id'.
  for (let i = 0; i < tileTextureArray.length; i++) {
      tileConfig.types[i].texture = tileTextureArray[i];
    }
  for(let j = 0; j < playerTextureArray.length; j++){
    playerConfig.textures[j] = playerTextureArray[j];
  }
  return;
}
