/*Contar Vogais em uma String
Desenvolva uma função contarVogais(str) que conte e retorne o número de
vogais (a, e, i, o, u) em uma string fornecida.
 */

function contarVogais(str) {
    let vogais = 'aeiouAEIOU';
    return [...str].filter(char => vogais.includes(char)).length;
}