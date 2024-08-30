var nota1 = parseFloat(prompt("Insira a primeira nota: "))
var nota2 = parseFloat(prompt("Insira a segunda nota:"))
var nota3 = parseFloat(prompt("Insira a terceira nota:"))
var media = (nota1 + nota2 + nota3) / 3

if(media >= 7){ 
alert("APROVADO")
}
else
{
    alert("REPROVADO")
}

document.write("Sua nota na primeira prova foi: "+nota1+"<br/>")
document.write("Sua nota na segunda prova foi: "+nota2+"<br/>")
document.write("Sua nota na terceira prova foi: "+nota3+"<br/>")
document.write("Logo a sua média é: "+media)
