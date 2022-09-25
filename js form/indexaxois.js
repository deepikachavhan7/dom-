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

    axios.post('https://crudcrud.com/api/3d9a7e6417444037bdf67bacdbbdfb1c/appiontment_book',new_user)
    .then((response)=>{
        showNewUserOnScreen(response.data)
        console.log(response);
    })
    .catch((err)=>{
        document.body.innerHTML=document.body.innerHTML+"<h3>Something went wrong</h3>"
    })


}

// when dom is created show data in localstorage

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/3d9a7e6417444037bdf67bacdbbdfb1c/appiontment_book')
    .then((response)=>{
        for(var i=0;i<response.data.length;i++){
            showNewUserOnScreen(response.data[i]);
            console.log(response.data[i]);
        }
    })
    .catch((err)=>{
        console.log(err);
    })
    


    


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
    const childhtml= `<li id="${user._id}"> 
    ${user.bb_name}  --->    ${user.bb_email} --->    ${user.bb_pwd} ---> 
    <button style="padding:5px; margin-top:10px" onclick=deleteUser('${user._id}') > Delete </button> --->   
    <button style="padding:5px; margin-top:10px" onclick=editUserDetails('${user.bb_name}','${user.bb_email}','${user.bb_pwd}','${user._id}') > EDIT </button>      
  
    
    </li>`// inject child htlm in ul tag 
    parentnode.innerHTML= parentnode.innerHTML + childhtml; // show to html inner content ofhtml parent node and child node both 
}

/// delelte user  
function deleteUser(userid){
   //console.log(userid);
   axios.delete(`https://crudcrud.com/api/3d9a7e6417444037bdf67bacdbbdfb1c/appiontment_book/${userid}`)
    /// to remove user from screen  function call
    removeUserFromScreen(userid)
}


// create function remove user from screen

function removeUserFromScreen(userid){
    //console.log(useremailid);
    const parentnode=document.getElementById("listofuser");
    const childhtmltobedeleted= document.getElementById(userid);
    parentnode.removeChild(childhtmltobedeleted)
}


// function edit user

function editUserDetails(useremailid,user_name,user_pass,userid)
{
    document.getElementById('book_name').value=useremailid;
    document.getElementById('book_email').value=user_name;
    document.getElementById('book_pwd').value=user_pass;

    deleteUser(userid)
    axios.put(`https://crudcrud.com/api/3d9a7e6417444037bdf67bacdbbdfb1c/appiontment_book/${userid}`,{
        "bb_name":user_name,
        "bb_email":useremailid,
        "bb_pwd":user_pass

    })
}











