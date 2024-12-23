class Animal {
    constructor(species) {
        this._species = species; // Store species in a private variable
    }
    
    // Getter for species
    get species() {
        return this._species;
    }
    
    // Corrected method name to makeSound
    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(species) {
        super(species); // Call the parent constructor with species
    }
    
    bark() {
        console.log( 'woof');
    }
}

class Cat extends Animal {
    constructor(species) {
        super(species); // Call the parent constructor with species
    }
    
    purr() {
        console.log(`purr`);
    }
}

// Exposing classes for testing in the browser
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
