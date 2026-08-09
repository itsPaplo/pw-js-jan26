function add (a,b,cb){

      cb(a,b);
    console.log("sum:", a+b);

  
}

function subtract(a,b){
    console.log("Subtraction:", a-b);
}

add(20,15,subtract);