     
        
do{
    var miles = prompt("Enter miles driven");
    miles = parseFloat(miles);	
if(isNaN(miles) ||miles <=0){
    alert("wrong value entered");
    continue;
}
else{
    break;
}	
}while(true)
do{
var gallons = prompt("Enter gallons of gas used");
gallons = parseFloat(gallons)
if(isNaN(gallons) ||gallons <=0){
    alert("wrong value entered");
}
else{
    break;
}
}while(true)

var mpg = miles/gallons;
mpg = parseInt(mpg);
alert("Miles per gallon = " + mpg);
