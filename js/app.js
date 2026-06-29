const buttons =

document.querySelectorAll(

".tab-button"

);

const pages =

document.querySelectorAll(

".page"

);

buttons.forEach(button=>{

button.addEventListener(

"click",

()=>{

buttons.forEach(

b=>b.classList.remove(

"active"

)

);

pages.forEach(

p=>p.classList.remove(

"active"

)

);

button.classList.add(

"active"

);

document

.getElementById(

button.dataset.page

)

.classList.add(

"active"

);

}

);

});


renderHome();

function renderHome(){

const list =

document.getElementById(

"homeGachaList"

);

list.innerHTML="";

}
