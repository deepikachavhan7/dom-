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
    const newuser2={
        username,
        usermail,
        userpass
    }
    localStorage.setItem(newuser2.usermail,JSON.stringify(newuser2));
    showUserOnScreen(newuser2)
}
/// iterate over object key 
window.addEventListener("DOMContentLoaded",()=>{
    const localStorageObj = localStorage;
    const localStoragekeys= Object.keys(localStorageObj)

    for (var i=0 ; i< localStoragekeys.length;i++){
        const key =localStoragekeys[i]
        const userDetailsString =localStorageObj[key];
        const useerDetailsObj = JSON.parse(userDetailsString);
        showUserOnScreen(useerDetailsObj);
    }
})

 


// function to show data on screen
function showUserOnScreen(user){
     // function edituser
    document.getElementById('mail').value = '';
    document.getElementById('Uname').value = '';
    document.getElementById('pwd').value ='';
    // console.log(localStorage.getItem(user.emailId))
    if(localStorage.getItem(user.mail) !== null){
        removeUserFromScreen(user.mail)
    }



    const parentnode =document.getElementById("users");
    const childhtml= `<li>${user.username} :${user.usermail}:${user.userpass}
    <button onClick= deleteUser('${user.usermail}')> Delete User </button>
    <button onClick = editUserDetails('${user.usermail},${user.username},${user.userpass}')> Edit user </button>
    </li>`;
    parentnode.innerHTML=parentnode.innerHTML + childhtml;
}

//Edit User

function editUserDetails(uemail, uname, upass){

    document.getElementById('mail').value = uemail;
    document.getElementById('Uname').value = uname;
    document.getElementById('pwd').value =upass;

    deleteUser(uemail)
 }


// delelte user

function deleteUser(uemail){
    console.log(uemail)
    localStorage.removeItem(uemail)
    removeUserFromScreen(uemail)
}

function removeUserFromScreen(uemail){
    const parentNode = document.getElementById('users');
    const childnodetodeleted =document.getElementById(uemail);
    if (childnodetodeleted){
    parentNode.removeChild(childnodetodeleted)
}
}