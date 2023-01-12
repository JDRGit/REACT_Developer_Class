// Below is a history of my attempts at this project for reference //

// // 1st attempt

// class Assembly {
//     constructor() {
//       this.hull = 20;
//       this.firepower = 5;
//       this.accuracy = 0.7;
  
//       this.attack = this.attack.bind(this);
//     }
  
//     attack(alien) {
//       if (Math.random() < this.accuracy) {
//         console.log(`You hit the alien ship with ${this.firepower} firepower!`);
//         alien.hull -= this.firepower;
//         if (alien.hull <= 0) {
//           console.log(`You destroyed the alien ship!`);
//           return true;
//         }
//       } else {
//         console.log(`You missed the alien ship!`);
//       }
//       return false;
//     }
//   }
  
//   class AlienShip {
//     constructor() {
//       this.hull = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
//       this.firepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
//       this.accuracy = Math.random() * (0.8 - 0.6) + 0.6;
//     }
  
//     attack(player) {
//       if (Math.random() < this.accuracy) {
//         console.log(`The alien ship hit you with ${this.firepower} firepower!`);
//         player.hull -= this.firepower;
//         if (player.hull <= 0) {
//           console.log(`The alien ship destroyed you!`);
//           return true;
//         }
//       } else {
//         console.log(`The alien ship missed you!`);
//       }
//       return false;
//     }
//   }
  
//   const player = new Assembly();
//   const alienShips = [];
//   for (let i = 0; i < 6; i++) {
//     alienShips.push(new AlienShip());
//   }
  
//   let currentAlienIndex = 0;
  
//   const attackButton = document.getElementById("attack-button");
//   attackButton.addEventListener("click", player.attack);
  
//   const retreatButton = document.getElementById("retreat-button");
//   retreatButton.addEventListener("click", function() {
//     console.log("You retreated from battle.");
//   });
  


// 2nd attempt

// class Assembly {
//     constructor() {
//       this.hull = 20;
//       this.firepower = 5;
//       this.accuracy = 0.7;
//       this.shields = 0;
//       this.missiles = 3;
  
//       this.attack = this.attack.bind(this);
//       this.useMissile = this.useMissile.bind(this);
//     }
  
//     attack(alien) {
//       if (Math.random() < this.accuracy) {
//         if (this.missiles > 0 && window.confirm("Do you want to use a missile?")) {
//           this.useMissile(alien);
//         } else {
//           console.log(`You hit the alien ship with ${this.firepower} firepower!`);
//           alien.hull -= this.firepower;
//           this.shields += Math.floor(Math.random() * 2);
//           console.log(`Your shields have been increased by ${this.shields}`);
//           if (alien.hull <= 0) {
//             console.log(`You destroyed the alien ship!`);
//             return true;
//           }
//         }
//       } else {
//         console.log(`You missed the alien ship!`);
//       }
//       return false;
//     }
  
//     useMissile(alien) {
//       this.missiles -= 1;
//       console.log(`You used a missile!`);
//       console.log(`You hit the alien ship with 15 firepower!`);
//       alien.hull -= 15;
//       if (alien.hull <= 0) {
//         console.log(`You destroyed the alien ship!`);
//         return true;
//       }
//       return false;
//     }
//   }
  
//   class AlienShip {
//     constructor() {
//       this.hull = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
//       this.firepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
//       this.accuracy = Math.random() * (0.8 - 0.6) + 0.6;
//       this.weaponPods = [];
//     }
  
//     attack(player) {
//       if (Math.random() < this.accuracy) {
//         console.log(`The alien ship hit you with ${this.firepower} firepower!`);
//         player.hull -= this.firepower;
//         if (player.hull <= 0) {
//           console.log(`The alien ship destroyed you!`);
//           return true;
//         }
//       } else {
//         console.log(`The alien ship missed you!`);
//       }
//       return false;
//     }
//   }
  
  
// 3rd attempt

// class Assembly {
//     constructor() {
//       this.hull = 20;
//       this.firepower = 5;
//       this.accuracy = 0.7;
//       this.shields = 0;
//       this.missiles = 3;
//       this.wins = 0;
//       this.powerUps = 0;
//       this.medals = 0;
  
//       this.attack = this.attack.bind(this);
//       this.useMissile = this.useMissile.bind(this);
//     }
  
