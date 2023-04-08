async function f(){
    let promise = new Promise((resolve,reject)=>{
        console.log("I am under f function")
        setTimeout(()=>resolve("Done!"),2000)
        console.log("waiting for the code completed")
    });
 
    console.log("waiting promise")
    let result = await promise; // wait untill the promise is resolved
    console.log(result);
    console.log("End")
}

f();


async function wheather(){
    let bareillyWeather = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve("28 Deg")
      },1000)
    })
    console.log("Fetching bareilly Weather Please wait.....")
    let bareillyW = await bareillyWeather
    console.log("Fetched bareilly Weather: "+ bareillyW)
    return[bareillyW]
}

wheather();