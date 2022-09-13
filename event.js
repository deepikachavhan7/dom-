document.addEventListener('DOMContentLoaded',()=>{
let count=0;

 let btn=document.getElementById("clickme");
btn.addEventListener("click",()=>{
console.log("Dom has Loaded",++count);
});
});




  