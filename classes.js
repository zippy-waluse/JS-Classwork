class Person{
    constructor(name,age){

        this.name = name;
        this.age = age;

    }

greet(){
    console.log(
          `Hello,my name is $(this.name) and I am ${this.age} years old`
         );
    }
}

const adam = new Student('Adam',30);
console.log({adam});
adam.greet();


class Student extends Person{
    constructor(name,age, school){
        super(name,age)
        this.school = school
    }

    profession(){
        console.log(`I am a student at ${this.school}`);
    }
};

const student = new student('Jane', 19,'AkiraChix');
console.log({student});
student.profession();