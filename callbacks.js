function greet(userName,callback){
    console.log(`Helloe there ${userName}`);

    callback();

};

function intro(){
    console.log('This is me');
};


greet('Hellen',intro);


setTimeout(intro, 2000);


// effecutes after every 3sec
setInterval(function(){
    console.log('This is an Interval')
},3000);