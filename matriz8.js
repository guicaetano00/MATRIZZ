/*
8- Crie uma matriz 3x3 com números aleatórios entre 0 e 20.
Em seguida, exiba a matriz na tela e encontre o maior
elemento da matriz e a posição em que ele se encontra.
*/
console.clear();
var teclado = require("prompt-sync")();
var matrizDois = new Array(3);
var maior = 0;
var coluna = 3;
var linha = 3;
var coluna2 = 0;
var linha2 = 0;
for (var i = 0; i < linha; i++) {
    matrizDois[i] = new Array(3);
    for (var j = 0; j < coluna; j++) {
        var numero = Math.floor(Math.random() * 21);
        if (numero > maior) {
            maior = numero;
            linha2 = i;
            coluna2 = j;
        }
        matrizDois[i][j] = numero;
    }
}
console.log(matrizDois);
console.log("O maior \u00E9: ".concat(maior, " na posi\u00E7\u00E3o ").concat(linha2, ", ").concat(coluna2));
