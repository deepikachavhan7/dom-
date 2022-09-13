// const posts=[
//     {title:"post first",body:"this is one post"},
//     {title:"post second",body:"this is two post"}
    
// ]

// function getPosts(){
// let output="";
// for(let i=0; i<posts.length;i++){
//     output+=`<li>${posts[i].title}</li>`;
// }
// document.body.innerHTML=output;
// };


// getPosts();

// //create promise

// function createPost(post){
//    return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.push(post);


//             const error=false;

//             if(!error){
//                 resolve();
//             }
//             else{
//                 reject('Error:something went wrong');
//             }
//         },3000)
//     });
// }

// // delete promise

// function deletePost(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//           for(let i=0;i<=posts.length;i++) { 
//         if(posts.values!==0){
//                 resolve(posts.pop());
//             }
//             else{
//                 reject("Array is empty now");
//             }
//         }
//         },1000)
//     });
// }

// createPost({title:'post three',body:'this is post three'})
// .then(()=>{getPosts()
//     deletePost().then(()=>{
//     getPosts()
// })
    
// }).catch(err=>console.log(err));

// const promise1=Promise.resolve('hello world');
// const promise2=10;
// const promise3=new Promise((resolve,reject)=>
// setTimeout(resolve,2000,"Goodbye"));

// const promise4 =fetch('https://jsonplaceholder.typicode.com/users').then((res)=>
// res.json());

// Promise.all([promise1,promise2,promise3,promise4]).then((values)=>
// console.log(values));
// *************************************** update lastactivity



const users=[{
    username:'yash',
    lastactivitytime:new Date().getTime()
}]

function getpost1(){
    let result="";
    for(let i=0;i<users.length;i++){
        result+=`<li>update time ${ ( new Date().getTime()-users[i].lastactivitytime)/1000} seconds ago </li>`
    }
    document.body.innerHTML=result;
}
getpost1();




function createPost(user)
{
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            users.push(user);

            const error=false;

            if(!error){
                resolve();
            }
            else{
                reject('Error:Something went wrong')
            }
        },1000)


       });
}

createPost()
//updatelastactivity
//  function updatelastactivitytime(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             users.lastactivitytime= new Date().getTime();

//             resolve(users.lastactivitytime)
//         },1000)
//     })
// };

// function userupdatespost(){
//     Promise.all([createPost,updatelastactivitytime]).then(([createpostresolves,updatelastactivitytimeresolves])=>{
//         console.log(updatelastactivitytimeresolves)
//     }).catch(err => console.log(err));
// };