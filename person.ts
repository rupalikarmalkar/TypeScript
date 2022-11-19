class Person{
    constructor( public name : string,public pro : string){
        this.name = name;
        this.pro = pro;
    }
    display(){
        console.log(this.name + " " + this.pro);
        
    }
}
  var p =  new Person("Rupali" ," UI devloper")
  p.display();