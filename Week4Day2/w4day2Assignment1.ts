enum Environment{
     Local = "LOCAL", 
     Development = "DEVELOPMENT", 
     Staging = "STAGING",
     Prod = "PRODUCTION"
}

function runTests (test : Environment): void {
    console.log(`The chosen Environment is: ${test}`);
}

runTests(Environment.Local);
runTests(Environment.Development);
runTests(Environment.Development);
runTests(Environment.Prod);
