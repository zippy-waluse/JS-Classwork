// function nums (){
//     const a = 2;
//     console.log({a});
//     function add(){
//         const b = 3;
//         console.log(a+b);
//     };
//     add();
// }


// nums();

function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random();
        if (randomValue > failureProbability) {
            resolve(`${taskName} succeeded`);
        } else {
            reject(`${taskName} failed`);
        }
    });
}

async function executeWithRetry(taskName, retries, failureProbability) {
    // Write your code here
}

executeWithRetry("SampleTask", 3, 0.5);