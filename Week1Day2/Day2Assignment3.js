/* Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and
`runTests` with `switch` for test type messages.
 */

function launchBrowser(browserName) {
  if (browserName === "Chrome") console.log("This is a Chrome browser");
  else if (browserName === "Firefox") console.log("This is a Firefox browser");
  else if (browserName === "Safari") console.log("This is a Safari browser");
  else console.log("Unknown browser");
}

function runTests(testType) {
  switch (testType) {
    case "sanity":
      console.log("Running sanity tests");
      break;
    case "regression":
      console.log("Running regression tests");
      break;
    default:
      console.log("Running smoke tests");
      break;
  }
}

launchBrowser("Chrome"); // Output: This is a Chrome browser
launchBrowser("Firefox"); // Output: This is a Firefox browser
launchBrowser("Safari"); // Output: This is a Safari browser
launchBrowser("Edge"); // Output: Unknown browser   
runTests("sanity"); // Output: Running sanity tests
runTests("regression"); // Output: Running regression tests
runTests("smoke"); // Output: Running smoke tests