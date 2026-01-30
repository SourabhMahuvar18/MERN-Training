// factory design pattern
/* 
    Factory Pattern provides an interface for creating objects, but lets subclasses 
    or logic decide which class to instantiate(create object).
 */

// problem of object creation if we use same class for multiple object blueprints
// let type = "truck";
// if (type == "car") {
//   obj = new Car();
// } else if (type == "bike") {
//   obj = new Car();
// } else {
//   obj == new Truck();
// }

// the above code is very tight couple and hard to extend (scale)

// same thing using the factory pattern

class VehicleFactory {
  static create(type) {
    switch (type) {
      case "car":
        return new Car();
      case "bike":
        return new Bike();
      case "truck":
        return new Truck();
      default:
        throw new Error("Invalid type");
    }
  }
}

// real use cases 
// create option classes
class Dog {
  speak() {
    return "Bark";
  }
}

class Cat {
  speak() {
    return "Meow";
  }
}

// create a factory class
class AnimalFactory {
  static createAnimal(type) {
    if (type === "dog") return new Dog();
    if (type === "cat") return new Cat();
    throw new Error("Invalid animal");
  }
}

const animal = AnimalFactory.createAnimal("dog");
console.log(animal.speak());



