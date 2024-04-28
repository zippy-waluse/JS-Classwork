const cup={
    color:'red',
    Size:'small',
    texture:'smooth',
    shape:'round',
    functionality:{
        drinkingtype:'tea',
        temperature:'hot'
    },
    drink: function(){
        console.log('use me to drink');
        console.log(`My purpose is to drink ${this.functionality.temperature} ${this.functionality.drinkingtype}`)
    }
};
console.log({color:cup.color});
console.log('size',cup.Size);
console.log('temperature',cup.functionality.temperature);
console.log('texture',cup['texture']);
cup.model='glass';
console.log({cup});
// deleting
delete cup.model
console.log({cup});
// changing value
cup.color='green';
console.log({cup});
cup.drink();
const keys=Object.keys(cup)
console.log({keys});
const values=Object.values(cup);
console.log({values});
Object.keys(cup).forEach(item=>{
    console.log({key:item,value:cup[item]});
})
const loop =Object.keys(cup).map(item=>{
    return ({key:item,value:cup[item]});
})
console.log({loop});