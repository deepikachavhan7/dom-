const posts=[
    {title:"one",body:"this  is one post",createAt:new Date().getTime()},
    {title:"two",body:"this  is two post",createAt:new Date().getTime()}
];
//get function
function getposts(){
    setTimeout(()=>{
        let output="";
        posts.forEach((post,index)=>{
            output=output+`<li>${post.title} created >>> ${(new Date().getTime()-post.createAt)/1000}</li>`

        })
        document.body.innerHTML=output;

    },1000);

};

// create promises
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve("resolve promise")
            }
            reject("error:something went wrong")
        },2000);

    })
   
};


function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
            for(let i =0;i<=posts.length;i++){
                if(posts.values!==0){
                    resolve(posts.pop());
                }
                else{
                    reject("array is empty")
                }
            }
        },5000);
    })
}
createPost({title:"post three",body:'this is three post',createAt:new Date().getTime()})
.then(()=>{getposts()
    deletePost()
.then(()=>{
        getposts()
});
    
});

createPost({title:"post four",body:'this is four post',createAt:new Date().getTime()})
.then(()=>{getposts()
    deletePost()
.then(()=>{
        getposts()
});
    
});

/// promie all
const promise1= new Promise((resolve,reject)=>{
    resolve("hello world")
});

const promise2=10;
const  promise3= new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"good bye")});

const promise4=fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json());
Promise.all([promise1,promise2,promise3,promise4]).then(values=>console.log(values));
