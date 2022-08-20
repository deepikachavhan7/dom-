this.person="global object";
//console.log(this.person);

this.garage={
    table:"table",
    cleanmethod(){
        console.log(`study ${this.table}`);
    }
};
console.log(this.garage.table);


let car={
    type:"vehicle",
    cleanmethod(){
        console.log(`cleaning ${this.type}`);
    }

};
// console.log(this.car);

car.cleanmethod();
this.garage.cleanmethod();


//using function 
`use strict`;
this.type="table";
const student = function(soap){
    console.log(`cleaning ${this.type} using ${soap}`);
};


student.call(this,"some cleanser");

// innerfunction
this.type="table";
const student1 = function(soap){
    let that =this
    const innerfunction = function(_saop){

   
    console.log(`cleaning ${that.type} using ${_saop}`);

}
innerfunction.call(this,soap);
};

student1.call(this,"some cleanser");

// using bind
this.type="table";
const student2 = function(soap){
    let that =this
    const innerfunction = function(_saop){

   
    console.log(`cleaning ${that.type} using ${_saop}`);
}

innerfunction.bind(this)(soap);
};

student2.call(this,"some cleanser");
//using arrowfuncton

this.type="hiii";
const student3 = function(soap){
    let that =this
    const innerfunction = (_saop)=>{

   
    console.log(`cleaning ${that.type} using ${_saop}`);
}

innerfunction(soap);
};

student3.call(this,"some cleanser");


//constructor function
let person1 =function(name){
    this.table=`${name}? dear`
}

person1.prototype.student = function(soap){
    console.log(`hello ${this.table} i am ${soap}`);
};



const kavi =new person1("how are u");
kavi.student("good");


//using class

class Person2{
    constructor(name){
        this.fname  =`${name} dear`
    }
    personmethod(age){
        console.log(`i am  ${this.fname} and age ${age}`);

    }
}
const prsn1 = new Person2("deep");
prsn1.personmethod(19);


class Student {
    
    constructor(name,age,phonenumber,marks) {
        this.name= name;
        this.age=age;
        this.number=phonenumber;
        this.marks=marks
        
    }
    checkeligiblity(){
        if (this.marks>40){
            console.log("elgible");
        }
        else{
            console.log("not elgible");
        }
    }
}

const stu1 =new Student("deep",13,243443,56);
const stu2 =new Student("deep2",12,243443,70);
const stu3 =new Student("deep3",14,256443,5);
const stu4 =new Student("deep4",16,67657443,15);
const stu5 =new Student("deep5",13,5653443,45);


stu1.checkeligiblity();
stu2.checkeligiblity();
stu3.checkeligiblity();
stu4.checkeligiblity();
stu5.checkeligiblity();

class Student {
    static count=0;
    
        constructor(name,age,phonenumber,marks) {
            this.name= name;
            this.age=age;
            this.number=phonenumber;
            this.marks=marks;
            Student.noofstudent();
            
        }
        static noofstudent(){
            return(Student.count++);
        }
    
        checkeligiblity(){
        if (this.marks>40){
            console.log("elgible");
        }
        else{
            console.log("not elgible");
        }
    }
}

const stu1 =new Student("deep",13,243443,56);
const stu2 =new Student("deep2",12,243443,70);
const stu3 =new Student("deep3",14,256443,5);
const stu4 =new Student("deep4",16,67657443,15);
const stu5 =new Student("deep5",13,5653443,45);


stu1.checkeligiblity();
stu2.checkeligiblity();
stu3.checkeligiblity();
stu4.checkeligiblity();
stu5.checkeligiblity();
console.log(Student.noofstudent());

let getA = a => {
    return a;
}
console.log(getA(2));
///
let square= a=>a*a;
console.log(square(4)); 
///
let square1 =(a)=>{return a*a}

console.log(square1(4));
////
var a=5;

let square2 =()=>{return a*a}

console.log(square2());


////
var a=5;

let square4 =_=>{return a*a}

console.log(square4());
////
 var a=6;
 var b=7;
 let multiply=_=>{return a*b}
 console.log(multiply(a,b));
 ///
  var x=function(){
    this.val=1;
    setTimeout(() => {
        this.val++;
        console.log(this.val)
        
    }, 1);
}
    var xx = new x();
    ////
    var x =(...n)=>{
        console.log(n[0])

    }
    x(1,2,3);


class Student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }

    placementage(minage){
        return  (minmarks)=>{
            if(this.marks>minmarks && this.age>minage){
                console.log(`${this.name }is eligible for placement`);
            }
            else{
                console.log(`${this.name }is not  eligible for placement`);
            }
        }
    }
}

const deep =new Student("deep",12,45);
const parii = new Student("pari",34,12);    
deep.placementage(40)(34);
parii.placementage(12)(67);
