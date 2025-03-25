/* 1 - Verificar se um número é par ou ímpar
Crie um programa que receba um número e verifique se ele é par ou ímpar:
*/

function verificarParImpar(n) {
    return n % 2 == 0 ? n+' é par' : n+' é ímpar';
}

numero = prompt('digite o número')
window.alert(verificarParImpar(numero));