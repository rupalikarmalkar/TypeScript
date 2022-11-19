interface IProduct {
    id:number;
    name:string;
    description?:string;
    price:number  // declartion only in interface.
    display():void;

    
}

var objProduct : IProduct = {
    id : 123,
    name: "IPhone",
    description: "It's awesome",
    price: 60000 ,// I have given implementation for IProduct interface
    display() :void{
    console.log(this.id + " " + this.name);
    
}
}



var objProduct : IProduct = {
    id : 124,
    name: "Android",
    description: "It's too awesome",
    price: 70000 ,// I have given implementation for IProduct interface
    display():void{
        console.log(this.id + " " + this.name);
        
    }
}