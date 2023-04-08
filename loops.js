let n = prompt("Enter a number: ");
let f;
for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        f = 1
        break
    }
}
if (f == 1)
    console.log("prime");
else
    console.log("not prime");


//for In loop
let obj = {
    dhruv: 90,
    sumit: 10,
    abhi: 20,
    sachin: 30,
    ashu: 40,
}
for (let a in obj) {
    //console.log(a)  // Only print the keys
    console.log("Marks of " + a + " are " + obj[a])
}


//For Of loops
for (let b of "dhruv") {
    console.log(b)  // For Of Loops In used in Array
  }