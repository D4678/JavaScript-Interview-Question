//bind example
const john = {
    name: 'John',
    age: 24,
};

const jane = {
    name: 'Jane',
    age: 22,
};

function greeting() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
}

const greetingJohn = greeting.bind(john);
// Hi, I am John and I am 24 years old
greetingJohn();

const greetingJane = greeting.bind(jane);
// Hi, I am Jane and I am 22 years old
greetingJane();


//call Example
function greeting() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
  }
  const hulk = {
    name: 'Hulk',
    age: 24,
  };
  const thor = {
    name: 'Thor',
    age: 22,
  };
  // Hi, I am Hulk and I am 24 years old
  greeting.call(hulk);

  // Hi, I am Thor and I am 22 years old
  greeting.call(thor);


  //Apply Example
function greet(greeting, lang) {
  console.log(lang);
  console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
}
const anand = {
  name: 'Anand',
  age: 24,
};
const stiphen = {
  name: 'Stiphen',
  age: 22,
};

// Hi, I am John and I am 24 years old
greet.apply(anand, ['Hi', 'en']);
// Hi, I am Jane and I am 22 years old
greet.apply(stiphen, ['Hola', 'es']);