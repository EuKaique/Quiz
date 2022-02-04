
var esporteImg = document.querySelector(".esporte-img");
var esporteQuestion1 = document.querySelector(".ocultar-esporte");
var esportes = document.querySelector(".buttonEsportes");
var sectionEsporte = document.querySelector(".esporte");

var sectionFilme = document.querySelector(".filme");
var filmeImg = document.querySelector(".filme-img");
var filmeQuestion1 = document.querySelector(".ocultar-filme");
var filmes = document.querySelector(".buttonFilme");

var sectionHistoria = document.querySelector(".historia");
var historiaImg = document.querySelector(".historia-img");
var historiaQuestion1 = document.querySelector(".ocultar-historia");
var historia = document.querySelector(".buttonHistoria");

var sectionAnimais = document.querySelector(".animais");
var animaisImg = document.querySelector(".animais-img");
var animaisQuestion1 = document.querySelector(".ocultar-animais");
var animais = document.querySelector(".buttonAnimais");

var tempo = document.getElementById('tempo');

/*ESPORTES*/
function botaoEsporte(){
    sectionEsporte.style.display = 'block';
    esporteImg.style.display = 'flex';
    esporteQuestion1.style.display = 'block';
    esporteQuestion1.style.height = '20rem';
    document.querySelector('.footer').style.marginTop = '12rem';

    document.querySelector('.buttonFilme').style.display = "none";
    document.querySelector('.buttonHistoria').style.display = "none"; 
    document.querySelector('.buttonAnimais').style.display = "none";     
}

/*FILMES*/
function botaoFilmes(){
    sectionFilme.style.display = 'block';
    filmeImg.style.display = 'flex';
    filmeQuestion1.style.display = 'block';
    filmeQuestion1.style.height = '10rem';
    document.querySelector('.footer').style.marginTop = '12rem';
    filmes.style.marginBottom = "3rem";
    filmes.style.marginTop = "-5rem";
    filmes.style.marginLeft = "0";

    document.querySelector('.buttonEsportes').style.display = "none";
    document.querySelector('.buttonHistoria').style.display = "none"; 
    document.querySelector('.buttonAnimais').style.display = "none";     
}

/*HISTORIA*/
function botaoHistoria(){
    sectionHistoria.style.display = 'block';
    historiaImg.style.display = 'flex';
    historiaQuestion1.style.display = 'block';
    historiaQuestion1.style.height = '10rem';
    document.querySelector('.footer').style.marginTop = '12rem';
    historia.style.marginBottom = "3rem";
    historia.style.marginTop = "-5rem";
    historia.style.marginLeft = "0";

    document.querySelector('.buttonEsportes').style.display = "none";
    document.querySelector('.buttonFilme').style.display = "none"; 
    document.querySelector('.buttonAnimais').style.display = "none";     
}

/*ANIMAIS*/
function botaoAnimais(){
    sectionAnimais.style.display = 'block';
    animaisImg.style.display = 'flex';
    animaisQuestion1.style.display = 'block';
    animaisQuestion1.style.height = '10rem';
    document.querySelector('.footer').style.marginTop = '12rem';
    animais.style.marginBottom = "3rem";
    animais.style.marginTop = "-5rem";
    animais.style.marginLeft = "0";

    document.querySelector('.buttonEsportes').style.display = "none";
    document.querySelector('.buttonFilme').style.display = "none"; 
    document.querySelector('.buttonHistoria').style.display = "none";     
}
    
/*CONTADOR DO TEMPO*/

//Para esporte
function iniciarTempo1(duracao1, tela1) {
    var tempo1 = duracao1, minutos, segundos;
    setInterval(function () {
        minutos = parseInt(tempo1 / 60, 10);
        segundos = parseInt(tempo1 % 60, 10);
        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;
        tela1.textContent = minutos + ":" + segundos;
        if (--tempo1 < 0) {
            tempo1 = duracao1;
        }
    }, 1000);
}
//Para filme
function iniciarTempo2(duracao2, tela2) {
    var tempo2 = duracao2, minutos, segundos;
    setInterval(function () {
        minutos = parseInt(tempo2 / 60, 10);
        segundos = parseInt(tempo2 % 60, 10);
        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;
        tela2.textContent = minutos + ":" + segundos;
        if (--tempo2 < 0) {
            tempo2 = duracao2;
        }
    }, 1000);
}
//Para historia
function iniciarTempo3(duracao3, tela3) {
    var tempo3 = duracao3, minutos, segundos;
    setInterval(function () {
        minutos = parseInt(tempo3 / 60, 10);
        segundos = parseInt(tempo3 % 60, 10);
        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;
        tela3.textContent = minutos + ":" + segundos;
        if (--tempo3 < 0) {
            tempo3 = duracao3;
        }
    }, 1000);
}
//Para animais
function iniciarTempo4(duracao4, tela4) {
    var tempo4 = duracao4, minutos, segundos;
    setInterval(function () {
        minutos = parseInt(tempo4 / 60, 10);
        segundos = parseInt(tempo4 % 60, 10);
        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;
        tela4.textContent = minutos + ":" + segundos;
        if (--tempo4 < 0) {
            tempo4 = duracao4;
        }
    }, 1000);
}

//Seta o temporizador
window.onload = function () {
    // Converter para segundos
    var duracao1 = 60 * 7;
    var duracao2 = 60 * 7;
    var duracao3 = 60 * 7;
    var duracao4 = 60 * 7; 

    // selecionando o tempo
    tela1 = document.querySelector('[tempo1]');
    tela2 = document.querySelector('[tempo2]');
    tela3 = document.querySelector('[tempo3]');
    tela4 = document.querySelector('[tempo4]'); 

    // iniciando o tempo
    if(esportes.onclick){
        iniciarTempo1(duracao1, tela1);
    }       
    if(filmes.onclick){
        iniciarTempo2(duracao2, tela2);
    }
    if(historia.onclick){
        iniciarTempo3(duracao3, tela3);
    }
    if(animais.onclick){
        iniciarTempo4(duracao4, tela4);
    }
     
};


