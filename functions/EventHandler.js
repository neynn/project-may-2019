function handleEvent(getX, getY) {
  for (let i = 0; i < eventList.length; i++) {
    for (let j = 0; j < eventList[i].events.length; j++) {
      if (eventList[i].id == currentMap) {
        switch (eventList[i].events[j].type) {
          case "OPEN_DOOR":
            if (eventList[i].events[j].fromX == getX && eventList[i].events[j].fromY == getY) {
              sound_Door.play();
              currentMap = eventList[i].events[j].toMap;
              player.updatePositions(eventList[i].events[j].toX, eventList[i].events[j].toY);
            }
            break;
          case "GOTO_MAP":
            if (eventList[i].events[j].fromX == getX && eventList[i].events[j].fromY == getY) {
              sound_MapSwitch.play();
              currentMap = eventList[i].events[j].toMap;
              player.updatePositions(eventList[i].events[j].toX, eventList[i].events[j].toY);
              console.log(eventList[i].events[j].text); //T.V.A7,BT49
            }
            break;
          case "OPEN_CHEST":
            if (eventList[i].events[j].fromX == getX && eventList[i].events[j].fromY == getY) {
              if (eventList[i].events[j].isLootable) {
                sound_OpenChest.play();
                for (let k = 0; k < eventList[i].events[j].contents.length; k++) { //Inventory Handler schreiben
                  addToInventory(eventList[i].events[j].contents[k]);
                }
                eventList[i].events[j].isLootable = false;
              }
            }
            break;
        }
      }
    }
  }
  return;
}
