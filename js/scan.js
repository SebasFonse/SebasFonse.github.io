function scan(){

let probabilidades=[75,80,85,90,95]

let grabados=["18K","14K","750"]

let resultado=`
Color detectado: Dorado
Grabado detectado: ${grabados[Math.floor(Math.random()*grabados.length)]}
Desgaste: Bajo
Probabilidad de oro real: ${probabilidades[Math.floor(Math.random()*probabilidades.length)]}%
`

document.getElementById("result").innerText=resultado

}

function volver(){

window.location="menu.html"

}