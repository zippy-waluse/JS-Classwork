const internship = false;
const ourPromise = new Promise((resolve, reject)=>{
    if(internship){
        resolve('I made it');
    }
    else{
        reject('I will try harder')
    }
})

ourPromise.then(()=>{
    console.log('I will continue working hard');
})
.catch(()=>{
    console.log('I will continue applying for jobs')
})

.finally(()=>{
    console.log('I will be a software engineer')
})
getUserData(id) 
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve(` ID ${id}`);
      }, 3000);
    });
console.log({ourPromise});

// .then() ---successful
// .catch)()---- rejected
// .finally --- resolved
// Take call back functions

// asyncronus does not go line by line
// always returns a promise
// use try{}and catch{}(whatever was written in the reject function)


async function myAkiraChixDream(){
   try{
    console.log('This is my dream');
    await ourPromise;
   }
   catch{
    console.log('I will be a software engineer')
   }
}

myAkiraChixDream();