//     attack(alien) {
//       if (Math.random() < this.accuracy) {
//         if (this.missiles > 0 && window.confirm("Do you want to use a missile?")) {
//           this.useMissile(alien);
//         } else {
//           console.log(`You hit the alien ship with ${this.firepower} firepower!`);
//           alien.hull -= this.firepower;
//           this.shields += Math.floor(Math.random() * 2);
//           console.log(`Your shields have been increased by ${this.shields}`);
//           if (alien.hull <= 0) {
//             console.log(`You destroyed the alien ship!`);
//             this.wins++;
//             console.log(`You have won ${this.wins} battle(s)`);
//             return true;
//           }
//         }
//       } else {
//         console.log(`You missed the alien ship!`);
//       }
//       return false;
//     }
  
//     useMissile(alien) {
//       this.missiles -= 1;
//       console.log(`You used a missile!`);
//       console.log(`You hit the alien ship with 15 firepower!`);
//       alien.hull -= 15;
//       if (alien.hull <= 0) {
//         console.log(`You destroyed the alien ship!`);
//         return true;
//       }
//       return false;
//     }
//   }
  
//   class AlienShip {
//     constructor() {
//       this.hull = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
//       this.firepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
//       this.accuracy = Math.random() * (0.8 - 0.6) + 0.6;
//       this.weaponPods = [];
//     }
  
//     attack(player) {
//       if (Math.random() < this.accuracy) {
//         console.log(`The alien ship hit you with ${this.firepower} firepower!`);
//         player.hull -= this.firepower;
//         if (player.hull <= 0) {
//           console.log(`The alien ship destroyed you!`);
//           return true;
//         }
//       } else {
//         console.log(`The alien ship missed you!`);
//       }
//       return false;
//     }
//   }

//     const player = new Assembly();
//   const alienShips = [];
//   for (let i = 0; i < 6; i++) {
//     alienShips.push(new AlienShip());
//   }
  
//   let currentAlienIndex = 0;
  
//   const attackButton = document.getElementById("attack-button");
//   attackButton.addEventListener("click", player.attack);
  
//   const retreatButton = document.getElementById("retreat-button");
//   retreatButton.addEventListener("click", function() {
//     console.log("You retreated from battle.");
//   });


// 4th attempt 

// class Assembly {
//     constructor() {
//         this.hull = 20;
//         this.firepower = 5;
//         this.accuracy = 0.7;
//         this.shield = 0;
//         this.missiles = 3;
//         this.points = 0;
//         this.score = 0; 
//         this.attackButton = document.getElementById("attack-button");
//         this.retreatButton = document.getElementById("retreat-button");
//         this.missileButton = document.getElementById("missile-button");
//         this.rechargeButton = document.getElementById("recharge-button");
//         this.attackButton.addEventListener("click", this.attack.bind(this));
//         this.retreatButton.addEventListener("click", this.retreat.bind(this));
//         this.missileButton.addEventListener("click", this.useMissile.bind(this));
//         this.rechargeButton.addEventListener("click", this.rechargeShields.bind(this));
//       }
//     }
    
//     attack(alien); {
//       if (Math.random() < this.accuracy) {
//         console.log(`You hit the alien ship with ${this.firepower} firepower!`);
//         alien.hull -= this.firepower;
//         if (alien.hull <= 0) {
//           console.log(`You destroyed the alien ship!`);
//           this.score++;
//           return true;
//         }
//       } else {
//         console.log(`You missed the alien ship!`);
//       }
//       return false;
//       }
    
//     useMissile(alien); {
//       if(this.missiles > 0) {
//         console.log(`You used a missile and did 50 damage!`);
//         alien.hull -= 50;
//         this.missiles--;
//         if (alien.hull <= 0) {
//           console.log(`You destroyed the alien ship!`);
//           this.score++;
//           return true;
//         }
//       } else {
//         console.log(`You don't have any missiles left!`);
//       }
//       return false;
//     }
    
//     rechargeShields() 
//       this.shield += Math.floor(Math.random() * (5 - 1 + 1)) + 1;
//       console.log(`Your shield has been recharged by ${this.shield} points!`);
    
    
    
