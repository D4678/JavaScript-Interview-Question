function greeting(name){
    alert(`Hello ${name}`)
}

function process(callback){
    const name = prompt("Enter your name")
    callback(name);
}

process(greeting);
