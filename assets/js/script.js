// const carrossel = document.getElementById('itenss');
// const tamanho = document.getElementById('itenss').clientWidth / 5;
// const botoes = document.querySelectorAll('.botao');

// let valor = 0;
// let transicao = 1;

// function trocarSlide(novoValor) {
//     if (transicao) clearInterval(transicao); // interrompe a transição em andamento
//     valor = novoValor;
//     carrossel.style.marginLeft = `calc(-${tamanho} * ${valor}px)`;
//     adicionarClasseBackground(valor);
//     transicao = setInterval(() => {
//         valor++;
//         if (valor == 5)
//          valor = 0;
//         carrossel.style.marginLeft = `calc(-${tamanho} * ${valor}px)`;
//         adicionarClasseBackground(valor);
//     }, 3000);
// }

// function adicionarClasseBackground(valor) {
//     botoes.forEach((botao, index) => {
//         if (index == valor) botao.classList.add('ativo');
//         else botao.classList.remove('ativo');
//     });
// }

// trocarSlide(0); // Inicia a transição

// botoes.forEach((botao, index) => {
//     botao.addEventListener('click', () => {
//         trocarSlide(index);
//     });
// });

// function mostrarItem(indice) {
//     trocarSlide(indice);
// }



// RESETANDO O FORMULARIO AO DAR SUBMIT
var campo1 = document.getElementById('form');
function nada(){
    alert("Desculpe, mas esta enquete não pode receber mais votos.");
    campo1.reset();
}


const carrossel = document.getElementById('itenss');
let tamanho = document.getElementById('itenss').clientWidth / 5;

let valor = 1;
setInterval(() => {
    carrossel.style.marginLeft = `calc(-${tamanho} * ${valor}px)`;
    
    valor++;
    if(valor == 5){
        valor = 0;
    }
}, 3000);

// let radio = document.getElementsByClassName('botao1');

// function teste(teste){
//     let tamanho = document.getElementById('itenss').clientWidth / 5;
//     if (teste == 'botao1'){
//         carrossel.style.marginLeft = `calc(-${tamanho} * 0px)`;
//         let div = document.getElementsById('botao1');
//         div.classList.toggle("background");
//     }
//     if (teste == 'botao2'){
//         carrossel.style.marginLeft = `calc(-${tamanho} * 1px)`;
//     }
//     if (teste == 'botao3'){
//         carrossel.style.marginLeft = `calc(-${tamanho} * 2px)`;
//     }
//     if (teste == 'botao4'){
//         carrossel.style.marginLeft = `calc(-${tamanho} * 3px)`;
//     }
//     if (teste == 'botao5'){
//         carrossel.style.marginLeft = `calc(-${tamanho} * 4px)`;
//     }
// }
























// const carrossel = document.getElementById('itens');
// let tamanho = document.getElementById('itens').clientWidth / 5;
// let tamanho2 = tamanho * Math.sign(`-${tamanho}`);

// console.log(tamanho2);

// let valor = 1
// setInterval(() => {
    
//     console.log(valor, tamanho2);
//     carrossel.style.marginLeft = tamanho * valor;
//     let margin = tamanho2 * valor;
//     console.log(margin);
    
//     valor++;
//     if(valor > 4){
//         valor = 0;
//     }
// }, 1000);