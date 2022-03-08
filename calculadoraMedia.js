//Código criado na imersão Dev - Março/2022

var nome = "Letícia"
var notaPrimeiroBimestre = 8
var notaSegundoBimestre = 7
var notaTerceiroBimestre = 10
var notaQuartoBimestre = 9


var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre +
notaQuartoBimestre) / 4 
var notaFixada = notaFinal.toFixed(2)

console.log("A nota final de " + nome + "é: " + notaFixada)