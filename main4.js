var form = document.querySelector("#container");
var uname=document.querySelector("#Uname");
var uemail=document.querySelector("#mail");
var upass=document.querySelector("#pwd");
var listiitem=document.querySelector(".list");
// event

form.addEventListener('submit',onsubmitdata);

// function
function onsubmitdata(event){
    event.preventDefault();
    const username=event.target.uname.value;
    const usermail=event.target.uemail.value;
    const userpass=event.target.upassword.value;
    const newuser1={
        username,
        usermail,
        userpass
    }
    var storedata= localStorage.setItem("user1.usermail",newuser1);
    // console.log(storedata)
   showdatainli(newuser1)
   
}

function showdatainli(user){
    const parentnode =document.getElementById("users");
    const childhtml= `<li>${user.username} :${user.usermail}:${user.userpass}</li>`;
    parentnode.innerHTML=parentnode.innerHTML + childhtml;
}

