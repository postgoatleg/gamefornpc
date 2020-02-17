import { enemydata } from "./data";
import { weapondata } from "./data";
import { createForm } from "final-form";
let level = 0;
const attackButton = document.getElementById("button-damage");
const superAttackButton = document.getElementById("button-big-damage");

function spawnEnemy(enemyObject) {
  class Enemy {
    constructor(name, image, hp, gold) {
      this.name = name;
      this.hp = hp;
      this.image = image;
      this.gold = gold;
    }
  }
  let vrag = new Enemy(
    enemyObject.name,
    enemyObject.image,
    enemyObject.hp,
    enemyObject.gold
  );
  document.getElementById("enemy-hp").innerHTML = vrag.hp;
  document.getElementById("enemy-name").innerHTML = vrag.name;
  document.getElementById("my-enemy").src = vrag.image;

  attackButton.onclick = delivery;
  function delivery() {
    vrag.hp -= 25;
    document.getElementById("enemy-hp").innerHTML = vrag.hp;
    deathAlert(vrag);
  }

  superAttackButton.onclick = bigDelivery;
  function bigDelivery() {
    vrag.hp -= 30;
    document.getElementById("enemy-hp").innerHTML = vrag.hp;
    deathAlert(vrag);
  }
}
function deathAlert(vrag) {
  if (vrag.hp <= 0) {
    level++;
    spawnEnemy(enemydata[level]);
    money += vrag.gold;
  }
}
spawnEnemy(enemydata[level]);

let money = 0;
setInterval(moneyPlus, 1000);
function moneyPlus() {
  money++;
  document.getElementById("money-indicator").innerHTML = money;
}

class Weapon {
  constructor(name, damage, superDamage, cost) {
    this.name = name;
    this.damage = damage;
    this.superDamage = superDamage;
    this.cost = cost;
  }
}

function shop(weaponObject) {
  let tabl = document.getElementById("Table");
  weapondata.forEach(function(weapondata) {
    let shopPos = new Weapon(
      weaponObject.name,
      weaponObject.damage,
      weaponObject.superDamage,
      weaponObject.cost
    );
    let tr = tabl.insertRow();
    tr.innerHTML =
      "<td>" +
      weapondata.name +
      "</td><td>" +
      weapondata.damage +
      "</td><td>" +
      weapondata.superDamage +
      "</td><td>" +
      weapondata.cost +
      "</td><td>" +
      weapondata.Button +
      "</td><td>";
  });
  function buttonBuyWeapon() {
    const buyWeapon = document.getElementById("buy-weapon");
    buyWeapon.addEventListener("click", shoping);
    function shoping() {
      if (money >= weapondata.cost) {
        alert("ggjgjg");
      }
    }
  }
  buttonBuyWeapon();
}

shop(weapondata);
