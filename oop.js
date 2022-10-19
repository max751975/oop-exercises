
//1.

class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    honk() {
      return "Beep.";
    }

    //2.

    toString(){
      return `This vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }

}

//3.

class Car extends Vehicle {
  constructor(make, model, year){
    super(make, model, year);
    this.numWheels = 4;
  }
}

//4

class Motorcycle extends Vehicle{
  constructor(make, model, year){
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine(){
    return `VROOM!!!!`
  }
}

//5.

class Garage{
  constructor(capacity){
    this.vehicles = [];
    this.capacity = capacity;
  }
  add(newVehicle){
    if (this.vehicles.length >= this.capacity){
      return `Sorry, we are full!`;
    }
    if (!(newVehicle instanceof Vehicle)){
      return `Only vechicles are allowed here`;
    }
    this.vegicles.push(newVehicle);
    return `Your vehicle sucsessfully added`;
  }
}