// Before Arrow Function
hello = function () {
    console.log("Simple Function Hello World!");
}
hello();

// After Arrow Function
hello = () => {
    console.log("Arrow Function Hello World!");
}
hello()

// It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
bye = () => "Hello World!";

// Arrow Function With Parameters:
hello = (val) => "Hello " + val;

// Arrow Function Without Parentheses:
hello = val => "Hello " + val;