//     class AlienShip {
//       constructor() {
//         this.hull = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
//         this.firepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
//         this.accuracy = Math.random() * (0.8 - 0.6) + 0.6;
//         this.numOfShips = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
//         this.weaponPods = [];
//         for (let i = 0; i < 3; i++) {
//           this.weaponPods.push({
//             hull: Math.floor(Math.random() * (6 - 3 + 1)) + 3,
//             accuracy: Math.random() * (0.8 - 0.6) + 0.6
//           });
//         }
//       }
    
//       attack(player) {
//         if (Math.random() < this.accuracy) {
//           console.log(`The alien ship hit you with ${this.firepower} firepower!`);
//           player.hull -= this.firepower;
//           if (player.hull <= 0) {
//             console.log(`The alien ship destroyed you!`);
//             return true;
//           }
//         } else {
//           console.log(`The alien ship missed you!`);
//         }
//         return false;
//       }
    
//       attackPod(player) {
//         let podsDestroyed = 0;
//         for (let i = 0; i < this.weaponPods.length; i++) {
//           if (Math.random() < this.weaponPods[i].accuracy) {
//             console.log(`The alien ship hit you with weapon pod ${i + 1} with 3 firepower!`);
//             player.hull -= 3;
//             if (player.hull <= 0) {
//               console.log(`The alien ship destroyed you!`);
//               return true;
//             }
//           } else {
//             console.log(`The alien ship missed you with weapon pod ${i + 1}!`);
//           }
//           if (this.weaponPods[i].hull <= 0) {
//             podsDestroyed++;
//           }
//         }
//         if (podsDestroyed === this.weaponPods.length) {
//           console.log("All weapon pods have been destroyed!");
//           return true;
//         }
//         return false;
//       }
//     }
    
//     const player = new Assembly();
//     const alienShips = [];
//       for (let i = 0; i < 6; i++) {
//         alienShips.push(new AlienShip());
//       }
      
//     let currentAlienIndex = 0;
      
//     const attackButton = document.getElementById("attack-button");
//       attackButton.addEventListener("click", player.attack);
      
//       const retreatButton = document.getElementById("retreat-button");
//       retreatButton.addEventListener("click", function() {
//         console.log("You retreated from battle.");
//       });
    
// 5th attempt

// class Ship {
//     constructor(name, hull, firepower, accuracy) {
//       this.name = name;
//       this.hull = hull;
//       this.firepower = firepower;
//       this.accuracy = accuracy;
//     }
//     attack(enemy) {
//       if (Math.random() > this.accuracy) {
//         console.log(`${this.name} missed!`);
//         return `${enemy.name} hull: ${enemy.hull}`;
//       } else {
//         enemy.hull -= this.firepower;
//         console.log(`${this.name} has done ${this.firepower} damage.`);
//         if (enemy.hull <= 0) {
//           console.log(`${enemy.name} is destroyed!`);
//         }
//         return `${enemy.name} hull: ${enemy.hull}`;
//       }
//     }
//   }
  
//   let playerShip = new Ship("Player Ship", 20, 5, 0.7);
//   let alienFleet = [new Ship("Alien Ship 1", 10, 3, 0.6), new Ship("Alien Ship 2", 8, 4, 0.5), new Ship("Alien Ship 3", 12, 2, 0.8)];
  
//   let currentAlien = 0;
  
//   while (playerShip.hull > 0 && alienFleet.length > 0) {
//     let choice = window.prompt("Press 'A' to attack or 'R' to retreat");
//     if (choice === "A") {
//       playerShip.attack(alienFleet[currentAlien]);
//       if (alienFleet[currentAlien].hull > 0) {
//         alienFleet[currentAlien].attack(playerShip);
//       } else {
//         console.log(`You have destroyed ${alienFleet[currentAlien].name}!`);
//         alienFleet.splice(currentAlien, 1);
//         if (alienFleet.length > 0) {
//           currentAlien = 0;
//         }
//       }
//     } else if (choice === "R") {
//       window.alert("You have retreated. Game over.");
//       break;
//     } else {
//       console.log("Invalid choice. Please enter 'A' to attack or 'R' to retreat.");
//     }
//   }
  
//   if (playerShip.hull <= 0) {
//     window.alert("You have been destroyed. Game over.");
//   } else if (alienFleet.length === 0) {
//     window.alert("You have destroyed all the alien ships. You win!");
//   }