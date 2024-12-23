class Animal {
  constructor(private species: string) {}

  // Getter for species
  get species() {
    return this.species;
  }

  // Method to make sound
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Cat extends Animal {
  constructor(species: string) {
    super(species); // Call the parent class constructor
  }

  // Method for purring
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  constructor(species: string) {
    super(species); // Call the parent class constructor
  }

  // Method for barking
  bark() {
    console.log("woof");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
