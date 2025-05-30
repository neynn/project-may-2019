//Erstellt ein neues Inventar, indem Index i im Array mit einem leeren Objekt ersetzt wird.
function createNewInventory() {
  for (let i = 0; i < playerInventory.slots; i++) {
    playerInventory.contents[i] = {};
  }
}
//! Zuordnung der Items, für Items, die bereits im Inventar sind
function addToInventory(newItems) {
  for (let i = 0; i < playerInventory.contents.length; i++) {
    if (newItems.id == playerInventory.contents[i].id) { //Falls die ItemART bereits im Inventar ist
      for (let j = 0; j < itemConfig.types.length; j++) {
        if (newItems.id == itemConfig.types[j].id) { //Falls die ItemID einer aus der ItemConfig gleicht
          if (playerInventory.contents[i].stack + newItems.stack > itemConfig.types[j].maxStack) {
            let leftovers = newItems.stack;
            let transferableItems;
            for (let a = 0; a < playerInventory.contents.length; a++) {
              if (newItems.id == playerInventory.contents[a].id) {
                transferableItems = itemConfig.types[j].maxStack - playerInventory.contents[a].stack;
                leftovers -= transferableItems;
                if (playerInventory.contents[a].stack + transferableItems <= itemConfig.types[j].maxStack) {
                  playerInventory.contents[a].stack += transferableItems;
                  if (leftovers == 0) {
                    return true;
                  }
                }
              } else if (playerInventory.contents[a].id == undefined) {
                playerInventory.contents[a].id = newItems.id;
                playerInventory.contents[a].stack = leftovers;
                leftovers = 0;
                return true;
              } else if (playerInventory.contents[a] != undefined && a == playerInventory.contents.length - 1) { //undefined unnötig?=?? UMSCHREIBEN
                console.log("Kein Platz mehr im Inventar: " + getItemById(newItems.id) + "," + leftovers + " gelöscht!");
                leftovers = 0;
                return true;
              }
            }
          } else {
            playerInventory.contents[i].stack += newItems.stack;
            return true;
          }
        }
      }
    }
    if (newItems.id != playerInventory.contents[i].id && i == playerInventory.contents.length - 1) {
      for (let k = 0; k < playerInventory.contents.length; k++) {
        if (playerInventory.contents[k].id == undefined) {
          playerInventory.contents[k] = newItems;
          newItems = {};
          return true;
        } else if (playerInventory.contents[k] != undefined && k == playerInventory.contents.length - 1) {
          console.log("Kein Platz mehr im Inventar: " + getItemById(newItems.id) + "," + newItems.stack + " gelöscht!");
          newItems = {};
          return true;
        }
      }
    }
  }
}
