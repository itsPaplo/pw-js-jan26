function add (a,b,c){

    console.log("sum:", a+b);

    c(20,15);
}

function subtract(a,b){
    console.log("Subtraction:", a-b);
}

add(20,15, subtract);