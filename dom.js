console.dir(document);
console.log(document.doctype);
console.log(document.URL);
console.log(document.head);
console.log(document.body);
console.log(document.title);
document.title="origin";
console.log(document.all);
console.log(document.all[11]);
document.all[18].textContent="omg";
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);
console.log(document.window);

// getelementbyid
var heads=document.getElementById("header-title");
console.log(heads.textContent);
console.log(heads.innerText);
heads.innerHTML="<h2> day</h2>"
var heads=document.getElementById("main-header");
heads.style.border="solid black 2px";

// //getelementbyclass
var items =document.getElementsByClassName("list-group-item");
for(var i= 0 ;i<items.length;i++){
items[i].style.fontWeight="bold";
items[i].style.color="green";
// }

var items =document.getElementsByClassName("list-group-item");
items[3].style.backgroundColor="green";

//query selector

var headers=document.querySelector('#main-header');
headers.style.borderBottom = "solid red 2px";

var inputss= document.querySelector('input');
inputss.value="hello mr";

var submitss =document.querySelector('input[type=submit]');
submitss.value="ok"
submitss.style.color="red";

var lastelement = document.querySelector('.list-group-item:last-child');
lastelement.style.color ='blue';

var secondelement = document.querySelector('.list-group-item:nth-child(2)');
secondelement.style.backgroundColor ='green';
var thirdelement = document.querySelector('.list-group-item:nth-child(3)');
thirdelement.style.display ='none';
s

var lastelement = document.querySelectorAll('.list-group-item');
for(var i =0; i<lastelement.length;i++){
    lastelement[i].style.fontWeight="bold";
}

var titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent ="good job";

var seconditem = document.querySelectorAll('.list-group-item');
seconditem[2].style.color="green";


var even =document.querySelectorAll('li:nth-child(even)');
for(var i=0 ; i<odd.length;i++){

even[i].style.backgroundColor ="orange";
}
var odd =document.querySelectorAll('li:nth-child(odd)');
for(var i=0 ; i<odd.length;i++){
    odd[i].style.backgroundColor ="orange";
    
}

//getelementbytagname

var lii =document.getElementsByTagName('li');
console.log(lii);
console.log(lii[1]);
lii[1].style.backgroundColor="orange";
for (var i=0;i<lii.length;i++){
    lii[i].style.backgroundColor="yellow";  
}



///treversing the dom
//parent node
var listitem =document.querySelector('#items');
console.log(listitem.parentNode);
listitem.parentNode.style.backgroundColor="green";
console.log(listitem.parentNode.parentNode);

// //parent element 
var listitem =document.querySelector('#items');
console.log(listitem.parentElement);
listitem.parentElement.style.backgroundColor="orange";
console.log(listitem.parentElement.parentElement);

//childnode

console.log(listitem.childNodes);
//children
console.log(listitem.children);
console.log(listitem.children[1]);
listitem.children[1].style.backgroundColor="blue";

//firstchild
console.log(listitem.firstChild);

//firstelementchild
console.log(listitem.firstElementChild);
console.log(listitem.firstElementChild.innerHTML);
//lastnode
console.log(listitem.lastChild);

//lastelementchild
console.log(listitem.lastElementChild);

//nextsibling
console.log(listitem.nextSibling);
console.log(listitem.nextElementSibling);

//previoussibling
console.log(listitem.previousSibling);

//previouselementsibling
console.log(listitem.previousElementSibling);
listitem.previousElementSibling.style.color ="blue";

// create element
// create div
var nwdiv=document.createElement('div');
console.log(nwdiv);
//add class

 nwdiv.className="demo";
 console.log(nwdiv);

 //add id
 nwdiv.id="helooo";

 //create attribute
 nwdiv.setAttribute('tilte','good');

 //add textNode
 var newdivtext=document.createTextNode("HEllo");
nwdiv.appendChild(newdivtext);

 console.log(nwdiv);
//add HEllo word before Item Lister
 var contain= document.querySelector('header .container');
 var h1 =document.querySelector('header h1');
 contain.insertBefore(nwdiv,h1)
//  add HEllo word before Item 1
 var contain1= document.querySelector('body .list-group'); 
 var li =document.querySelector('body li');
 contain1.insertBefore(nwdiv,li)





