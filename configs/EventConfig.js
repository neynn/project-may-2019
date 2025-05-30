var eventList = [{
    id: mapConfig.map_START,
    events: [{
        type: "GOTO_MAP",
        text: "Route 1",
        fromX: 4 * tileConfig.size,
        fromY: 0 * tileConfig.size,
        toMap: mapConfig.map_ROUTE1,
        toX: 4 * tileConfig.size,
        toY: 7 * tileConfig.size
      },
      {
        type: "OPEN_DOOR",
        fromX: 6 * tileConfig.size,
        fromY: 2 * tileConfig.size,
        toMap: mapConfig.map_START_HOUSE1,
        toX: 4 * tileConfig.size, //do
        toY: 5 * tileConfig.size //do
      }
    ]
  },
  {
    id: mapConfig.map_START_HOUSE1,
    events: [{
      type: "OPEN_DOOR",
      fromX: 4 * tileConfig.size, //do
      fromY: 6 * tileConfig.size, //do
      toMap: mapConfig.map_START,
      toX: 6 * tileConfig.size,
      toY: 3 * tileConfig.size
    }]
  },
  {
    id: mapConfig.map_ROUTE1,
    events: [{
        type: "OPEN_DOOR",
        fromX: 1 * tileConfig.size,
        fromY: 1 * tileConfig.size,
        toMap: mapConfig.map_ROUTE1_HOUSE1,
        toX: 2 * tileConfig.size,
        toY: 4 * tileConfig.size
      },
      {
        type: "GOTO_MAP",
        text: "Hometown",
        fromX: 4 * tileConfig.size,
        fromY: 7 * tileConfig.size,
        toMap: mapConfig.map_START,
        toX: 4 * tileConfig.size,
        toY: 0 * tileConfig.size
      },
      {
        type: "GOTO_MAP",
        text: "City",
        fromX: 7 * tileConfig.size,
        fromY: 3 * tileConfig.size,
        toMap: mapConfig.map_CITY,
        toX: 0 * tileConfig.size,
        toY: 3 * tileConfig.size
      }
    ]
  },
  {
    id: mapConfig.map_ROUTE1_HOUSE1,
    events: [{
        type: "OPEN_DOOR",
        fromX: 2 * tileConfig.size,
        fromY: 5 * tileConfig.size,
        toMap: mapConfig.map_ROUTE1,
        toX: 1 * tileConfig.size,
        toY: 2 * tileConfig.size
      },
      {
        type: "OPEN_CHEST",
        fromX: 5 * tileConfig.size,
        fromY: 0 * tileConfig.size,
        isLootable: true,
        contents: [{
            id: getItemByName("Void"),
            stack: 1
          },
          {
            id: getItemByName("Stone"),
            stack: 5
          },
          {
            id: getItemByName("Wood"),
            stack: 999
          }
        ]
      }
    ]
  },
  {
    id: mapConfig.map_CITY,
    events: [{
      type: "GOTO_MAP",
      text: "Route 1",
      fromX: 0 * tileConfig.size,
      fromY: 3 * tileConfig.size,
      toMap: mapConfig.map_ROUTE1,
      toX: 7 * tileConfig.size,
      toY: 3 * tileConfig.size
    }, {
      type: "GOTO_MAP",
      text: "Route 2",
      fromX: 4 * tileConfig.size,
      fromY: 0 * tileConfig.size,
      toMap: mapConfig.map_ROUTE2,
      toX: 4 * tileConfig.size,
      toY: 7 * tileConfig.size
    }]
  },
  {
    id: mapConfig.map_ROUTE2,
    events: [{
      type: "GOTO_MAP",
      text: "City",
      fromX: 4 * tileConfig.size,
      fromY: 7 * tileConfig.size,
      toMap: mapConfig.map_CITY,
      toX: 4 * tileConfig.size,
      toY: 0 * tileConfig.size
    }, {
      type: "GOTO_MAP",
      text: "Caves",
      fromX: 2 * tileConfig.size,
      fromY: 1 * tileConfig.size,
      toMap: mapConfig.map_ROUTE2_CAVES,
      toX: 2 * tileConfig.size,
      toY: 7 * tileConfig.size
    }]
  },
  {
    id: mapConfig.map_ROUTE2_CAVES,
    events: [{
      type: "GOTO_MAP",
      text: "Route 2",
      fromX: 2 * tileConfig.size,
      fromY: 7 * tileConfig.size,
      toMap: mapConfig.map_ROUTE2,
      toX: 2 * tileConfig.size,
      toY: 1 * tileConfig.size
    }]
  }
];
