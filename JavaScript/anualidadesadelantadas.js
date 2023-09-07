var formulario = document.forms.adelantadas
var resultado = document.getElementById("adelantadas")
 
formulario.tiempo.oninput = calcularAV

formulario.monto.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() { 
  let s = parseFloat(formulario.monto.value)
  let n = parseFloat(formulario.tiempo.value)
  let i = parseFloat((formulario.interes.value)/100)
  
  let total = s*((1+i)*((((1+i)**n)-1)/i))
  resultado.innerHTML = total.toFixed(2)

}
       





