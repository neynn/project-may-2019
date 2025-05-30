function checkCollision(targetX, targetY) { //Besitzt zudem die Überschreibbedingungen, damit ein Tile mit isPassable = false überwundne werden kann.
  for (let i = 0; i < tileConfig.count; i++) {
    for (let j = 0; j < tileConfig.count; j++) {
      var getX = tileConfig.size * i; // |
      var getY = tileConfig.size * j; // |
      var getTile = currentMap[j * tileConfig.count + i]; //Geht alle Tiles durch: X, Y sind gleich dem jetzigen Tile. Wird durch die globale Variable "currentMap" gesteuert.
      if (targetY == getY && targetX == getX) { //Wenn Spieler gehen will, dann gleibt X gleich, also bleibt die LANE gleich! Dies funktioniert, weil targetX als posX definiert ist(Sonst würden alle X-Punkte in den Sinn kommen)!<-- Wichtig
        if (tileConfig.types[getTile].isPassable) { //Prüft, ob das bestimmt Tile den isPassable Wert auf true hat.
          return true;
        } else if (tileConfig.types[getTile].passCondition) { //Falls der isPassable Wert nicht true ist, wird geprüft, ob der Spieler die benötigte passCondition besitzt, welche in der tileConfig festgelegt ist.
          return true; //Gibt true zurück.
        } else {
          return false; //Gibt false zurück.
        }
      }
    }
  }
}
