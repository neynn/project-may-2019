var tileConfig = {
  size: generalConfig.size,
  count: generalConfig.count,
  types: [{
      id: 0,
      name: "Void",
      texture: undefined,
      isPassable: false,
      passCondition: false,
      isInteractable: false
    },
    {
      id: 1,
      name: "Dirt",
      texture: undefined,
      isPassable: true,
      passCondition: false,
      isInteractable: false
    },
    {
      id: 2,
      name: "Grass",
      texture: undefined,
      isPassable: true,
      passCondition: false,
      isInteractable: false
    },
    {
      id: 3,
      name: "Sand",
      texture: undefined,
      isPassable: true,
      passCondition: false,
      isInteractable: false
    },
    {
      id: 4,
      name: "Water",
      texture: undefined,
      isPassable: false,
      passCondition: playerConfig.abilities.swim, //Benutzt den boolean-Wert
      isInteractable: false
    },
    {
      id: 5,
      name: "Stone",
      texture: undefined,
      isPassable: false,
      passCondition: false, //Benutzt den boolean-Wert
      isInteractable: false
    },
    {
      id: 6,
      name: "Door",
      texture: undefined,
      isPassable: true,
      passCondition: false,
      isInteractable: true
    },
    {
      id: 7,
      name: "Chest",
      texture: undefined,
      isPassable: false,
      passCondition: false,
      isInteractable: true
    },
    {
      id: 8,
      name: "HouseFloor",
      texture: undefined,
      isPassable: true,
      passCondition: false,
      isInteractable: false
    },
    {
      id: 9,
      name: "Carpet",
      texture: undefined,
      isPassable: true,
      passCondition: false,
      isInteractable: true
    },
    {
      id: 10,
      name: "Tree",
      texture: undefined,
      isPassable: false,
      passCondition: false,
      isInteractable: false
    },
    {
      id: 11,
      name: "House",
      texture: undefined,
      isPassable: false,
      passCondition: false,
      isInteractable: true
    },
    {
      id: 12,
      name: "CaveEntrance",
      texture: undefined,
      isPassable: true,
      passCondition: false,
      isInteractable: true
    }
  ]
};
