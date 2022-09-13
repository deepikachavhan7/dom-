const posts=[
    {title:"post one",body:"tnis is onne post",createAt:new Date().getTime()},
    {title:"post two",body:"tnis is two post",createAt:new Date().getTime()},
    
];
let intervalid=0;
function getPosts(){
    clearInterval(intervalid);
   intervalid= setInterval(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}>>>> last updatedtime ${(new Date().getTime()-post.createAt)/1000} second ago</li>`;
        });
        document.body.innerHTML=output;},1000);

}

getPosts();



function createPost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createAt:(new Date().getTime())});
        callback();
        lastEditedinSecondago();
    },2000);
    //lastEditedinSecondago();
}
createPost({title:'post four',body:'this is four post'},getPosts);




createPost({title:'post third',body:'this is third post'},getPosts);

var timer;
var count=0;
function lastEditedinSecondago(){
    count=0;
    clearInterval(timer)
    timer=setInterval(()=>{
        count++;
        console.log("cout no :",count);
    },5000);
}