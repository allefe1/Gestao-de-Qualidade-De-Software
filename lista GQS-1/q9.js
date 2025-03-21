/*9. Contar Ocorrências de um Caractere em uma String
Crie uma função contarOcorrencias(str, char) que conte quantas vezes um
caractere específico aparece em uma string.
 */

function contarOcorrencias(str, char) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            contador++;
        }
    }
    return contador;
}