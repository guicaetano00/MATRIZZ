/*
4- Altere o código dois(2) desse conteúdo para funcionar
com números, faça o teste se o laço de repetição
referente a linha da matriz chega criar a quarta linha, salve
dessa forma e anexe a atividade o arquivo .ts e um print
da tela do cmd(prompt command) com o resultado do
teste.
*/
console.clear();
var teclado = require("prompt-sync")();
var matrizDois = new Array(4);
for (var i = 0; i < 4; i++) {
    matrizDois[i] = new Array(4);
    for (var j = 0; j < 4; j++) {
        var numero = teclado("Digite o n\u00FAmero que vai estar no endere\u00E7o [".concat(i, ", ").concat(j, "]: "));
        matrizDois[i][j] = numero;
    }
}
console.log(matrizDois);
