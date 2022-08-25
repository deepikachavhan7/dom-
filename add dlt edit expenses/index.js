var form =document.querySelector("#container");
var amt= document.querySelector("#amount");
var des=document.querySelector("#description");
var ctgry=document.querySelector("#category");


form.addEventListener('submit',onsubmit);

function onsubmit(event){
    event.preventDefault();
    const c_amt=event.target.amt.value;
    const c_dscpt=event.target.des.value;
    const c_ctgry= event.target.ctgry.value;

    const addexpense={
        c_amt,
        c_dscpt,
        c_ctgry

    }
    localStorage.setItem(addexpense.c_amt,JSON.stringify(addexpense));
    showOnScreen(addexpense);
}

window.addEventListener("DOMContentLoaded",()=>{
    const localStorageObj=localStorage;
    const localStoragekeys=Object.keys(localStorageObj);

    for (var i =0;i<localStoragekeys.length;i++){
        const key=localStoragekeys[i];
        const expensedetailsString =localStorageObj[key];
        const expensedetailsobj=JSON.parse(expensedetailsString);
        showOnScreen(expensedetailsobj);

    }
})


function showOnScreen(expense){
    document.getElementById('amount').value="";
    document.getElementById('description').value="";
    document.getElementById('category').value=" ";



    const parentnode=document.getElementById('choose');
    const childhtml=`<li>${expense.c_amt}***${expense.c_dscpt}***${expense.c_ctgry}
    <button onClick=deleteexpense('${expense.c_amt}')> Delete </button> 
    <button onClick=editexpense('${expense.c_amt},${expense.c_dscpt},${expense.c_ctgry}')>Edit </button> 
    </li>`;
    parentnode.innerHTML=parentnode.innerHTML+childhtml;
    editexpense(amt,des,ctgry);
}



function editexpense(amt,des,ctgry){
    document.getElementById('amount'),value=amt;
    document.getElementById('description').value=des;
    document.getElementById('category').value=ctgry;
    deleteexpense(amt);
}

function deleteexpense(amt){
    console.log(amt);
    localStorage.removeItem(amt);
    removeexpenseFromScreen(amt);
}

function removeexpenseFromScreen(amt){
    const parentnode=document.getElementById('expense');
    const childnodetodeleted=document.getElementById(amt);
    if(childnodetodeleted){
        parentnode.removeChild(childnodetodeleted)
    }
}