class Person {
  constructor (name, age, city) {
  this.name = name;
  this.age =age;
  this.city = city;
  }
   
  name() {
      return `person name is ${this.name}`
  }
  age() {
      return `person age is ${this.age}`
  }
  city() {
      return `person age is ${this.city}`
  }
}   


class Governor extends Person{
  static state = 'Maryland';
  constructor (name, age, city, sport, gender) {
      super(name, age, city)

      this.sport = sport;
      this.gender = gender;
  }
  sportPreferred () {
      return `${this.name}'s home is  ${this.state}`
  }
  from () {
      return `${this.name}'s home is  ${this.state}`
      
  }    
  
  // gender() {    
  //     return `${this.name}'s home is  ${this.gender}`
  // }
  greeting () {
  return `Vote ${this.name} Hello there!`;
  }
  favoriteMeal () {
      return 'Chicken and Waffles';
  }

}


class PostalWorker extends Person{
  
  deliver() {
      return `${this.name} delivered your mail`
  }
  runFromCat() {
      return `Please get your cat before he gets me!`  
  }    
  
}


class Boss extends Person{
  
  cooks() {
      return `${this.name} has prepared a favorite meal.`
  }
  clean() {
      return `${this.name} get back to work.`
  }    
  
}

let postalworker1 = new PostalWorker('Jaime', 15, 'brown');
console.log(postalworker1, postalworker1.deliver(), postalworker1.runFromCat());

let postalworker2 = new PostalWorker('John', 37, 'green');
console.log(postalworker2, postalworker2.deliver(), postalworker2.runFromCat());


let Boss1 = new Boss('Miguel', 17, 'black');
console.log(Boss1, Boss1.cooks(), Boss1.clean());

let Boss2 = new Boss('Juan', 20, 'white');
console.log(Boss2, Boss2.cooks(), Boss2.clean());


let governor = new Governor('Carlos', 55, 'light brown','Bronx', 'male');
console.log(governor, governor.sportPreferred(), governor.from, Governor.state, governor.greeting, governor.favoriteMeal());