function clicou(){
    var A=parseFloat(prompt("Digite o primeiro numero:"));
    var B=parseFloat(prompt("Digite o segundo numero:"));
    document.querySelector("#somar").innerHTML="Resultado da soma é:"+(A+B);
    document.querySelector("#subtrair").innerHTML="Resultado da subtraçao é:"+(A-B);
    document.querySelector("#multiplicar").innerHTML="Resultado da multiplicaçao é:"+(A*B);
    document.querySelector("#dividir").innerHTML="Resultado da divisao é:"+(A/B);
}