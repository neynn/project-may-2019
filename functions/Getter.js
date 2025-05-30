function getItemByName(name) {
  for (let i = 0; i < itemConfig.types.length; i++) {
    if (itemConfig.types[i].name == name) {
      return itemConfig.types[i].id;
    }
  }
}

function getItemById(id) {
  for (let i = 0; i < itemConfig.types.length; i++) {
    if (itemConfig.types[i].id == id) {
      return itemConfig.types[i].name;
    }
  }
}

function getTileByName(name) {
  for (let i = 0; i < tileConfig.types.length; i++) {
    if (tileConfig.types[i].name == name) {
      return tileConfig.types[i].id;
    }
  }
}
