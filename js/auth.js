function register(){

let user=document.getElementById("newUser").value
let pass=document.getElementById("newPass").value

if(!user || !pass){
alert("Campos vacíos")
return
}

let users=JSON.parse(localStorage.getItem("users")) || {}

if(users[user]){
alert("Usuario ya existe")
return
}

users[user]=pass

localStorage.setItem("users",JSON.stringify(users))

alert("Registro exitoso")

window.location="index.html"

}


function login(){

let user=document.getElementById("username").value
let pass=document.getElementById("password").value

let users=JSON.parse(localStorage.getItem("users")) || {}

if(users[user] && users[user]==pass){

window.location="menu.html"

}else{

alert("Credenciales incorrectas")

}

}