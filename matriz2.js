console.clear();
var teclado = require("prompt-sync")();
var matrizDois = new Array(3);
for (var i = 0; i < 3; i++) {
    matrizDois[i] = new Array(3);
    for (var j = 0; j < 4; j++) {
        var nome = teclado("Digite o nome que vai estar no endere\u00E7o [".concat(i, ", ").concat(j, "]: "));
        matrizDois[i][j] = nome;
    }
}
console.log(matrizDois);
