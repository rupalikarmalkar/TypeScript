class Calculator{
    static fun(num1:number,num2:number){
        var a = num1+num2;
        console.log(`The Addition of number  is ${num1}  + ${num2} = ${a}`);
        
        var b = num1-num2;
        console.log(` The subtraction of number  is   ${num1} - ${num2}  = ${b}`);
        
        var c = num1*num2;
        console.log(`The  Multiplication of number  is   ${num1} * ${num2} = ${c}`);
        
        var d = num1/num2;
        console.log(`The Division  of number  is  ${num1} /${num2}  ${d}`);
        
    
    }
};
Calculator.fun(75,25);
