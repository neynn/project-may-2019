var playerInventory = {
  slots: 5,
  contents: [
    {id: 1, stack: 998}, {id: 0, stack: 3}, {}, {id: 1, stack: 998}, {}
  ]
};

var playerConfig = {
  size: generalConfig.size,
  speed: 4,
  stats: { //PROTO
    level: 1,
    exp: 0,
    health: 10, //max 20, expandable w/skills
    power: 1,
    defense: 0,
    stamina: 80, //max 100, 150 w/skills
    food: 50, //max 100
    drink: 50 //max 100
  },
  abilities: {
    run: false,
    swim: true
  },
  name: "Player",
  textures: []
};
