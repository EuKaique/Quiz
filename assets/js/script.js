//Parágrafo com mensagem e Botão de recarregar a página
var acabouEsporte = document.querySelector('.acabou-esporte');
var recomecarEsporte = document.querySelector('.recomecar-esporte');
var acabouFilme = document.querySelector('.acabou-filme');
var recomecarFilme = document.querySelector('.recomecar-filme');
var acabouHistoria = document.querySelector('.acabou-historia');
var recomecarHistoria = document.querySelector('.recomecar-historia');
var acabouAnimais = document.querySelector('.acabou-animais');
var recomecarAnimais = document.querySelector('.recomecar-animais');

//Seções da página
var esporteImg = document.querySelector(".esporte-img");
var esporteQuestion1 = document.querySelector(".ocultar-esporte");
var esporteQuestion2 = document.querySelector(".ocultar-esporte2");
var esporteQuestion3 = document.querySelector(".ocultar-esporte3");
var esporteQuestion4 = document.querySelector(".ocultar-esporte4");
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
            tempo1 = 0;

            esporteQuestion1.style.display = 'none';
            esporteQuestion2.style.display = 'none';
            esporteQuestion3.style.display = 'none';
            esporteQuestion4.style.display = 'none';

            acabouEsporte.style.display = 'block';
            recomecarEsporte.style.display = 'flex';
            
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
            tempo2 = 0;
            document.querySelector('.ocultar-filme').style.display = 'none';

            acabouFilme.style.display = 'block';
            recomecarFilme.style.display = 'flex';
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
            tempo3 = 0;
            document.querySelector('.ocultar-historia').style.display = 'none';

            acabouHistoria.style.display = 'block';
            recomecarHistoria.style.display = 'flex';
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
            tempo4 = 0;
            document.querySelector('.ocultar-animais').style.display = 'none';

            acabouAnimais.style.display = 'block';
            recomecarAnimais.style.display = 'flex';
        }
    }, 1000);
}

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
    
    //Seta o temporizador
    
    // Converter para segundos
    var duracao1 = 60 * 1;

    // selecionando o tempo
    tela1 = document.querySelector('[tempo1]');

    // iniciando o tempo
    iniciarTempo1(duracao1, tela1);
    
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
    
    //Seta o temporizador
    
    // Converter para segundos
    var duracao2 = 60 * 1;

    // selecionando o tempo
    tela2 = document.querySelector('[tempo2]');

    // iniciando o tempo
    iniciarTempo2(duracao2, tela2);
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
    
    //Seta o temporizador
    
    // Converter para segundos
    var duracao3 = 60 * 1;

    // selecionando o tempo
    tela3 = document.querySelector('[tempo3]');

    // iniciando o tempo
    iniciarTempo3(duracao3, tela3);
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
    
    //Seta o temporizador
    
    // Converter para segundos
    var duracao4 = 60 * 1;

    // selecionando o tempo
    tela4 = document.querySelector('[tempo4]');

    // iniciando o tempo
    iniciarTempo4(duracao4, tela4);
}

//Recarregar página
function recarrega(){
    document.location.reload(true);
}

//Tratando as respostas

//primeira pergunta
var esporteResposta1a = document.getElementById('esporte1_option1').checked;
var esporteResposta1b = document.getElementById('esporte1_option2').checked;
var esporteResposta1c = document.getElementById('esporte1_option3').checked;
var esporteResposta1d = document.getElementById('esporte1_option4').checked;

var nome = document.getElementsByName('flexRadioDefault');

var filmeResposta1a = document.getElementById('filme1_option1');
var filmeResposta1b = document.getElementById('filme1_option2');
var filmeResposta1c = document.getElementById('filme1_option3');
var filmeResposta1d = document.getElementById('filme1_option4');

var historiaResposta1a = document.getElementById('historia1_option1');
var historiaResposta1b = document.getElementById('historia1_option2');
var historiaResposta1c = document.getElementById('historia1_option3');
var historiaResposta1d = document.getElementById('historia1_option4');

var animaisResposta1a = document.getElementById('esporte1_option1');
var animaisResposta1b = document.getElementById('esporte1_option2');
var animaisResposta1c = document.getElementById('esporte1_option3');
var animaisResposta1d = document.getElementById('esporte1_option4');

if(document.querySelector('input[name="flexRadioDefault"]:checked')){
    document.querySelector('.next').addEventListener('click', () => {
        esporteQuestion1.style.display = 'none';
        esporteQuestion2.style.display = 'block';
    });
}

//segunda pergunta
var esporteResposta2a = document.getElementById('esporte2_option1');
var esporteResposta2b = document.getElementById('esporte2_option2');
var esporteResposta2c = document.getElementById('esporte2_option3');
var esporteResposta2d = document.getElementById('esporte2_option4');

var filmeResposta2a = document.getElementById('filme2_option1');
var filmeResposta2b = document.getElementById('filme2_option2');
var filmeResposta2c = document.getElementById('filme2_option3');
var filmeResposta2d = document.getElementById('filme2_option4');

var historiaResposta2a = document.getElementById('historia2_option1');
var historiaResposta2b = document.getElementById('historia2_option2');
var historiaResposta2c = document.getElementById('historia2_option3');
var historiaResposta2d = document.getElementById('historia2_option4');

var animaisResposta2a = document.getElementById('esporte2_option1');
var animaisResposta2b = document.getElementById('esporte2_option2');
var animaisResposta2c = document.getElementById('esporte2_option3');
var animaisResposta2d = document.getElementById('esporte2_option4');

//terceira pergunta
var esporteResposta3a = document.getElementById('esporte3_option1');
var esporteResposta3b = document.getElementById('esporte3_option2');
var esporteResposta3c = document.getElementById('esporte3_option3');
var esporteResposta3d = document.getElementById('esporte3_option4');

var filmeResposta3a = document.getElementById('filme3_option1');
var filmeResposta3b = document.getElementById('filme3_option2');
var filmeResposta3c = document.getElementById('filme3_option3');
var filmeResposta3d = document.getElementById('filme3_option4');

var historiaResposta3a = document.getElementById('historia3_option1');
var historiaResposta3b = document.getElementById('historia3_option2');
var historiaResposta3c = document.getElementById('historia3_option3');
var historiaResposta3d = document.getElementById('historia3_option4');

var animaisResposta3a = document.getElementById('esporte3_option1');
var animaisResposta3b = document.getElementById('esporte3_option2');
var animaisResposta3c = document.getElementById('esporte3_option3');
var animaisResposta3d = document.getElementById('esporte3_option4');

//quarta pergunta
var esporteResposta4a = document.getElementById('esporte4_option1');
var esporteResposta4b = document.getElementById('esporte4_option2');
var esporteResposta4c = document.getElementById('esporte4_option3');
var esporteResposta4d = document.getElementById('esporte4_option4');

var filmeResposta4a = document.getElementById('filme4_option1');
var filmeResposta4b = document.getElementById('filme4_option2');
var filmeResposta4c = document.getElementById('filme4_option3');
var filmeResposta4d = document.getElementById('filme4_option4');

var historiaResposta4a = document.getElementById('historia4_option1');
var historiaResposta4b = document.getElementById('historia4_option2');
var historiaResposta4c = document.getElementById('historia4_option3');
var historiaResposta4d = document.getElementById('historia4_option4');

var animaisResposta4a = document.getElementById('esporte4_option1');
var animaisResposta4b = document.getElementById('esporte4_option2');
var animaisResposta4c = document.getElementById('esporte4_option3');
var animaisResposta4d = document.getElementById('esporte4_option4');




