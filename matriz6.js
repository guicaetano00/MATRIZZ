/*
6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,
exiba a matriz na tela.
*/
console.clear();
var teclado = require("prompt-sync")();
var matrizDois = new Array(3);
for (var i = 0; i < 3; i++) {
    matrizDois[i] = new Array(3);
    for (var j = 0; j < 3; j++) {
        var numero = teclado("Digite o n\u00FAmero que vai estar no endere\u00E7o [".concat(i, ", ").concat(j, "]: "));
        matrizDois[i][j] = numero;
        if (numero <= 9) {
            matrizDois[i][j] = numero;
        }
        else {
            j--;
            console.log("!! Tem que ser um n\u00FAmero menor que 10 !!");
        }
    }
}
console.log(matrizDois);
