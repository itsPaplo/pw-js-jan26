/* Write a JavaScript program to observe how the same variable name behaves:
* in *global scope*,
* inside a *function*, and
* inside an *if-block* using both var and let. */

var genderType = "female";

function printGender(){
    let color = "brown";


if(genderType === "female"){
    var age = 30;
    let color = "pink";
    console.log(color);
}
    console.log(age);
}

printGender();
console.log(genderType);
genderType = "male";
console.log(genderType);