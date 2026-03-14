function calcular(){

let peso=parseFloat(document.getElementById("peso").value)

let kilataje=parseFloat(document.getElementById("kilataje").value)

let precio=parseFloat(document.getElementById("precio").value)

if(!peso || !kilataje || !precio){

alert("Datos inválidos")

return

}

let oroPuro=(kilataje/24)*peso

let valor=oroPuro*precio

document.getElementById("resultado").innerText=
`
Oro puro: ${oroPuro.toFixed(2)} g
Valor estimado: $${valor.toFixed(2)}
`

}

function volver(){

window.location="menu.html"

}