class animalKingdom {
    constructor(name, backbone, bloodType) {
        if (this.constructor === animalKingdom)
            throw new Error("Cannot instantiate this class directly");
        this.name = name;
        this.backbone = backbone;
        this.bloodType = bloodType;
    }

    
    getName() {
        return this.name;
    }

    getbackbone() {
        return this.backbone;
    }

    getbloodType() {
        return this.bloodType;
    }

    displayInfo() {
        console.log(`Name: ${this.getName()}`);
        console.log(`Backbone: ${this.getbackbone()}`);
        console.log(`Blood Type: ${this.getbloodType()}`);
    }

    
    foodChoice() {
        console.log("Food they eat");
    }
}

// mammals
class Mammals extends animalKingdom {
    constructor(name) {
        super(name, true, "Warm-blooded");
    }

    foodChoice() {
        console.log("Food: bones, organs and vegetables");
    }
}

// fish
class Fish extends animalKingdom {
    constructor(name) {
        super(name, true, "Cold-Blooded");
    }

    foodChoice() {
        console.log("Food: capelin, barracudina, lanternfish");
    }
}

// arthropoda
class Arthropoda extends animalKingdom {
    constructor(name) {
        super(name, false, "Cold-Blooded");
    }

    foodChoice() {
        console.log("Food: decaying fruits ");
    }
}

// aves
class Aves extends animalKingdom {
    constructor(name) {
        super(name, true, "Warm-Blooded");
    }

    foodChoice() {
        console.log("Food: mice, rats and frogs");
    }
}

// amphibia
class Amphibia extends animalKingdom {
    constructor(name) {
        super(name, true, "Cold-blooded");
    }

    foodChoice() {
        console.log("Food: flies, moth, snails, worms ");
    }
}

// reptiles
class Reptiles extends animalKingdom {
    constructor(name) {
        super(name, true, "Cold-Blooded");
    }

    foodChoice() {
        console.log("Food: birds, frogs and lizards ");
    }
}

const dogs = new Mammals("dogs");
dogs.displayInfo();
dogs.foodChoice();

const salmon = new Fish("salmon");
salmon.displayInfo();
salmon.foodChoice();

const millipedes = new Arthropoda("millipedes");
millipedes.displayInfo();
millipedes.foodChoice();

const frog = new Amphibia("frog");
frog.displayInfo();
frog.foodChoice();

const snake = new Reptiles("snake");
snake.displayInfo();
snake.foodChoice();

const owl = new Aves("owl");
owl.displayInfo();
owl.foodChoice();
