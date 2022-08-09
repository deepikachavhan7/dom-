var form =document.getElementById("formadd");
var listitem=document.getElementById('items');
 
//  form submit event
form.addEventListener('submit', adddata);

//#### delete event 
listitem.addEventListener('click', removedtlbtn);


//add element
function adddata(e){
    e.preventDefault();

    //console.log("1");

//get input value
var getitem =document.getElementById("inputitem").value;
// create new element
var lii= document.createElement("li");
//add class
lii.className="list-group-item";
console.log(lii);
//  add textnode
lii.appendChild(document.createTextNode(getitem));
//append li to  list
listitem.appendChild(lii);

//create delete  button element
var dltbtn=document.createElement("button");
// add class in btn
dltbtn.className="btn btn-danger btn-sm float-right delete";
dltbtn.appendChild(document.createTextNode("X"));
// append btm to list

lii.appendChild(dltbtn);
}


//create function for remove item
function removedtlbtn(e){
    if(e.target.classList.contains("delete")){
        if(confirm("are you sure?")){
            var li =e.target.parentElement;
            listitem.removeChild(li);
        }
    }

}