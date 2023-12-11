import readlineSync from 'readline-sync';

let sair: boolean = false;
do {
  const prova: number = readlineSync.questionFloat('Digite a nota da prova: ');
  const pim: number = readlineSync.questionFloat('Digite a nota do PIM:');
  const ava: number = readlineSync.questionFloat('Digite a nota da AVA:');

  const media: number = ((7 * prova) + (2 * pim) + ava) / 10;

  console.log('------------------------------------');
  
  console.log(`A média final é: ${media.toFixed(2)}`);

  if (!readlineSync.keyInYN("Deseja calcular outra média?")) {
    sair = true;
  }
} while (!sair);
