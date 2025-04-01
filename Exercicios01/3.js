/* 3 - Soma de números de 1 a N 
Crie um programa que calcule a soma de todos os números inteiros de 1 até um número N 
informado pelo usuário.
*/

function somaTodosNumeros(n) {
    return soma = (n/2)*(1+n);
}

function botão3() {
    numero = prompt('digite o número')
    window.alert('a soma do PA ate seu número é '+somaTodosNumeros(numero));
}