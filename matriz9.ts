/*
9- Crie uma matriz 6x6 com entrada manual. Em seguida,
calcule e exiba a soma dos elementos das colunas pares da
matriz.
*/

console.clear();
let teclado = require (`prompt-sync`)();
let matrizDois: number[][] = new Array(6);
let soma: number = 0;

for (let i = 0; i < 6; i++) {
    matrizDois[i] = new Array(6);

    for (let j = 0; j < 6; j++){
   let numero: number = parseInt(teclado(`Digite o número que vai estar no endereço [${i}, ${j}]: `));
    matrizDois[i][j] = numero;

    if (j % 2 == 0) {
        soma += numero;
    }
}
}
console.log(matrizDois);
console.log(soma);