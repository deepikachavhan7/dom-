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
// crete post function

function createPost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createAt: (new Date().getTime())});
        callback();
        //lastEditedinSecondago();

    },2000)
};


createPost({title:"three",body:"this is three post"},getposts);
createPost({title:"four",body:"this is four post"},getposts);

var timer;
var count=0;
function lastEditedinSecondago(){
    count=0;
    clearInterval(timer)
    timer=setInterval(()=>{
        count++;
        console.log("count time:",count);
    },5000)
};
