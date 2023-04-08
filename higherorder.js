const interview = (name) =>{
    if(name === 'Dhruv'){
      return function(topic){
        console.log(`Hii ${name}. what is Your ${topic}?. Plz Explain`)
      }
    }

    if(name === 'Ashish'){
        return function(topic){
          console.log(`Hii ${name}. what is Your${topic}?. Plz Explain`)
        }
      }

      if(name === 'Maurya'){
        return function(topic){
          console.log(`Hii ${name}. what is Your${topic}?. Plz Explain`)
        }
      }else{
        return function(){
            console.log("Failed")
        }
      }
}

interview()