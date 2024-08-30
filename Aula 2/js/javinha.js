alert("Boa noite");
// O comando "prompt" tem a mesma função de "input"
// O comando "document.write" seria o "Print"
// o comando "parseInt" define a variável para o tipo Inteiro
var nome = prompt("Digite o nome completo:");
var altura = parseFloat(prompt("Digite a altura:"));
var peso = parseFloat(prompt("Digite o peso:"));

var imc = peso / (altura * altura);

alert("Nome: "+nome+" Seu IMC: "+imc);