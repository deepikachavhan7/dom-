var form =document.querySelector("#container");

var nameinput =document.querySelector('#Uname');
var mailinput =document.querySelector('#mail');
var pwdinput =document.querySelector('#pwd');
var msg =document.querySelector('.msg');
var Formdata = document.querySelector('#users');


//event 
form.addEventListener('submit', onclickdata);

//object to localstorage
function onclickdata(e){
    e.preventDefault();
    const username =e.target.uname.value;
    const usermail=e.target.uemail.value;
    const userpass=e.target.upassword.value;
    localStorage.setItem('name',username);
    localStorage.setItem('email',usermail);
    localStorage.setItem('password',userpass);
    let myobj1={
        username,
        usermail,
        userpass
    }
    console.log(localStorage.setItem("userdetails",JSON.stringify(myobj1)));
    var data_deserialized=JSON.parse(localStorage.getItem("myobj1"));
       console.log(data_deserialized);

    
}

