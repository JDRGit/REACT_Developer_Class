class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
  attack(enemy) {
    if (Math.random() > this.accuracy) {
      console.log(`${this.name} missed!`);
      return `${enemy.name} hull: ${enemy.hull}`;
    } else {
      enemy.hull -= this.firepower;
      console.log(`${this.name} has done ${this.firepower} damage.`);
      if (enemy.hull <= 0) {
        console.log(`${enemy.name} is destroyed!`);
      }
      return `${enemy.name} hull: ${enemy.hull}`;
    }
  }
}

let ussAssembly = new Ship("USS Assembly", 20, 5, 0.7);
let alienFleet = [new Ship("Alien Ship 1", 10, 3, 0.6), new Ship("Alien Ship 2", 8, 4, 0.5), new Ship("Alien Ship 3", 12, 2, 0.8)];
let currentAlien = 0;
let statusMessage = document.getElementById("status-message");

document.getElementById("attack-button").addEventListener("click", function() {
  if (ussAssembly.hull > 0 && alienFleet.length > 0) {
    ussAssembly.attack(alienFleet[currentAlien]);
    if (alienFleet[currentAlien].hull > 0) {
      alienFleet[currentAlien].attack(ussAssembly);
      statusMessage.textContent = `${alienFleet[currentAlien].name} has attacked you!`;
    } else {
      console.log(`You have destroyed ${alienFleet[currentAlien].name}!`);
      alienFleet.splice(currentAlien, 1);
      if (alienFleet.length > 0) {
        currentAlien = 0;
        statusMessage.textContent = `You have destroyed ${alienFleet[currentAlien].name}!`;
      } else {
        statusMessage.textContent = "You have destroyed all the alien ships. You win!";
      }
    }
  } else if (ussAssembly.hull <= 0) {
    statusMessage.textContent = "You have been destroyed. Game over.";
  }
});

document.getElementById("retreat-button").addEventListener("click", function() {
  statusMessage.textContent = "You have retreated. Game over.";
});
