class Animal {
    constructor(species) {
        this._species = species; // Store species in a private variable
    }
    
    // Getter for species
    get species() {
        return this._species;
    }
    
    makesound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(species) {
        super(species); // Call the parent constructor with species
    }
    
    bark() {
        console.log(`The ${this.species} barks: woof`);
    }
}

class Cat extends Animal {
    constructor(species) {
        super(species); // Call the parent constructor with species
    }
    
    purr() {
        console.log(`The ${this.species} purrs: mew`);
    }
}

window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
