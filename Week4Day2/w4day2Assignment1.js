"use strict";
var Environment;
(function (Environment) {
    Environment["Local"] = "LOCAL";
    Environment["Development"] = "DEVELOPMENT";
    Environment["Staging"] = "STAGING";
    Environment["Prod"] = "PRODUCTION";
})(Environment || (Environment = {}));
function runTests(test) {
    console.log(`The chosen Environment is: ${test}`);
}
runTests(Environment.Local);
runTests(Environment.Development);
runTests(Environment.Development);
runTests(Environment.Prod);
