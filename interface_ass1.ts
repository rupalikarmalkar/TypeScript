interface ILaptop1 {
    name: string,
    generation: number
}
interface ILaptop2 {
    price: number,
    ram: string,
}

interface ILaptop extends ILaptop1, ILaptop2 {

    hardDisk: string,
    screenSize: string,
    processor:string
}

var laptop : ILaptop= {
    name : "HP",
    generation: 11,
    price: 65800,
    ram: "8GB",
    hardDisk: "SSD",
    screenSize: "15.6 inch",
    processor: "5i"

}

console.log(laptop);


