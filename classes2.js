 // Q.2 Create an Automobile class. The class will have name, model, color, type properties and create different methods e.g openOrCloseDoor() 
//  logs doors are opened or closed, start() logs car is ready for drive. 
// Create Car, Bus and Truck child class from the Automobile Class.

class autoMobile {
constructor(name, model, color, type){
    this.name = name;
    this.model = model;
    this.color = color;
    this.type = type;
}
openDOOR(){
    console.log("doors are opened");
}
closeDooR(){
    console.log("doors are closed");
}
startEngine(){
    console.log("engine is turned on");
}
}
class car extends autoMobile{
    constructor(horsepower,numberofdoors,manufacturer){
        this.horsepower = horsepower;
        this.numberofdoors = numberofdoors;
        this.manufacturer = manufacturer;
    }
}
    class Bus extends autoMobile{
        constructor(numberofseats){
            this.numberofseats = numberofseats;
        }
    }
    class Truck extends autoMobile{

    }
