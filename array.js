// Simple Array
// const car = [
//     "BMW",
//     "Audi",
//     "TATA",
//     "MAHINDRA"
// ]
// console.log(car);

//Methods In Array

// 1. Array.push 
// const animals = ['cow', 'bull', 'sheep'];
// console.log(animals);

// const count = animals.push('Goat')
// console.log(count)  // Size of the array
// console.log(animals);


// // 2. Array.Map
// const array1 = ['1', '2', '3', '4'];
// console.log(array1);
// const map = array1.map(x => x * 2);
// console.log(map);


// // 3.Array.Filter
// const words = ['Rahul', 'Sohel', 'Abhishek', 'John', 'Sagar', 'Stark'];
// const result = words.filter(word => word.length >= 5);
// console.log(result);


// // 4.Array.from
// console.log(Array.from('foo'));
// // Expected output: Array ["f", "o", "o"]


// // 5.Array.find
// const array = [5, 12, 15, 9, 8];     // provide the first element of the given condition 12 or 12 ki jagha kuh or hota toh vo no.
// const found = array.find(e => e > 10);
// console.log(found);


// 6.Array.slice
// const animals = ['Cow', 'elephant', 'camel', 'horse', 'ant'];

// console.log(animals.slice(2));
// console.log(animals.slice(2, 4));
// console.log(animals.slice(3, 4));
// console.log(animals.slice(1, 3));


// 7.Array.splice
// const months = ['jan', 'feb', 'march', 'may', 'june'];
// months.splice(3, 0, 'april');      // Means 0 Not any element to replace it
// console.log(months);
// months.splice(4, 1, 'July');          // Means 1 element to replace it
// // Replaces 1 element at index 4
// console.log(months);


// // 8.Array.pop
// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// console.log(plants.pop());

// // 9.Array.forEach
// const array1 = ['a', 'b', 'c'];
// array1.forEach(element => console.log(element));

// // 10.Array.concat
// const company = ['BMW', 'TATA', "HYNDAI", 'HONDA', 'TOYOTA'];
// const car = ['sportz', 'Harrier', 'Aura', 'City', 'Innova'];
// const array2 = company.concat(car);
// console.log(array2);

//11.Array.reduce
const arr = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10


