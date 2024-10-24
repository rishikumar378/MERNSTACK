console.log("BMI CALCULATOR") //body mass index
var weight=81;//in kg
var height=1.92;//in meters
var bmi=weight/(height*height);
if(bmi<18.5){
    console.log("UNDER WEIGHT")
}
else if(bmi>18.5 && bmi<24.9){
    console.log("NORMAL WEIGHT")
}
else if(bmi>25 && bmi<29.9){
    console.log("OVER WEIGHT")
}
else if(bmi>30){
    console.log("OBESE")
}
 else{
     console.log("WRONG ENTRY")
 }