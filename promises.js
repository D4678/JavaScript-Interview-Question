let promise = new Promise(function(resolve, reject){
        alert("Hello Promise")
        resolve();
});

console.log("Hello")
setTimeout(function(){
    console.log("I am under SetTimeout")
},2000)
console.log(promise);         // asyncronous nature in js

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("I am under Reject Promise");
//     }, 2000)
//     reject();
//     console.log("Outside of setTimeout");
// })
// console.log(promise);


// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// console.log(fetchPromise);

// fetchPromise.then((response) => {
//   console.log(`Received response: ${response.status}`);
// });

// console.log("Started request…");


// Promise Chaning
new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;

});