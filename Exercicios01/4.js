/* 4 - Verificar se um número é primo 
Crie uma função que verifica se um número é primo. Um número primo é aquele que só pode 
ser dividido por 1 e por ele mesmo.
*/

function verificaPrimo(n) {
    if (n <= 1) return false
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function botão4() {
    let numero = prompt('digite o número');
    let resultado = verificaPrimo(numero) ? 'é primo' : 'não é primo';
    window.alert('o número '+numero+resultado);
}
