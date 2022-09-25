const name=document.querySelector('#book_name');

const mail=document.querySelector('#book_mail');
const password=document.querySelector('#book_pwd');
const form= document.querySelector('#container');
                         
form.addEventListener('submit',onsubmit);

function onsubmit(event){
    event.preventDefault();
    const bb_name =event.target.bname.value;
    const bb_email=event.target.bemail.value;
    const bb_pwd=event.target.bpwd.value;
    
  
    const new_user={
        bb_name,
        bb_email,
        bb_pwd
    }

newuser_stringify=JSON.stringify(new_user);
localStorage.setItem(new_user.bb_email,newuser_stringify); // to store datain locaLstorage
// add data on screen function call
showNewUserOnScreen(new_user)
}

// when dom is created show data in localstorage

window.addEventListener('DOMContentLoaded',()=>{
    const localstorage_obj= localStorage;
    localstorage_obj_keys= Object.keys(localstorage_obj);

  
// to show all data of localstroge in  screen  
    for (let key of localstorage_obj_keys){
       
        const user_detail_string= localstorage_obj[key]
       const user_detail_object = JSON.parse(user_detail_string);
       showNewUserOnScreen(user_detail_object)// 
    }

})


// crerate function add data only on  screen not in localstorage
function showNewUserOnScreen(user){
    document.getElementById('book_name').value='';
    document.getElementById('book_email').value='';
    document.getElementById('book_pwd').value='';


    // if(localStorage.getItem(user.bb_email)!=null){
    //     removeUserFromScreen(useremailid)
    // }

    const parentnode=document.getElementById("listofuser");// create parentnode
    const childhtml= `<li id="${user.bb_email}"> 
    ${user.bb_name}  --->    ${user.bb_email} --->    ${user.bb_pwd} ---> 
    <button style="padding:5px; margin-top:10px" onclick=deleteUser('${user.bb_email}') > Delete </button> --->   
    <button style="padding:5px; margin-top:10px" onclick=editUserDetails('${user.bb_name}','${user.bb_email}','${user.bb_pwd}') > EDIT </button>      
  
    
    </li>`// inject child htlm in ul tag 
    parentnode.innerHTML= parentnode.innerHTML + childhtml; // show to html inner content ofhtml parent node and child node both 
}

/// delelte user  
function deleteUser(useremailid){
    //console.log(useremail);
    localStorage.removeItem(useremailid);
    /// to remove user from screen  function call
    removeUserFromScreen(useremailid)
}


// create function remove user from screen

function removeUserFromScreen(useremailid){
    //console.log(useremailid);
    const parentnode=document.getElementById("listofuser");
    const childhtmltobedeleted= document.getElementById(useremailid);
    parentnode.removeChild(childhtmltobedeleted)
}


// function edit user

function editUserDetails(useremailid,user_name,user_pass)
{
    document.getElementById('book_name').value=useremailid;
    document.getElementById('book_email').value=user_name;
    document.getElementById('book_pwd').value=user_pass;
removeUserFromScreen(useremailid)
    deleteUser(useremailid)
}











