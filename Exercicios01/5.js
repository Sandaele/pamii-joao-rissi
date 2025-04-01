/* 5 - Contar quantas vezes uma letra aparece em uma palavra 
Crie um programa que conte quantas vezes uma letra aparece em uma palavra.
*/

function contarLetras(palavra, letra) {
    for (let i = 0; i = palavra.lenght; i++) {
        contagem = 0
        if (palavra[1].toLowerCase() === letra.toLowerCase()) {
            contagem++
        }
    }
    return 'a letra '+letra+' aparece '+contagem+' vezes em '+palavra
}

function botão5() {
    palavra = prompt('digite a palavra')
    letra = prompt('digite a letra')
    window.alert(verificarParImpar(palavra, letra));
}