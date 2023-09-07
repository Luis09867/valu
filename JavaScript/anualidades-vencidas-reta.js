var formulario = document.forms.venciadasrenta
var resultado = document.getElementById("venciadas-renta")
 
formulario.tiempo.oninput = calcularAV

formulario.monto.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() { 
  let r = parseFloat(formulario.monto.value)
  let n = parseFloat(formulario.tiempo.value)
  let i = parseFloat((formulario.interes.value)/100)
  
  let total = (i/(((1+i)**n)-1))*r
  resultado.innerHTML = total.toFixed(2)

}
       





