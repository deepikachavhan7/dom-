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
    axios.post('https://crudcrud.com/api/05501e15ecf4401fb42b4899f3e5f21f/add_expense_data',addexpense)
    .then((response)=>{
        showOnScreen(response.data)
        console.log(response);
    })
    .catch((err)=>{
        document.body.innerHTML=document.body.innerHTML+"<h3>Something went wrong</h3>"
    })
    
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/05501e15ecf4401fb42b4899f3e5f21f/add_expense_data')
    .then((response)=>{
        for(var i=0;i<response.data.length;i++){
            showOnScreen(response.data[i]);
            console.log(response.data[i]);
        }
    })
    .catch((err)=>{
        console.log(err);
    })
    
})


function showOnScreen(expense){
    document.getElementById('amount').value="";
    document.getElementById('description').value="";
    document.getElementById('category').value=" ";



    const parentnode=document.getElementById('choose');
    const childhtml=`<li id="${expense._id}">
    ${expense.c_amt} *** ${expense.c_dscpt} *** ${expense.c_ctgry}
    <button onClick=deleteexpense('${expense._id}')> Delete </button> 
    <button onClick=editexpense('${expense.c_amt},${expense.c_dscpt},${expense.c_ctgry},${expense._id}')> Edit </button> 
    </li>`;
    parentnode.innerHTML=parentnode.innerHTML+childhtml;
    // editexpense(amt,des,ctgry);
}



function editexpense(amt,des,ctgry,expense_id){
    document.getElementById('amount'),value=amt;
    document.getElementById('description').value=des;
    document.getElementById('category').value=ctgry;
    deleteexpense(expense_id)
    axios.put(`https://crudcrud.com/api/05501e15ecf4401fb42b4899f3e5f21f/add_expense_data/${expense_id}`,{
        c_amt:amt,
        c_dscpt:des,
        c_ctgry:ctgry

    })

}

function deleteexpense(expense_id){
    console.log(expense_id);
    // localStorage.removeItem(amt);
    axios.delete(`https://crudcrud.com/api/05501e15ecf4401fb42b4899f3e5f21f/add_expense_data/${expense_id}`)

    removeexpenseFromScreen(expense_id);
}

function removeexpenseFromScreen(expense_id){
    const parentnode=document.getElementById('expense');
    const childnodetodeleted=document.getElementById(expense_id);
    if(childnodetodeleted){
        parentnode.removeChild(childnodetodeleted)
    }
}