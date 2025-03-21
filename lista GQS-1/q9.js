/*9. Contar Ocorrências de um Caractere em uma String
Crie uma função contarOcorrencias(str, char) que conte quantas vezes um
caractere específico aparece em uma string.
 */

function contarOcorrencias(str, char) {
    return [...str].filter(c => c === char).length;
}