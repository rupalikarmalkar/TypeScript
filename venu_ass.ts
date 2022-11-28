class Organizer{
   public id:number;
   public name:string;
    constructor(id:number, name:string){
       this.id =id;
       this.name= name;
    }

   public Print(): void {
      console.log("Event details");
//      console.log(` ${this.id}, ${this.name} `);
  }
   
}

class Eevent extends Organizer{
   public description:string;
   public starttime:string;
constructor(id:number, name:string, description:string , starttime:string){
super();
this.id =id;
this.name =name;
this.description =description;
this.starttime = starttime;
}

// overriding parent class print method .
public Print(): void {
   super.Print()        //when u  r calling method from parent class to child that time we have to use super.print()
  // console.log(`  ${this.description}  ${this.starttime}`);

}
}




class Venu  extends Organizer{
   public description:string;
   public address :string;
constructor(id:number, name:string, description:string ,starttime:string ,address:string){
super();
this.id =id;
this.name =name;
this.description =description;
this.address = address;
}

// overriding parent class print method .
public Print(): void {
   super.Print()        //when u  r calling method from parent class to child that time we have to use super.print()
   //console.log(`  ${this.description}  ${this.address}`);

}
}





let orgna : Organizer[]= new Array(new Organizer(7,"Neha Pande"), new Eevent( 7,"Neha Pande","Birthday Party","5 PM"),
                                            new Venu(7
                                              ,"Neha Pande","Aishwarya Banquet Hall" ,"Near AES College","Pune"));

for(var item of orgna) {
 item.Print(); 
 console.log(item);
 
}

//console.log(orgna);
