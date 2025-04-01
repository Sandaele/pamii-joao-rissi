/* 2 - Verificar se um número é positivo, negativo ou zero  
Crie um programa que verifique se um número é positivo, negativo ou zero. 
*/

function verificarPositivoNegativoZero(n) {
    return n >= 0 ? (n == 0 ? n+' é zero' : n+' é positivo') : n+'é negativo';
}

function botão2() {
    numero = prompt('digite o número')
    window.alert(verificarPositivoNegativoZero(numero));
}