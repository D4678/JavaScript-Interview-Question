// Regular Function.
function Greet() {
    console.log("Welcome to GFG!");
};
// Execution of Regular Function.
Greet();

// IIFE creation and execution.
(function () {
    console.log("Welcome to GFG!");
})();



function myFunc()
{
    console.log("Welcome to");
    // This will be executed after executing the previous log.
    (function() { console.log("Dhruv Kumar Maurya!"); })();
    console.log("Hi There!");
}
  
// Calling the Function.
myFunc();