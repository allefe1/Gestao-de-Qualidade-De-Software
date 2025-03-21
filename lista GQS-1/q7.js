/* Verificar Palíndromo
Desenvolva uma função palindromo(str) que receba uma string e retorne
true se a string for um palíndromo (lê-se da mesma forma de frente para
trás), ou false caso contrário.
*/

function palindromo(str) {
    return str === inverterString(str);
}