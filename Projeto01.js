const prompt = require("prompt-sync")();

let nome = prompt('Insira o nome do seu guerreiro:');

console.log(`
Havia um guerreiro chamado ${nome}
Em um belo dia ele foi desafiado a resgastar uma princesa adormecida no castelo;
Com toda sua coragem e bravura aceitou o desafio proposto e foi a caminho para resgatar a princesa!;
Chegando la tinham alguns desafios para ele enfrentar;
Até chegar na Princesa ele tinha 5 desafios;
Atravessar o rio cheio de crocodilos;
Achar as chaves do castelo;
Derrotar o grande dragão que proteje o castelo;
Subir todas as escadas, escapando das armadilhas;
E por fim beijar a princesa para que ela possa acordar!;
`)
console.log();


let p1 = prompt('Conseguiu atravessar o rio cheio de crocodilos?:').toLowerCase();
let p2 = prompt('Achou as chaves do castelo?:').toLowerCase();
let p3 = prompt('Derrotou o grande dragão?:').toLowerCase();
let p4 = prompt('Subiu todas as escadas e escapou de todas as armadilhas?:').toLowerCase();
let p5 = prompt('Beijou a princesa para que ela possa acordar?:').toLowerCase();
console.log();


console.log('Conseguiu atravessar o rio cheio de crocodilos?:' + p1);
console.log();
console.log('Achou as chaves do castelo?:' + p2);
console.log()
console.log('Derrotou o grande dragão?:' + p3);
console.log();
console.log('Subiu todas as escadas e desativou todas as armadilhas?:' + p4);
console.log();
console.log('Beijou a princesa para que ela possa acordar?:' + p5);
console.log();

let respostas = [p1, p2, p3, p4, p5];
let respostasSIM = 0;


for (const resposta of respostas) {
    if (resposta === 'sim') {
        respostasSIM++
    }
}

if (respostasSIM == 0) {
    console.log('Você falhou miseravelmente em salvar a princesa ):')
}
else if (respostasSIM == 1 || respostasSIM == 2) {
    console.log('Você falhou, mas ainda conseguiu atravessar o rio de crocodilos');
}
else if (respostasSIM == 3) {
    console.log('Você chegou perto de resgastar a princesa, mas acaba falhando por pouco.');
}
else if (respostasSIM == 4) {
    console.log('Você salvou a princesa, mas nao desativou todas as armadilhas.');
}
else if (respostasSIM == 5) {
    console.log('Voce salvou a princesa, Parabens!!!');
    console.log('Seus feitos serão lembrados por muitas gerações.');
}
console.log();


