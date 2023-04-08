// let var and const

function add() {
    let a = 5;
    a = 9;
    //  let a = 1     // cannot redcalre blockscoped variable
    console.log(a)
}
add()

function sub() {
    const b = 7;
    // b = 9;             // throws an error to assignment to constant variable
    console.log(b)
}
sub()

var c = 1;
function div() {
    var c = 2;
    c = 9;
    console.log(c)
}
div()
