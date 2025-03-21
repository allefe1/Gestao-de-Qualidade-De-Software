/*Encontrar o Fatorial de um Número
Implemente uma função fatorial(n) que calcule o fatorial de um número
inteiro positivo.
 */


function fatorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * fatorial(n - 1);
}