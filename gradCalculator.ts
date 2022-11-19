function gradeCalculation(mark1,mark2,mark3){

    var totalMarks= mark1+mark2+mark3;
    var Avreage = totalMarks/3;
    var grade = ""; 
    console.log("__________ Grade Calculator______________ ");
    console.log("Maths: "+ mark1 +" Physics : "+ mark2 +" Chemistry : "+ mark3); 
    console.log("Total Marks : "+ totalMarks);  
    
                if (Avreage>=80){
                grade="A++";}
                else if (Avreage>=70){
                grade="A+";   } 
                else if (Avreage>=60){
                grade="A";} 
                else if  (Avreage>=35 && Avreage<60){
                grade="Pass";} 
                else if  (Avreage<35){
                grade="fail";}  
    
    console.table("Students Avreage is : "+ Avreage +" and Grade is :" + grade);
    //console.log("===== ===== ===== ===== ===== ===== ====");
    } 
    gradeCalculation(60,80,70); //Call a function no of times.