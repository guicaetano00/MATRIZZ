/*
6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,
exiba a matriz na tela.
*/

console.clear();
let teclado = require (`prompt-sync`)();
let matrizDois: number[][] = new Array(3);

for (let i = 0; i < 3; i++) {
    matrizDois[i] = new Array(3);
    
    for (let j = 0; j < 3; j++){
   let numero: number = teclado(`Digite o número que vai estar no endereço [${i}, ${j}]: `);
    matrizDois[i][j] = numero;
    if (numero <= 9) {
        matrizDois[i][j] = numero;
    } else {
      j--;
      console.log(`!! Tem que ser um número menor que 10 !!`);
    }
  }
}
console.log(matrizDois);