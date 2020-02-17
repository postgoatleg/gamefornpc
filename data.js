export const enemydata = [
  { name: "мыха", image: require("./image/mouse.jpg"), hp: 150, gold: 20 },
  { name: "журавль", image: require("./image/zhuravl.jpg"), hp: 200, gold: 30 },
  { name: "японец", image: require("./image/zhuravl.jpg"), hp: 300, gold: 50 }
];

export const weapondata = [
  {
    name: "дубина",
    damage: 15,
    superDamage: 30,
    cost: 0,
    Button: "<button type='button' id='buy-weapon'>купить</button>"
  },
  {
    name: "дубина с шипами",
    damage: 20,
    superDamage: 40,
    cost: 30,
    Button: "<button type='button' id='buy-weapon'>купить</button>"
  }
];
