//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass.js");

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)

class Mercury extends VehicleModule.Vehicle{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);

        this.maximumPassangers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;
    }
    loadPassenger(num){
        if(this.passenger < this.maximumPassangers){
            this.passenger = num;
            return availableRoom == true
        } else if(this.passenger == this.maximumPassangers){
            console.log(this.model + " " + this.make + " is full.")
        } else {
            console.log(this.model + " " + this.make + " not enough room for all passangers.");
        }
    }
    start(){
        if (this.fuel > 0) {
            console.log("engine started!!!");
            return this.started = true;
        } else {
            console.log("engine cannot start due to no fuel!");
            return this.started = false;
        }
    }
    scheduleService(mileage){
        if(this.mileage>30000){
            this.scheduleService == true;
            return this.scheduleService;
        }
    }   
}