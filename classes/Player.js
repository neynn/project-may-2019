class Player {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.targetX = this.posX;
    this.targetY = this.posY;
    this.allowControl = true;
    this.targetTypeNow = 0;
    this.config = playerConfig;
  }

  display() {
    image(this.config.textures[this.targetTypeNow], this.posX, this.posY, this.config.size, this.config.size);
  }

  updatePositions(getX, getY) {
    this.posX = getX;
    this.targetX = getX;
    this.posY = getY;
    this.targetY = getY;
  }

  movementDetection() {
    if (this.allowControl == true) { //Falls der allowControl = true ist, kann der Spieler steuern.
      this.targetTypeNow = 0;
      if (keyIsDown(68)) { //Falls die rechte Pfeiltaste gerückt wurde.
        this.targetX = this.posX + tileConfig.size; //Setzt das ZIEL des Spielers um 1x Tile je nach Gehrichtung.
        this.targetTypeNow = 4; //Setzt den Typ der Gehrichtung fest(Oben, Unten, Rechts, Links); <-- Ist in der playerConfig festgelegt.
        this.allowControl = false; //Setzt die Kontrolle des Spielers auf false.
      } else if (keyIsDown(65)) { //
        this.targetX = this.posX - tileConfig.size; //
        this.targetTypeNow = 2; //
        this.allowControl = false; //
      } else if (keyIsDown(87)) { //
        this.targetY = this.posY - tileConfig.size; //
        this.targetTypeNow = 1; //
        this.allowControl = false; //
      } else if (keyIsDown(83)) { //
        this.targetY = this.posY + tileConfig.size; //
        this.targetTypeNow = 3; //
        this.allowControl = false; //
      }
    } else {
      if (this.targetX < 0 || this.targetX > tileConfig.size * tileConfig.count - tileConfig.size || this.targetY < 0 || this.targetY > tileConfig.size * tileConfig.count - tileConfig.size || !checkCollision(this.targetX, this.targetY)) { //Prüft, ob die Figur sich bewegen darf.
        this.updatePositions(this.posX, this.posY);
        this.allowControl = true; //Erlaubt dem Spieler wieder Kontrolle über den Character.
        this.targetTypeNow = 0; //Setzt den Typ der Gehrichtung auf 0.
        if (!sound_Bump.isPlaying()) {
          sound_Bump.play();
        }
      } else {
        switch (this.targetTypeNow) { //Falls keine Abbruchbedingung gefunden wurde, wird ein Switch eingeleitet.
          case 1: //
            if (this.posY != this.targetY) { //
              this.posY -= this.config.speed; //
            } else {
              this.allowControl = true; //
            }
            break; //
          case 2: //
            if (this.posX != this.targetX) { //
              this.posX -= this.config.speed; //
            } else {
              this.allowControl = true; //
            }
            break; //
          case 3: //
            if (this.posY != this.targetY) { //
              this.posY += this.config.speed; //
            } else {
              this.allowControl = true; //
            }
            break; //
          case 4: //Für den Fall, dass der Typ der gehrichtung 4 ist.
            if (this.posX != this.targetX) { //Falls die jetzige Position des Spielers nicht dem Ziel entspricht wird...
              this.posX += this.config.speed; //Er um den Wert playerConfig.speed (this.config.speed) in die gewünschte Richtung verschoben.
            } else {
              this.allowControl = true; //Falls der Spieler sein Ziel erreicht hat, erhält der Spieler die Kontrolle wieder und die Schleife bricht ab.
            }
            break; //Normaler Abbruch der Schleife.
        }
      }
    }
  }

  interactWithObjectAt(x, y) {
    if (this.allowControl) {
      for (let i = 0; i < tileConfig.count; i++) {
        for (let j = 0; j < tileConfig.count; j++) {
          let setX = tileConfig.size * i; // |
          let setY = tileConfig.size * j; // |
          let getTile = currentMap[j * tileConfig.count + i]; //Geht alle Tiles durch: X, Y sind gleich dem jetzigen Tile. Wird durch die globale Variable "currentMap" gesteuert.
          let clickCase = {
            middle: y > this.posY && y < this.posY + tileConfig.size && x > this.posX && x < this.posX + tileConfig.size,
            up: y < this.posY && y > this.posY - tileConfig.size && x > this.posX && x < this.posX + tileConfig.size,
            left: x < this.posX && x > this.posX - tileConfig.size && y > this.posY && y < this.posY + tileConfig.size,
            down: y > this.posY + tileConfig.size && y < this.posY + tileConfig.size * 2 && x > this.posX && x < this.posX + tileConfig.size,
            right: x > this.posX + tileConfig.size && x < this.posX + tileConfig.size * 2 && y > this.posY && y < this.posY + tileConfig.size
          };
          if (clickCase.middle) {
            if (setX == this.posX && setY == this.posY) {
              if (tileConfig.types[getTile].isInteractable) {
                handleEvent(setX, setY);
                return true;
              } else {
                return false;
              }
            }
          } else if (clickCase.right) { //right
            if (setX == this.posX + tileConfig.size && setY == this.posY) {
              if (tileConfig.types[getTile].isInteractable) {
                handleEvent(setX, setY);
                return true;
              } else {
                return false;
              }
            }
          } else if (clickCase.left) { //left
            if (setX == this.posX - tileConfig.size && setY == this.posY) {
              if (tileConfig.types[getTile].isInteractable) {
                handleEvent(setX, setY);
                return true;
              } else {
                return false;
              }
            }
          } else if (clickCase.up) { //up
            if (setX == this.posX && setY == this.posY - tileConfig.size) {
              if (tileConfig.types[getTile].isInteractable) {
                handleEvent(setX, setY);
                return true;
              } else {
                return false;
              }
            }
          } else if (clickCase.down) { //down
            if (setX == this.posX && setY == this.posY + tileConfig.size) {
              if (tileConfig.types[getTile].isInteractable) {
                handleEvent(setX, setY);
                return true;
              } else {
                return false;
              }
            }
          } else {
            return false;
          }
        }
      }
    }
  }
}
