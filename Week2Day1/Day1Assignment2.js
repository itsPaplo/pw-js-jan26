//Task 1: Function Declaration
function userProfile(name) {
  console.log(`Hello, ${name}!`);
}
userProfile("John");

//Task 2: Arrow Function
let double = (number) => {
  return number * 2;
};

console.log(double(8));

//Task 3: Anonymous Function
setTimeout(()=>{console.log('This message is delayed by 2 seconds')},2000);


//Task 4: Callback Function
function getUserData(c){
    setTimeout(()=>c(),3000);
}

function callbackFunction(){
    console.log("Call Back Function");
}

getUserData(callbackFunction);