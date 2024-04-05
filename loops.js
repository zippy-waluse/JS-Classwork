const multiply = (num) => {
    let newArray = [];

    for(let i = 0; i<num.length; i++){
        const multiplyByTwo = num[i]*2;
        newArray.push(multiplyByTwo);
    }
    return newArray
}

// For loop index for of x gives element

console.log(multiply([2,3,4,5,6,7,8]));

const totalSum = (numbers) => {
    let sum = 0;
    for(let num of numbers){
        sum += num;
    }

    return sum;
}

console.log(totalSum([2,3,4,5,6,7]));

// while loop(check if condition is met)
const students = (studentNames) => {
    while(studentNames.length > 2){
        console.log('Teach students');
        studentNames.pop();
        if(studentNames.length === 2){
            console.log('You are left with two students');
            break;
        }

    }

};
students(['Ema','Eve','Ann','Judith'])

// do while

const kickBall = (leg) =>{
    do{
        console.log('Kick the ball');
    }while(leg)
};
kickBall(false)

// switch statements