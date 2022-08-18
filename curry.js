// let multiply= function(x,y){
//     console.log(x*y)
// }
// let mutliplybytwo =multiply.bind(this,2);
// mutliplybytwo(3);

// let mutliplybythree =multiply.bind(this,5);
// mutliplybythree(3);

///closures
let multiply=function(x){
    return function(y){
        console.log(x*y);
    }
}
let mutliplybytwo=multiply(3);
mutliplybytwo(5);