//Part one

class Vehicle {
	constructor(make, model, year){
		this.make = make;
		this.model = model;
		this.year = year;
	}
	honk(){
		return('Beep');
	}
	toString(){
		return`${this.make}, ${this.model} from ${this.year}`;
	}
}

//Part two
class Car extends Vehicle{
	constructor(make, model, year){
 		super(make,model,year);
		this.numWheels = 4;
	}
}

//Part three
class Motorcycle extends Vehicle {
	constructor(make, model, year){
		super(make,model,year);
	   	this.numWheels = 2;
   }
   revEngine(){
	return('VROOM!!!');
 }
}

//Part four
class Garage {
	constructor(capacity){
		this.vehicles = [];
		this.capacity = capacity;
	}
	add(newVehicle){
		if (!newVehicle instanceof Vehicle) {//is newvehcile and instance of Vehicle
		return 'Only vehicles are allowed here';
	}
	if(this.vehicles.length >= this.capacity){
		return "Sorry, we're full" 
	}
	this.vehicles.push(newVehicle);
	return "Vehicle added!";
}
}