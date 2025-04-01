/* 6 - Inverter uma string 
Crie um programa que inverta uma string (sequência de caracteres).
*/

function inverterString(string) {
    invertida = {}
    for (let j = string.lenght; j = 0; j--) {
        invertida += string[1]
    }
    return 'a palavra '+string+' fica '+invertida+' invertida'
}

function botão6() {
    string = prompt('digite a palavra')
    window.alert(inverterString(string));
}