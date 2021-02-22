window.addEventListener('load',init)

function init(){
    document.getElementById('btn').addEventListener('click',kiir)
}


function kiir(){

   let text=document.getElementById('txt').value
    document.getElementById('list').innerHTML+="<li>"+text+"</li>"
}