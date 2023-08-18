class Animal {
    constructor(name) {
      this.animalname = name;
    }
    present() {
      return `My dog's name is `+ this.animalname;
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
    show() {
      return this.present() + ', it is a ' + this.breed;
    }
  }
  
  let myDog = new Dog("Sheru", "Pomerian");
console.log(myDog.show());