class Passenger {
    firstName : string;
    lastName:string;
    frequencyFlyerno : number
    constructor( firstName : string,  lastName:string,     frequencyFlyerno : number ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequencyFlyerno = frequencyFlyerno;
    }
    display(){
        console.log(this.firstName +" " + this.lastName +"" + this.frequencyFlyerno);

    }
}
var passenger = new Passenger("Jack","Sparrow",102);
passenger.display();
var passenger2 = new Passenger("Harry","Potter",498);
passenger2.display();

// for (const item in passenger) {
//         if(item !== "display"){
//             console.log(item);
//             console.log(passenger[item]);
            
            
//         }
//     }

for (const item in passenger) {
    if(passenger[item]instanceof Function){
        continue
    }else{
        console.log(item);
        console.log(passenger[item]);
        
        
    }
        
    }

