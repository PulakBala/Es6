 class Car {
    constructor(name, year)  {
        this.name = name;
        this.year = year;
    }
    age(){
       let date = new Date();
       return date.getFullYear() - this.year; 
    }
 }
let car1 = new Car('Toyota', 2017);
console.log(car1);