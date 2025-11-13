function Vehicle(vehicleType) {
  this.vehicleType = vehicleType;
}
Vehicle.prototype.blowHorn = function () {
  console.log("Honk!");
};
console.dir(Vehicle);

function Bus(make) {
  Vehicle.call(this, "Bus");
  this.make = make;
}
console.dir(Bus);
Bus.prototype = Object.create(Vehicle.prototype);
Bus.prototype.noOfWheels = 6;
Bus.prototype.accelerator = function () {
  console.log("Accelerating Bus");
  //Bus accelerator
};

Bus.prototype.brake = function () {
  console.log("Braking Bus");
  // Bus brake
};

function Car(make) {
  Vehicle.call(this, "Car");
  this.make = make;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.noOfWheels = 4;
Car.prototype.accelerator = function () {
  console.log("Accelerating Car");
};
Car.prototype.brake = function () {
  console.log("Braking Car");
};
function MotorBike(make) {
  Vehicle.call(this, "MotorBike");
  this.make = make;
}
MotorBike.prototype = Object.create(Vehicle.prototype);
MotorBike.prototype.noOfWheels = 2;

MotorBike.prototype.accelerator = function () {
  console.log("Accelerating MotorBike");
};

MotorBike.prototype.brake = function () {
  console.log("Braking MotorBike");
};
var myBus = new Bus("Mercedes");
console.dir(myBus);
var myCar = new Car("BMW");
console.dir(myCar);
var myMotorBike = new MotorBike("Honda");
console.dir(myMotorBike);

Bus.prototype = Object.create(Vehicle.prototype);
