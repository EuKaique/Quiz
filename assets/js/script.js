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
var filmeQuestion2 = document.querySelector(".ocultar-filme2");
var filmeQuestion3 = document.querySelector(".ocultar-filme3");
var filmeQuestion4 = document.querySelector(".ocultar-filme4");
var filmes = document.querySelector(".buttonFilme");

var sectionHistoria = document.querySelector(".historia");
var historiaImg = document.querySelector(".historia-img");
var historiaQuestion1 = document.querySelector(".ocultar-historia");
var historiaQuestion2 = document.querySelector(".ocultar-historia2");
var historiaQuestion3 = document.querySelector(".ocultar-historia3");
var historiaQuestion4 = document.querySelector(".ocultar-historia4");
var historia = document.querySelector(".buttonHistoria");

var sectionAnimais = document.querySelector(".animais");
var animaisImg = document.querySelector(".animais-img");
var animaisQuestion1 = document.querySelector(".ocultar-animais");
var animaisQuestion2 = document.querySelector(".ocultar-animais2");
var animaisQuestion3 = document.querySelector(".ocultar-animais3");
var animaisQuestion4 = document.querySelector(".ocultar-animais4");
var animais = document.querySelector(".buttonAnimais");

var tempo = document.getElementById('tempo');

var resultado = document.querySelector(".resultado");
var erro = document.getElementById("erros");
var acerto = document.getElementById("acertos");

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

    $('#tema').fadeToggle();
    $('#image-gif').fadeToggle();
    
    //Seta o temporizador
    
    // Converter para segundos
    var duracao1 = 60 * 3;

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

    /*
        filmes.style.marginBottom = "3rem";
        filmes.style.marginTop = "-5rem";
        filmes.style.marginLeft = "0";
    */
    
    document.querySelector('.buttonEsportes').style.display = "none";
    document.querySelector('.buttonHistoria').style.display = "none"; 
    document.querySelector('.buttonAnimais').style.display = "none";
    
    $('#tema').fadeToggle();
    $('#image-gif').fadeToggle();

    //Seta o temporizador
    
    // Converter para segundos
    var duracao2 = 60 * 3;

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
    /*
    historia.style.marginBottom = "3rem";
    historia.style.marginTop = "-5rem";
    historia.style.marginLeft = "0";
    */

    document.querySelector('.buttonEsportes').style.display = "none";
    document.querySelector('.buttonFilme').style.display = "none"; 
    document.querySelector('.buttonAnimais').style.display = "none";

    $('#tema').fadeToggle();
    $('#image-gif').fadeToggle();
    
    //Seta o temporizador
    
    // Converter para segundos
    var duracao3 = 60 * 3;

    // selecionando o tempo
    tela3 = document.querySelector('[tempo3]');

    // iniciando o tempo
    iniciarTempo3(duracao3, tela3);
}

/*ANIMAIS*/
function botaoAnimais(){
    sectionAnimais.style.display = 'block';
    animaisImg.style.display = 'flex';
    $('.ocultar-animais').fadeIn("slow");
    animaisQuestion1.style.height = '10rem';
    document.querySelector('.footer').style.marginTop = '12rem';
    /*
    animais.style.marginBottom = "3rem";
    animais.style.marginTop = "-5rem";
    animais.style.marginLeft = "0";
    */

    document.querySelector('.buttonEsportes').style.display = "none";
    document.querySelector('.buttonFilme').style.display = "none"; 
    document.querySelector('.buttonHistoria').style.display = "none";

    $('#tema').fadeToggle();
    $('#image-gif').fadeToggle();
    
    //Seta o temporizador
    
    // Converter para segundos
    var duracao4 = 60 * 3;

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
var resposta = new Array(4);
var errada = [];

//primeira pergunta
function checkar(clicked_id){
    //esporte
    if(clicked_id == 'esporte1_option1'){
        document.querySelector('.next').addEventListener('click', () => {
            esporteQuestion1.style.display = 'none';
            esporteQuestion2.style.display = 'block';

            errada[0] = 'Brasil';
        });
    }
    else if(clicked_id == 'esporte1_option2'){
        document.querySelector('.next').addEventListener('click', () => {
            esporteQuestion1.style.display = 'none';
            esporteQuestion2.style.display = 'block';

            errada[0] = 'China';
        });
    }
    else if(clicked_id == 'esporte1_option3'){
        document.querySelector('.next').addEventListener('click', () => {
            esporteQuestion1.style.display = 'none';
            esporteQuestion2.style.display = 'block';
   
            resposta[0] = 'Inglaterra';
        });
    }
    else if(clicked_id == 'esporte1_option4'){
        document.querySelector('.next').addEventListener('click', () => {
            esporteQuestion1.style.display = 'none';
            esporteQuestion2.style.display = 'block';

            errada[0] = 'França';
        });
    }
    //filmes
    else if(clicked_id == 'filme1_option1'){
        document.querySelector('.nextFilme').addEventListener('click', () => {
            filmeQuestion1.style.display = 'none';
            filmeQuestion2.style.display = 'block';

            errada[0] = 'Robert Downey Jr';
        });
    }
    else if(clicked_id == 'filme1_option2'){
        document.querySelector('.nextFilme').addEventListener('click', () => {
            filmeQuestion1.style.display = 'none';
            filmeQuestion2.style.display = 'block';

            errada[0] = 'Chris Evans';
        });
    }
    else if(clicked_id == 'filme1_option3'){
        document.querySelector('.nextFilme').addEventListener('click', () => {
            filmeQuestion1.style.display = 'none';
            filmeQuestion2.style.display = 'block';

            errada[0] = 'Ben Stiller';
        });
    }
    else if(clicked_id == 'filme1_option4'){
        document.querySelector('.nextFilme').addEventListener('click', () => {
            filmeQuestion1.style.display = 'none';
            filmeQuestion2.style.display = 'block';

            resposta[0] = 'Brendan Fraser';
        });
    }
    //historia
    else if(clicked_id == 'historia1_option1'){
        document.querySelector('.nextHistoria').addEventListener('click', () => {
            historiaQuestion1.style.display = 'none';
            historiaQuestion2.style.display = 'block';

            errada[0] == '5 de Abril de 1822';
        });
    }
    else if(clicked_id == 'historia1_option2'){
        document.querySelector('.nextHistoria').addEventListener('click', () => {
            historiaQuestion1.style.display = 'none';
            historiaQuestion2.style.display = 'block';

            errada[0] = '10 de Junho de 1500';
        });
    }
    else if(clicked_id == 'historia1_option3'){
        document.querySelector('.nextHistoria').addEventListener('click', () => {
            historiaQuestion1.style.display = 'none';
            historiaQuestion2.style.display = 'block';

            resposta[0] = '7 de Setembro de 1822';
        });
    }
    else if(clicked_id == 'historia1_option4'){
        document.querySelector('.nextHistoria').addEventListener('click', () => {
            historiaQuestion1.style.display = 'none';
            historiaQuestion2.style.display = 'block';

            errada[0] = '26 de Maio de 1810';
        });
    }
    //animais
    else if(clicked_id == 'animais1_option1'){
        $('.nextAnimais').on('click', () => {
            $('.ocultar-animais').fadeToggle();
            $('.ocultar-animais2').fadeIn();

            resposta[0] = 'Elefante';
        });

    }
    else if(clicked_id == 'animais1_option2'){
        document.querySelector('.nextAnimais').addEventListener('click', () => {
            animaisQuestion1.style.display = 'none';
            animaisQuestion2.style.display = 'block';

            errada[0] = 'Gorila';

        });
    }
    else if(clicked_id == 'animais1_option3'){
        document.querySelector('.nextAnimais').addEventListener('click', () => {
            animaisQuestion1.style.display = 'none';
            animaisQuestion2.style.display = 'block';

            errada[0] = 'Hipopótamo';
        });
    }
    else if(clicked_id == 'animais1_option4'){
        document.querySelector('.nextAnimais').addEventListener('click', () => {
            animaisQuestion1.style.display = 'none';
            animaisQuestion2.style.display = 'block';

            errada[0] = 'Baleia';
        });
    }

}

//segunda pergunta
function checkar2(clicked_id){
    //esporte
    if(clicked_id == 'esporte2_option1'){
        document.querySelector('.next2').addEventListener('click', () => {
            esporteQuestion2.style.display = 'none';
            esporteQuestion3.style.display = 'block';
 
            resposta[1] = '6 de Abril de 1896';
        });
    }
    else if(clicked_id == 'esporte2_option2'){
        document.querySelector('.next2').addEventListener('click', () => {
            esporteQuestion2.style.display = 'none';
            esporteQuestion3.style.display = 'block';
 
            errada[1] = '13 de Fevereiro de 1905';
        });
    }
    else if(clicked_id == 'esporte2_option3'){
        document.querySelector('.next2').addEventListener('click', () => {
            esporteQuestion2.style.display = 'none';
            esporteQuestion3.style.display = 'block';

            errada[1] = '22 de Junho de 1968';
        })
    }
    else if(clicked_id == 'esporte2_option4'){
        document.querySelector('.next2').addEventListener('click', () => {
            esporteQuestion2.style.display = 'none';
            esporteQuestion3.style.display = 'block';

            errada[1] = '09 de Setembro de 1898';
        });
    }
    //filmes
    else if(clicked_id == 'filme2_option1'){
        document.querySelector('.nextFilme2').addEventListener('click', () => {
            filmeQuestion2.style.display = 'none';
            filmeQuestion3.style.display = 'block';

            errada[1] = 'Gal Gadot';
        });
    }
    else if(clicked_id == 'filme2_option2'){
        document.querySelector('.nextFilme2').addEventListener('click', () => {
            filmeQuestion2.style.display = 'none';
            filmeQuestion3.style.display = 'block';

            resposta[1] = 'Scarlett Johansson';
        });
    }
    else if(clicked_id == 'filme2_option3'){
        document.querySelector('.nextFilme2').addEventListener('click', () => {
            filmeQuestion2.style.display = 'none';
            filmeQuestion3.style.display = 'block';

            errada[1] = 'Angelina Jolie';
        });
    }
    else if(clicked_id == 'filme2_option4'){
        document.querySelector('.nextFilme2').addEventListener('click', () => {
            filmeQuestion2.style.display = 'none';
            filmeQuestion3.style.display = 'block';

            errada[1] = 'Jennifer Lopez';
        });
    }
    //historia
    else if(clicked_id == 'historia2_option1'){
        document.querySelector('.nextHistoria2').addEventListener('click', () => {
            historiaQuestion2.style.display = 'none';
            historiaQuestion3.style.display = 'block';

            errada[1] = 'Charles Conrad';
        });
    }
    else if(clicked_id == 'historia2_option2'){
        document.querySelector('.nextHistoria2').addEventListener('click', () => {
            historiaQuestion2.style.display = 'none';
            historiaQuestion3.style.display = 'block';

            errada[1] = 'Alan Bean';
        });
    }
    else if(clicked_id == 'historia2_option3'){
        document.querySelector('.nextHistoria2').addEventListener('click', () => {
            historiaQuestion2.style.display = 'none';
            historiaQuestion3.style.display = 'block';

            errada[1] = 'Alan B. Shepard Jr';
        });
    }
    else if(clicked_id == 'historia2_option4'){
        document.querySelector('.nextHistoria2').addEventListener('click', () => {
            historiaQuestion2.style.display = 'none';
            historiaQuestion3.style.display = 'block';

            resposta[1] = 'Neil Armstrong';
        });
    }
    //animais
    else if(clicked_id == 'animais2_option1'){
        $('.nextAnimais2').on('click', () => {
            $('.ocultar-animais2').fadeToggle();
            $('.ocultar-animais3').fadeIn();

            errada[1] = 'Serpente';
        });
    }
    else if(clicked_id == 'animais2_option2'){
        document.querySelector('.nextAnimais2').addEventListener('click', () => {
            animaisQuestion2.style.display = 'none';
            animaisQuestion3.style.display = 'block';

            errada[1] = 'Leão';
        });
    }
    else if(clicked_id == 'animais2_option3'){
        document.querySelector('.nextAnimais2').addEventListener('click', () => {
            animaisQuestion2.style.display = 'none';
            animaisQuestion3.style.display = 'block';

            errada[1] = 'Águia';
        });
    }
    else if(clicked_id == 'animais2_option4'){
        document.querySelector('.nextAnimais2').addEventListener('click', () => {
            animaisQuestion2.style.display = 'none';
            animaisQuestion3.style.display = 'block';

            resposta[1] = 'Avestruz';
        });
    }

}

//terceira pergunta
function checkar3(clicked_id){

    if(clicked_id == 'esporte3_option1'){
        document.querySelector('.nextEsporte').addEventListener('click', () => {
            esporteQuestion3.style.display = 'none';
            esporteQuestion4.style.display = 'block';

            errada[2] = 'Usain Bolt';
        });
    }
    else if(clicked_id == 'esporte3_option2'){
        document.querySelector('.nextEsporte').addEventListener('click', () => {
            esporteQuestion3.style.display = 'none';
            esporteQuestion4.style.display = 'block';
 
            resposta[2] = 'Michael Phelps';
        });
    }
    else if(clicked_id == 'esporte3_option3'){
        document.querySelector('.nextEsporte').addEventListener('click', () => {
            esporteQuestion3.style.display = 'none';
            esporteQuestion4.style.display = 'block';
 
            errada[2] = 'Daiane dos Santos';
        })
    }
    else if(clicked_id == 'esporte3_option4'){
        document.querySelector('.nextEsporte').addEventListener('click', () => {
            esporteQuestion3.style.display = 'none';
            esporteQuestion4.style.display = 'block';
  
            errada[2] = 'Rafael Nadal';
        });
    }
    //filmes
    else if(clicked_id == 'filme3_option1'){
        document.querySelector('.nextFilme3').addEventListener('click', () => {
            filmeQuestion3.style.display = 'none';
            filmeQuestion4.style.display = 'block';

            resposta[2] = '5';
        });
    }
    else if(clicked_id == 'filme3_option2'){
        document.querySelector('.nextFilme3').addEventListener('click', () => {
            filmeQuestion3.style.display = 'none';
            filmeQuestion4.style.display = 'block';

            errada[2] = '3';
        });
    }
    else if(clicked_id == 'filme3_option3'){
        document.querySelector('.nextFilme3').addEventListener('click', () => {
            filmeQuestion3.style.display = 'none';
            filmeQuestion4.style.display = 'block';

            errada[2] = '4';
        });
    }
    else if(clicked_id == 'filme3_option4'){
        document.querySelector('.nextFilme3').addEventListener('click', () => {
            filmeQuestion3.style.display = 'none';
            filmeQuestion4.style.display = 'block';

            errada[2] = '2';
        });
    }
    //historia
    else if(clicked_id == 'historia3_option1'){
        document.querySelector('.nextHistoria3').addEventListener('click', () => {
            historiaQuestion3.style.display = 'none';
            historiaQuestion4.style.display = 'block';

            resposta[2] = 'Marechal Deodoro da Fonseca';
        });
    }    
    else if(clicked_id == 'historia3_option2'){
        document.querySelector('.nextHistoria3').addEventListener('click', () => {
            historiaQuestion3.style.display = 'none';
            historiaQuestion4.style.display = 'block';

            errada[2] = 'Luis Inácio Lula da Silva';
        });
    }
    else if(clicked_id == 'historia3_option3'){
        document.querySelector('.nextHistoria3').addEventListener('click', () => {
            historiaQuestion3.style.display = 'none';
            historiaQuestion4.style.display = 'block';

            errada[2] = 'Fernando Henrique Cardoso';
        });
    }
    else if(clicked_id == 'historia3_option4'){
        document.querySelector('.nextHistoria3').addEventListener('click', () => {
            historiaQuestion3.style.display = 'none';
            historiaQuestion4.style.display = 'block';

            errada[2] = 'Getúlio Vargas';
        });
    }
    //animais
    else if(clicked_id == 'animais3_option1'){
        $('.nextAnimais3').on('click', () => {
            $('.ocultar-animais3').fadeToggle();
            $('.ocultar-animais4').fadeIn();

            errada[2] = 'Leopardo';
        });
    }
    else if(clicked_id == 'animais3_option2'){
        document.querySelector('.nextAnimais3').addEventListener('click', () => {
            animaisQuestion3.style.display = 'none';
            animaisQuestion4.style.display = 'block';

            resposta[2] = 'Guepardo';
        });
    }
    else if(clicked_id == 'animais3_option3'){
        document.querySelector('.nextAnimais3').addEventListener('click', () => {
            animaisQuestion3.style.display = 'none';
            animaisQuestion4.style.display = 'block';

            errada[2] = 'Tigre';
        });
    }
    else if(clicked_id == 'animais3_option4'){
        document.querySelector('.nextAnimais3').addEventListener('click', () => {
            animaisQuestion3.style.display = 'none';
            animaisQuestion4.style.display = 'block';

            errada[2] = 'Rinoceronte';
        });
    }

}
//quarta pergunta

function checkarUltima(clicked_id){
    //esporte
    if(clicked_id == 'esporte4_option1'){

        errada[3] = 'México';

        document.querySelector('.finalizarEsporte').addEventListener('click', () => {
            esporteImg.style.display = 'none';
            esporteQuestion4.style.display = 'none';
            esportes.style.display = 'none';
            tema.style.display = 'none';

            document.querySelector('[tempo1]').style.display = 'none';
            acabouEsporte.style.display = 'none';
            recomecarEsporte.style.display = 'none';

            sectionEsporte.style.display = 'none';
            resultado.style.display = 'block';

            if(resposta[0] == 'Inglaterra' && resposta[1] == '6 de Abril de 1896' && resposta[2] == 'Michael Phelps' && resposta[3] == 'Itália'){
                $('.acertos').text('Você acertou todas as respostas! Parabéns ^^');
            }
            else{
                
                //Saber quais respostas estão certas e erradas
                if((errada[0] == 'Brasil' || errada[0] == 'China' || errada[0] == 'França') || 
                (errada[1] == '13 de Fevereiro de 1905' || errada[1] == '22 de Junho de 1968' || errada[1] == '09 de Setembro de 1898') || 
                ((errada[2] == 'Usain Bolt' || errada[2] == 'Daiane dos Santos' || errada[2] == 'Rafael Nadal')) ||
                (errada[3] == 'México' || errada[3] == 'Estados Unidos' || errada[3] == 'Espanha' )){

                    if(errada[0] == undefined){
                        errada[0] = '';
                    }
                    if(errada[1] == undefined){
                        errada[1] = '';
                    }
                    if(errada[2] == undefined){
                        errada[2] = '';
                    }
                    if(errada[3] == undefined){
                        errada[3] = '';
                    }

                    erro.innerHTML = "<b>Você errou: </b>" + "<br>" + 
                        errada[0] + "<br>" +
                        errada[1] + "<br>" +
                        errada[2] + "<br>" +
                        errada[3] + "<br>";
                        //resposta[3] + "<br>";


                    if((resposta[0] != 'Brasil' && resposta[0] != 'China' && resposta[0] != 'França') || 
                    (resposta[1] != '13 de Fevereiro de 1905' && resposta[1] == '22 de Junho de 1968' && resposta[1] != '09 de Setembro de 1898') || 
                    (resposta[2] != 'Usain Bolt' && resposta[2] != 'Daiane dos Santos' && resposta[2] != 'Rafael Nadal') ||
                    (resposta[3] != 'México' && resposta[3] != 'Estados Unidos' && resposta[3] != 'Espanha')){

                        resposta[0] = 'Inglaterra';
                        resposta[1] = '6 de Abril de 1896';
                        resposta[2] = 'Michael Phelps';
                        resposta[3] = 'Itália';

                        acerto.innerHTML = "<b>Respostas certas: </b>" + "<br>" +
                                               resposta[0] + "<br>" +
                                               resposta[1] + "<br>" +
                                               resposta[2] + "<br>" +
                                               resposta[3];
                    } 
                }                    

            }

        });
    }
    else if(clicked_id == 'esporte4_option2'){

        errada[3] = 'Estados Unidos';

        document.querySelector('.finalizarEsporte').addEventListener('click', () => {
            esporteImg.style.display = 'none';
            esporteQuestion4.style.display = 'none';
            esportes.style.display = 'none';
            tema.style.display = 'none';

            document.querySelector('[tempo1]').style.display = 'none';
            acabouEsporte.style.display = 'none';
            recomecarEsporte.style.display = 'none';

            sectionEsporte.style.display = 'none';
            resultado.style.display = 'block';

            if(resposta[0] == 'Inglaterra' && resposta[1] == '6 de Abril de 1896' && resposta[2] == 'Michael Phelps' && resposta[3] == 'Itália'){
                $('.acertos').text('Você acertou todas as respostas! Parabéns ^^');
            }
            else{
                
                //Saber quais respostas estão certas e erradas
                if((errada[0] == 'Brasil' || errada[0] == 'China' || errada[0] == 'França') || 
                (errada[1] == '13 de Fevereiro de 1905' || errada[1] == '22 de Junho de 1968' || errada[1] == '09 de Setembro de 1898') || 
                ((errada[2] == 'Usain Bolt' || errada[2] == 'Daiane dos Santos' || errada[2] == 'Rafael Nadal')) ||
                (errada[3] == 'México' || errada[3] == 'Estados Unidos' || errada[3] == 'Espanha' )){

                    if(errada[0] == undefined){
                        errada[0] = '';
                    }
                    if(errada[1] == undefined){
                        errada[1] = '';
                    }
                    if(errada[2] == undefined){
                        errada[2] = '';
                    }
                    if(errada[3] == undefined){
                        errada[3] = '';
                    }

                    erro.innerHTML = "<b>Você errou: </b>" + "<br>" + 
                        errada[0] + "<br>" +
                        errada[1] + "<br>" +
                        errada[2] + "<br>" +
                        errada[3] + "<br>";
                        //resposta[3] + "<br>";


                    if((resposta[0] != 'Brasil' && resposta[0] != 'China' && resposta[0] != 'França') || 
                    (resposta[1] != '13 de Fevereiro de 1905' && resposta[1] == '22 de Junho de 1968' && resposta[1] != '09 de Setembro de 1898') || 
                    (resposta[2] != 'Usain Bolt' && resposta[2] != 'Daiane dos Santos' && resposta[2] != 'Rafael Nadal') ||
                    (resposta[3] != 'México' && resposta[3] != 'Estados Unidos' && resposta[3] != 'Espanha')){

                        resposta[0] = 'Inglaterra';
                        resposta[1] = '6 de Abril de 1896';
                        resposta[2] = 'Michael Phelps';
                        resposta[3] = 'Itália';

                        acerto.innerHTML = "<b>Respostas certas: </b>" + "<br>" +
                                               resposta[0] + "<br>" +
                                               resposta[1] + "<br>" +
                                               resposta[2] + "<br>" +
                                               resposta[3];
                    } 
                }                    

            }

        });
    }
    else if(clicked_id == 'esporte4_option3'){

        errada[3] = 'Espanha';

        document.querySelector('.finalizarEsporte').addEventListener('click', () => {
            esporteImg.style.display = 'none';
            esporteQuestion4.style.display = 'none';
            esportes.style.display = 'none';
            tema.style.display = 'none';

            document.querySelector('[tempo1]').style.display = 'none';
            acabouEsporte.style.display = 'none';
            recomecarEsporte.style.display = 'none';

            sectionEsporte.style.display = 'none';
            resultado.style.display = 'block';

            if(resposta[0] == 'Inglaterra' && resposta[1] == '6 de Abril de 1896' && resposta[2] == 'Michael Phelps' && resposta[3] == 'Itália'){
                $('.acertos').text('Você acertou todas as respostas! Parabéns ^^');
            }
            else{
                
                //Saber quais respostas estão certas e erradas
                if((errada[0] == 'Brasil' || errada[0] == 'China' || errada[0] == 'França') || 
                (errada[1] == '13 de Fevereiro de 1905' || errada[1] == '22 de Junho de 1968' || errada[1] == '09 de Setembro de 1898') || 
                ((errada[2] == 'Usain Bolt' || errada[2] == 'Daiane dos Santos' || errada[2] == 'Rafael Nadal')) ||
                (errada[3] == 'México' || errada[3] == 'Estados Unidos' || errada[3] == 'Espanha' )){

                    if(errada[0] == undefined){
                        errada[0] = '';
                    }
                    if(errada[1] == undefined){
                        errada[1] = '';
                    }
                    if(errada[2] == undefined){
                        errada[2] = '';
                    }
                    if(errada[3] == undefined){
                        errada[3] = '';
                    }

                    erro.innerHTML = "<b>Você errou: </b>" + "<br>" + 
                        errada[0] + "<br>" +
                        errada[1] + "<br>" +
                        errada[2] + "<br>" +
                        errada[3] + "<br>";
                        //resposta[3] + "<br>";


                    if((resposta[0] != 'Brasil' && resposta[0] != 'China' && resposta[0] != 'França') || 
                    (resposta[1] != '13 de Fevereiro de 1905' && resposta[1] == '22 de Junho de 1968' && resposta[1] != '09 de Setembro de 1898') || 
                    (resposta[2] != 'Usain Bolt' && resposta[2] != 'Daiane dos Santos' && resposta[2] != 'Rafael Nadal') ||
                    (resposta[3] != 'México' && resposta[3] != 'Estados Unidos' && resposta[3] != 'Espanha')){

                        resposta[0] = 'Inglaterra';
                        resposta[1] = '6 de Abril de 1896';
                        resposta[2] = 'Michael Phelps';
                        resposta[3] = 'Itália';

                        acerto.innerHTML = "<b>Respostas certas: </b>" + "<br>" +
                                               resposta[0] + "<br>" +
                                               resposta[1] + "<br>" +
                                               resposta[2] + "<br>" +
                                               resposta[3];
                    } 
                }                    

            }

        })
    }
    else if(clicked_id == 'esporte4_option4'){

        resposta[3] = 'Itália';

        document.querySelector('.finalizarEsporte').addEventListener('click', () => {
            esporteImg.style.display = 'none';
            esporteQuestion4.style.display = 'none';
            esportes.style.display = 'none';
            tema.style.display = 'none';

            document.querySelector('[tempo1]').style.display = 'none';

            sectionEsporte.style.display = 'none';
            resultado.style.display = 'block';

            
            if(resposta[0] == 'Inglaterra' && resposta[1] == '6 de Abril de 1896' && resposta[2] == 'Michael Phelps' && resposta[3] == 'Itália'){
                $('.acertos').text('Você acertou todas! Parabéns ^^');
            }
            else{
                
                //Saber quais respostas estão certas e erradas
                if((errada[0] == 'Brasil' || errada[0] == 'China' || errada[0] == 'França') || 
                (errada[1] == '13 de Fevereiro de 1905' || errada[1] == '22 de Junho de 1968' || errada[1] == '09 de Setembro de 1898') || 
                ((errada[2] == 'Usain Bolt' || errada[2] == 'Daiane dos Santos' || errada[2] == 'Rafael Nadal')) ||
                (errada[3] == 'México' || errada[3] == 'Estados Unidos' || errada[3] == 'Espanha' )){

                    if(errada[0] == undefined){
                        errada[0] = '';
                    }
                    if(errada[1] == undefined){
                        errada[1] = '';
                    }
                    if(errada[2] == undefined){
                        errada[2] = '';
                    }

                    erro.innerHTML = "<b>Você errou: </b>" + "<br>" + 
                        errada[0] + "<br>" +
                        errada[1] + "<br>" +
                        errada[2] + "<br>";
                        //resposta[3] + "<br>";


                    if((resposta[0] != 'Brasil' && resposta[0] != 'China' && resposta[0] != 'França') || 
                    (resposta[1] != '13 de Fevereiro de 1905' && resposta[1] == '22 de Junho de 1968' && resposta[1] != '09 de Setembro de 1898') || 
                    (resposta[2] != 'Usain Bolt' && resposta[2] != 'Daiane dos Santos' && resposta[2] != 'Rafael Nadal') ||
                    (resposta[3] != 'México' && resposta[3] != 'Estados Unidos' && resposta[3] != 'Espanha')){

                        resposta[0] = 'Inglaterra';
                        resposta[1] = '6 de Abril de 1896';
                        resposta[2] = 'Michael Phelps';
                        resposta[3] = 'Itália';

                        acerto.innerHTML = "<b>Respostas certas: </b>" + "<br>" +
                                               resposta[0] + "<br>" +
                                               resposta[1] + "<br>" +
                                               resposta[2] + "<br>" +
                                               resposta[3];
                    } 
                }                    

            }

        });
           
    }
    //filmes
    if(clicked_id == 'filme4_option1'){

        resposta[3] = '1911';

        document.querySelector('.finalizarFilme').addEventListener('click', () => {
            filmeImg.style.display = 'none';
            filmeQuestion4.style.display = 'none';
            filmes.style.display = 'none';
            tema.style.display = 'none';

            document.querySelector('[tempo2]').style.display = 'none';
            acabouFilme.style.display = 'none';
            recomecarFilme.style.display = 'none';

            sectionFilme.style.display = 'none';
            resultado.style.display = 'block';

            if(resposta[0] == 'Brendan Fraser' && resposta[1] == 'Scarlett Johansson' && resposta[2] == '5' && resposta[3] == '1911'){
                $('.acertos').text('Você acertou todas! Parabéns ^^');
            }
            else{
                
                //Saber quais respostas estão certas e erradas
                if((errada[0] == 'Robert Downey Jr' || errada[0] == 'Chris Evans' || errada[0] == 'Ben Stiller') || 
                (errada[1] == 'Gal Gadot' || errada[1] == 'Angelina Jolie' || errada[1] == 'Jennifer Lopez') || 
                ((errada[2] == '3' || errada[2] == '4' || errada[2] == '2')) ||
                (errada[3] == '1905' || errada[3] == '1913' || errada[3] == '1966' )){

                    if(errada[0] == undefined){
                        errada[0] = '';
                    }
                    if(errada[1] == undefined){
                        errada[1] = '';
                    }
                    if(errada[2] == undefined){
                        errada[2] = '';
                    }
                    if(errada[3] == undefined){
                        errada[3] = '';
                    }

                    erro.innerHTML = "<b>Você errou: </b>" + "<br>" + 
                        errada[0] + "<br>" +
                        errada[1] + "<br>" +
                        errada[2] + "<br>" +
                        errada[3] + "<br>";
                        //resposta[3] + "<br>";


                    if((resposta[0] != 'Robert Downey Jr' && resposta[0] != 'Chris Evans' && resposta[0] != 'Ben Stiller') || 
                    (resposta[1] != 'Gal Gadot' && resposta[1] == 'Angelina Jolie' && resposta[1] != 'Jennifer Lopez') || 
                    (resposta[2] != '3' && resposta[2] != '4' && resposta[2] != '2') ||
                    (resposta[3] != '1905' && resposta[3] != '1913' && resposta[3] != '1966')){

                        resposta[0] = 'Brendan Fraser';
                        resposta[1] = 'Scarlett Johansson';
                        resposta[2] = '5';
                        resposta[3] = '1911';

                        acerto.innerHTML = "<b>Respostas certas: </b>" + "<br>" +
                                               resposta[0] + "<br>" +
                                               resposta[1] + "<br>" +
                                               resposta[2] + "<br>" +
                                               resposta[3];
                    } 
                }                    

            }
        });    

    }
    else if(clicked_id == 'filme4_option2'){
        errada[3] = '1905';

        document.querySelector('.finalizarFilme').addEventListener('click', () => {
            filmeImg.style.display = 'none';
            filmeQuestion4.style.display = 'none';
            filmes.style.display = 'none';
            tema.style.display = 'none';

            document.querySelector('[tempo2]').style.display = 'none';
            acabouFilme.style.display = 'none';
            recomecarFilme.style.display = 'none';

            sectionFilme.style.display = 'none';
            resultado.style.display = 'block';

            if(resposta[0] == 'Brendan Fraser' && resposta[1] == 'Scarlett Johansson' && resposta[2] == '5' && resposta[3] == '1911'){
                $('.acertos').text('Você acertou todas! Parabéns ^^');
            }
            else{
                
                //Saber quais respostas estão certas e erradas
                if((errada[0] == 'Robert Downey Jr' || errada[0] == 'Chris Evans' || errada[0] == 'Ben Stiller') || 
                (errada[1] == 'Gal Gadot' || errada[1] == 'Angelina Jolie' || errada[1] == 'Jennifer Lopez') || 
                ((errada[2] == '3' || errada[2] == '4' || errada[2] == '2')) ||
                (errada[3] == '1905' || errada[3] == '1913' || errada[3] == '1966' )){

                    if(errada[0] == undefined){
                        errada[0] = '';
                    }
                    if(errada[1] == undefined){
                        errada[1] = '';
                    }
                    if(errada[2] == undefined){
                        errada[2] = '';
                    }
                    if(errada[3] == undefined){
                        errada[3] = '';
                    }

                    erro.innerHTML = "<b>Você errou: </b>" + "<br>" + 
                        errada[0] + "<br>" +
                        errada[1] + "<br>" +
                        errada[2] + "<br>" +
                        errada[3] + "<br>";
                        //resposta[3] + "<br>";


                    if((resposta[0] != 'Robert Downey Jr' && resposta[0] != 'Chris Evans' && resposta[0] != 'Ben Stiller') || 
                    (resposta[1] != 'Gal Gadot' && resposta[1] == 'Angelina Jolie' && resposta[1] != 'Jennifer Lopez') || 
                    (resposta[2] != '3' && resposta[2] != '4' && resposta[2] != '2') ||
                    (resposta[3] != '1905' && resposta[3] != '1913' && resposta[3] != '1966')){

                        resposta[0] = 'Brendan Fraser';
                        resposta[1] = 'Scarlett Johansson';
                        resposta[2] = '5';
                        resposta[3] = '1911';

                        acerto.innerHTML = "<b>Respostas certas: </b>" + "<br>" +
                                               resposta[0] + "<br>" +
                                               resposta[1] + "<br>" +
                                               resposta[2] + "<br>" +
                                               resposta[3];
                    } 
                }                    

            }
        });  
        
    }
    else if(clicked_id == 'filme4_option3'){
        errada[3] = '1913';

        document.querySelector('.finalizarFilme').addEventListener('click', () => {
            filmeImg.style.display = 'none';
            filmeQuestion4.style.display = 'none';
            filmes.style.display = 'none';
            tema.style.display = 'none';

            document.querySelector('[tempo2]').style.display = 'none';
            acabouFilme.style.display = 'none';
            recomecarFilme.style.display = 'none';

            sectionFilme.style.display = 'none';
            resultado.style.display = 'block';

            if(resposta[0] == 'Brendan Fraser' && resposta[1] == 'Scarlett Johansson' && resposta[2] == '5' && resposta[3] == '1911'){
                $('.acertos').text('Você acertou todas! Parabéns ^^');
            }
            else{
                
                //Saber quais respostas estão certas e erradas
                if((errada[0] == 'Robert Downey Jr' || errada[0] == 'Chris Evans' || errada[0] == 'Ben Stiller') || 
                (errada[1] == 'Gal Gadot' || errada[1] == 'Angelina Jolie' || errada[1] == 'Jennifer Lopez') || 
                ((errada[2] == '3' || errada[2] == '4' || errada[2] == '2')) ||
                (errada[3] == '1905' || errada[3] == '1913' || errada[3] == '1966' )){

                    if(errada[0] == undefined){
                        errada[0] = '';
                    }
                    if(errada[1] == undefined){
                        errada[1] = '';
                    }
                    if(errada[2] == undefined){
                        errada[2] = '';
                    }
                    if(errada[3] == undefined){
                        errada[3] = '';
                    }

                    erro.innerHTML = "<b>Você errou: </b>" + "<br>" + 
                        errada[0] + "<br>" +
                        errada[1] + "<br>" +
                        errada[2] + "<br>" +
                        errada[3] + "<br>";
                        //resposta[3] + "<br>";


                    if((resposta[0] != 'Robert Downey Jr' && resposta[0] != 'Chris Evans' && resposta[0] != 'Ben Stiller') || 
                    (resposta[1] != 'Gal Gadot' && resposta[1] == 'Angelina Jolie' && resposta[1] != 'Jennifer Lopez') || 
                    (resposta[2] != '3' && resposta[2] != '4' && resposta[2] != '2') ||
                    (resposta[3] != '1905' && resposta[3] != '1913' && resposta[3] != '1966')){

                        resposta[0] = 'Brendan Fraser';
                        resposta[1] = 'Scarlett Johansson';
                        resposta[2] = '5';
                        resposta[3] = '1911';

                        acerto.innerHTML = "<b>Respostas certas: </b>" + "<br>" +
                                               resposta[0] + "<br>" +
                                               resposta[1] + "<br>" +
                                               resposta[2] + "<br>" +
                                               resposta[3];
                    } 
                }                    

            }
        });  
        
    }
    else if(clicked_id == 'filme4_option4'){
        errada[3] = '1966';

        document.querySelector('.finalizarFilme').addEventListener('click', () => {
            filmeImg.style.display = 'none';
            filmeQuestion4.style.display = 'none';
            filmes.style.display = 'none';
            tema.style.display = 'none';

            document.querySelector('[tempo2]').style.display = 'none';
            acabouFilme.style.display = 'none';
            recomecarFilme.style.display = 'none';

            sectionFilme.style.display = 'none';
            resultado.style.display = 'block';

            if(resposta[0] == 'Brendan Fraser' && resposta[1] == 'Scarlett Johansson' && resposta[2] == '5' && resposta[3] == '1911'){
                $('.acertos').text('Você acertou todas! Parabéns ^^');
            }
            else{
                
                //Saber quais respostas estão certas e erradas
                if((errada[0] == 'Robert Downey Jr' || errada[0] == 'Chris Evans' || errada[0] == 'Ben Stiller') || 
                (errada[1] == 'Gal Gadot' || errada[1] == 'Angelina Jolie' || errada[1] == 'Jennifer Lopez') || 
                ((errada[2] == '3' || errada[2] == '4' || errada[2] == '2')) ||
                (errada[3] == '1905' || errada[3] == '1913' || errada[3] == '1966' )){

                    if(errada[0] == undefined){
                        errada[0] = '';
                    }
                    if(errada[1] == undefined){
                        errada[1] = '';
                    }
                    if(errada[2] == undefined){
                        errada[2] = '';
                    }
                    if(errada[3] == undefined){
                        errada[3] = '';
                    }

                    erro.innerHTML = "<b>Você errou: </b>" + "<br>" + 
                        errada[0] + "<br>" +
                        errada[1] + "<br>" +
                        errada[2] + "<br>" +
                        errada[3] + "<br>";
                        //resposta[3] + "<br>";


                    if((resposta[0] != 'Robert Downey Jr' && resposta[0] != 'Chris Evans' && resposta[0] != 'Ben Stiller') || 
                    (resposta[1] != 'Gal Gadot' && resposta[1] == 'Angelina Jolie' && resposta[1] != 'Jennifer Lopez') || 
                    (resposta[2] != '3' && resposta[2] != '4' && resposta[2] != '2') ||
                    (resposta[3] != '1905' && resposta[3] != '1913' && resposta[3] != '1966')){

                        resposta[0] = 'Brendan Fraser';
                        resposta[1] = 'Scarlett Johansson';
                        resposta[2] = '5';
                        resposta[3] = '1911';

                        acerto.innerHTML = "<b>Respostas certas: </b>" + "<br>" +
                                               resposta[0] + "<br>" +
                                               resposta[1] + "<br>" +
                                               resposta[2] + "<br>" +
                                               resposta[3];
                    } 
                }                    

            }
        });  
        
    }
    //Historia
    if(clicked_id == 'historia4_option1'){

        errada[3] = '18 de Junho de 1946';

        document.querySelector('.finalizarHistoria').addEventListener('click', () => {
            historiaImg.style.display = 'none';
            historiaQuestion4.style.display = 'none';
            historia.style.display = 'none';
            tema.style.display = 'none';

            document.querySelector('[tempo3]').style.display = 'none';
            acabouHistoria.style.display = 'none';
            recomecarHistoria.style.display = 'none';

            sectionHistoria.style.display = 'none';
            resultado.style.display = 'block';

            if(resposta[0] == '7 de Setembro de 1822' && resposta[1] == 'Neil Armstrong' && resposta[2] == 'Marechal Deodoro da Fonseca' && resposta[3] == '8 de Maio de 1945'){
                $('.acertos').text('Você acertou todas! Parabéns ^^');
            }
            else{
                
                //Saber quais respostas estão certas e erradas
                if((errada[0] == '5 de Abril de 1822' || errada[0] == '10 de Junho de 1500' || errada[0] == '26 de Maio de 1810') || 
                (errada[1] == 'Charles Conrad' || errada[1] == 'Alan Bean' || errada[1] == 'Alan B. Shepard Jr') || 
                ((errada[2] == 'Luis Inácio Lula da Silva' || errada[2] == 'Fernando Henrique Cardoso' || errada[2] == 'Getúlio Vargas')) ||
                (errada[3] == '18 de Junho de 1946' || errada[3] == '12 de Abril de 1944' || errada[3] == '15 de Janeiro de 1948' )){

                    if(errada[0] == undefined){
                        errada[0] = '';
                    }
                    if(errada[1] == undefined){
                        errada[1] = '';
                    }
                    if(errada[2] == undefined){
                        errada[2] = '';
                    }
                    if(errada[3] == undefined){
                        errada[3] = '';
                    }

                    erro.innerHTML = "<b>Você errou: </b>" + "<br>" + 
                        errada[0] + "<br>" +
                        errada[1] + "<br>" +
                        errada[2] + "<br>" +
                        errada[3] + "<br>";
                        //resposta[3] + "<br>";


                    if((resposta[0] != '5 de Abril de 1822' && resposta[0] != '10 de Junho de 1500' && resposta[0] != '26 de Maio de 1810') || 
                    (resposta[1] != 'Charles Conrad' && resposta[1] != 'Alan Bean' && resposta[1] != 'Alan B. Shepard Jr') || 
                    (resposta[2] != 'Luis Inácio Lula da Silva' && resposta[2] != 'Fernando Henrique Cardoso' && resposta[2] != 'Getúlio Vargas') ||
                    (resposta[3] != '18 de Junho de 1946' && resposta[3] != '12 de Abril de 1944' && resposta[3] != '15 de Janeiro de 1948')){

                        resposta[0] = '7 de Setembro de 1822';
                        resposta[1] = 'Neil Armstrong';
                        resposta[2] = 'Marechal Deodoro da Fonseca';
                        resposta[3] = '8 de Maio de 1945';

                        acerto.innerHTML = "<b>Respostas certas: </b>" + "<br>" +
                                               resposta[0] + "<br>" +
                                               resposta[1] + "<br>" +
                                               resposta[2] + "<br>" +
                                               resposta[3];
                    } 
                }                    

            }
        });  

    }
    else if(clicked_id == 'historia4_option2'){

        resposta[3] = '8 de Maio de 1945';

        document.querySelector('.finalizarHistoria').addEventListener('click', () => {
            historiaImg.style.display = 'none';
            historiaQuestion4.style.display = 'none';
            historia.style.display = 'none';
            tema.style.display = 'none';

            document.querySelector('[tempo3]').style.display = 'none';
            acabouHistoria.style.display = 'none';
            recomecarHistoria.style.display = 'none';

            sectionHistoria.style.display = 'none';
            resultado.style.display = 'block';

            if(resposta[0] == '7 de Setembro de 1822' && resposta[1] == 'Neil Armstrong' && resposta[2] == 'Marechal Deodoro da Fonseca' && resposta[3] == '8 de Maio de 1945'){
                $('.acertos').text('Você acertou todas! Parabéns ^^');
            }
            else{
                
                //Saber quais respostas estão certas e erradas
                if((errada[0] == '5 de Abril de 1822' || errada[0] == '10 de Junho de 1500' || errada[0] == '26 de Maio de 1810') || 
                (errada[1] == 'Charles Conrad' || errada[1] == 'Alan Bean' || errada[1] == 'Alan B. Shepard Jr') || 
                ((errada[2] == 'Luis Inácio Lula da Silva' || errada[2] == 'Fernando Henrique Cardoso' || errada[2] == 'Getúlio Vargas')) ||
                (errada[3] == '18 de Junho de 1946' || errada[3] == '12 de Abril de 1944' || errada[3] == '15 de Janeiro de 1948' )){

                    if(errada[0] == undefined){
                        errada[0] = '';
                    }
                    if(errada[1] == undefined){
                        errada[1] = '';
                    }
                    if(errada[2] == undefined){
                        errada[2] = '';
                    }
                    if(errada[3] == undefined){
                        errada[3] = '';
                    }

                    erro.innerHTML = "<b>Você errou: </b>" + "<br>" + 
                        errada[0] + "<br>" +
                        errada[1] + "<br>" +
                        errada[2] + "<br>" +
                        errada[3] + "<br>";
                        //resposta[3] + "<br>";


                    if((resposta[0] != '5 de Abril de 1822' && resposta[0] != '10 de Junho de 1500' && resposta[0] != '26 de Maio de 1810') || 
                    (resposta[1] != 'Charles Conrad' && resposta[1] != 'Alan Bean' && resposta[1] != 'Alan B. Shepard Jr') || 
                    (resposta[2] != 'Luis Inácio Lula da Silva' && resposta[2] != 'Fernando Henrique Cardoso' && resposta[2] != 'Getúlio Vargas') ||
                    (resposta[3] != '18 de Junho de 1946' && resposta[3] != '12 de Abril de 1944' && resposta[3] != '15 de Janeiro de 1948')){

                        resposta[0] = '7 de Setembro de 1822';
                        resposta[1] = 'Neil Armstrong';
                        resposta[2] = 'Marechal Deodoro da Fonseca';
                        resposta[3] = '8 de Maio de 1945';

                        acerto.innerHTML = "<b>Respostas certas: </b>" + "<br>" +
                                               resposta[0] + "<br>" +
                                               resposta[1] + "<br>" +
                                               resposta[2] + "<br>" +
                                               resposta[3];
                    } 
                }                    

            }
        });
    }
    else if(clicked_id == 'historia4_option3'){

        errada[3] = '12 de Abril de 1944';

        document.querySelector('.finalizarHistoria').addEventListener('click', () => {
            historiaImg.style.display = 'none';
            historiaQuestion4.style.display = 'none';
            historia.style.display = 'none';
            tema.style.display = 'none';

            document.querySelector('[tempo3]').style.display = 'none';
            acabouHistoria.style.display = 'none';
            recomecarHistoria.style.display = 'none';

            sectionHistoria.style.display = 'none';
            resultado.style.display = 'block';

            if(resposta[0] == '7 de Setembro de 1822' && resposta[1] == 'Neil Armstrong' && resposta[2] == 'Marechal Deodoro da Fonseca' && resposta[3] == '8 de Maio de 1945'){
                $('.acertos').text('Você acertou todas! Parabéns ^^');
            }
            else{
                
                //Saber quais respostas estão certas e erradas
                if((errada[0] == '5 de Abril de 1822' || errada[0] == '10 de Junho de 1500' || errada[0] == '26 de Maio de 1810') || 
                (errada[1] == 'Charles Conrad' || errada[1] == 'Alan Bean' || errada[1] == 'Alan B. Shepard Jr') || 
                ((errada[2] == 'Luis Inácio Lula da Silva' || errada[2] == 'Fernando Henrique Cardoso' || errada[2] == 'Getúlio Vargas')) ||
                (errada[3] == '18 de Junho de 1946' || errada[3] == '12 de Abril de 1944' || errada[3] == '15 de Janeiro de 1948' )){

                    if(errada[0] == undefined){
                        errada[0] = '';
                    }
                    if(errada[1] == undefined){
                        errada[1] = '';
                    }
                    if(errada[2] == undefined){
                        errada[2] = '';
                    }
                    if(errada[3] == undefined){
                        errada[3] = '';
                    }

                    erro.innerHTML = "<b>Você errou: </b>" + "<br>" + 
                        errada[0] + "<br>" +
                        errada[1] + "<br>" +
                        errada[2] + "<br>" +
                        errada[3] + "<br>";
                        //resposta[3] + "<br>";


                    if((resposta[0] != '5 de Abril de 1822' && resposta[0] != '10 de Junho de 1500' && resposta[0] != '26 de Maio de 1810') || 
                    (resposta[1] != 'Charles Conrad' && resposta[1] != 'Alan Bean' && resposta[1] != 'Alan B. Shepard Jr') || 
                    (resposta[2] != 'Luis Inácio Lula da Silva' && resposta[2] != 'Fernando Henrique Cardoso' && resposta[2] != 'Getúlio Vargas') ||
                    (resposta[3] != '18 de Junho de 1946' && resposta[3] != '12 de Abril de 1944' && resposta[3] != '15 de Janeiro de 1948')){

                        resposta[0] = '7 de Setembro de 1822';
                        resposta[1] = 'Neil Armstrong';
                        resposta[2] = 'Marechal Deodoro da Fonseca';
                        resposta[3] = '8 de Maio de 1945';

                        acerto.innerHTML = "<b>Respostas certas: </b>" + "<br>" +
                                               resposta[0] + "<br>" +
                                               resposta[1] + "<br>" +
                                               resposta[2] + "<br>" +
                                               resposta[3];
                    } 
                }                    

            }
        });
        
    }
    else if(clicked_id == 'historia4_option4'){

        errada[3] = '15 de Janeiro de 1948';

        document.querySelector('.finalizarHistoria').addEventListener('click', () => {
            historiaImg.style.display = 'none';
            historiaQuestion4.style.display = 'none';
            historia.style.display = 'none';
            tema.style.display = 'none';

            document.querySelector('[tempo3]').style.display = 'none';
            acabouHistoria.style.display = 'none';
            recomecarHistoria.style.display = 'none';

            sectionHistoria.style.display = 'none';
            resultado.style.display = 'block';

            if(resposta[0] == '7 de Setembro de 1822' && resposta[1] == 'Neil Armstrong' && resposta[2] == 'Marechal Deodoro da Fonseca' && resposta[3] == '8 de Maio de 1945'){
                $('.acertos').text('Você acertou todas! Parabéns ^^');
            }
            else{
                
                //Saber quais respostas estão certas e erradas
                if((errada[0] == '5 de Abril de 1822' || errada[0] == '10 de Junho de 1500' || errada[0] == '26 de Maio de 1810') || 
                (errada[1] == 'Charles Conrad' || errada[1] == 'Alan Bean' || errada[1] == 'Alan B. Shepard Jr') || 
                ((errada[2] == 'Luis Inácio Lula da Silva' || errada[2] == 'Fernando Henrique Cardoso' || errada[2] == 'Getúlio Vargas')) ||
                (errada[3] == '18 de Junho de 1946' || errada[3] == '12 de Abril de 1944' || errada[3] == '15 de Janeiro de 1948' )){

                    if(errada[0] == undefined){
                        errada[0] = '';
                    }
                    if(errada[1] == undefined){
                        errada[1] = '';
                    }
                    if(errada[2] == undefined){
                        errada[2] = '';
                    }
                    if(errada[3] == undefined){
                        errada[3] = '';
                    }

                    erro.innerHTML = "<b>Você errou: </b>" + "<br>" + 
                        errada[0] + "<br>" +
                        errada[1] + "<br>" +
                        errada[2] + "<br>" +
                        errada[3] + "<br>";
                        //resposta[3] + "<br>";


                    if((resposta[0] != '5 de Abril de 1822' && resposta[0] != '10 de Junho de 1500' && resposta[0] != '26 de Maio de 1810') || 
                    (resposta[1] != 'Charles Conrad' && resposta[1] != 'Alan Bean' && resposta[1] != 'Alan B. Shepard Jr') || 
                    (resposta[2] != 'Luis Inácio Lula da Silva' && resposta[2] != 'Fernando Henrique Cardoso' && resposta[2] != 'Getúlio Vargas') ||
                    (resposta[3] != '18 de Junho de 1946' && resposta[3] != '12 de Abril de 1944' && resposta[3] != '15 de Janeiro de 1948')){

                        resposta[0] = '7 de Setembro de 1822';
                        resposta[1] = 'Neil Armstrong';
                        resposta[2] = 'Marechal Deodoro da Fonseca';
                        resposta[3] = '8 de Maio de 1945';

                        acerto.innerHTML = "<b>Respostas certas: </b>" + "<br>" +
                                               resposta[0] + "<br>" +
                                               resposta[1] + "<br>" +
                                               resposta[2] + "<br>" +
                                               resposta[3];
                    } 
                }                    

            }
        });
        
    }
    //Animais
    if(clicked_id == 'animais4_option1'){

        errada[3] = 'Tigre-branco, Pinguín, Boto-cor-de-rosa';

        document.querySelector('.finalizarAnimais').addEventListener('click', () => {
            animaisImg.style.display = 'none';
            animaisQuestion4.style.display = 'none';
            animais.style.display = 'none';
            tema.style.display = 'none';

            document.querySelector('[tempo4]').style.display = 'none';
            acabouAnimais.style.display = 'none';
            recomecarAnimais.style.display = 'none';

            sectionAnimais.style.display = 'none';
            resultado.style.display = 'block';

            if(resposta[0] == 'Elefante' && resposta[1] == 'Avestruz' && resposta[2] == 'Guepardo' && resposta[3] == 'Onça-pintada, Lobo-guará, Arara-azul'){
                $('.acertos').text('Você acertou todas! Parabéns ^^');
            }
            else{
                
                //Saber quais respostas estão certas e erradas
                if((errada[0] == 'Gorila' || errada[0] == 'Hipopótamo' || errada[0] == 'Baleia') || 
                (errada[1] == 'Serpente' || errada[1] == 'Leão' || errada[1] == 'Águia') || 
                ((errada[2] == 'Leopardo' || errada[2] == 'Tigre' || errada[2] == 'Rinoceronte')) ||
                (errada[3] == 'Tigre-branco, Pinguín, Boto-cor-de-rosa' || errada[3] == 'Panda-gigante, Tubarão, Tigre' || errada[3] == 'Mico-leão-dourado, Gorila, Elefante' )){

                    if(errada[0] == undefined){
                        errada[0] = '';
                    }
                    if(errada[1] == undefined){
                        errada[1] = '';
                    }
                    if(errada[2] == undefined){
                        errada[2] = '';
                    }
                    if(errada[3] == undefined){
                        errada[3] = '';
                    }

                    erro.innerHTML = "<b>Você errou: </b>" + "<br>" + 
                        errada[0] + "<br>" +
                        errada[1] + "<br>" +
                        errada[2] + "<br>" +
                        errada[3] + "<br>";
                        //resposta[3] + "<br>";


                    if((resposta[0] != 'Gorila' && resposta[0] != 'Hipopótamo' && resposta[0] != 'Baleia') || 
                    (resposta[1] != 'Serpente' && resposta[1] != 'Leão' && resposta[1] != 'Águia') || 
                    (resposta[2] != 'Leopardo' && resposta[2] != 'Tigre' && resposta[2] != 'Rinoceronte') ||
                    (resposta[3] != 'Tigre-branco, Pinguín, Boto-cor-de-rosa' && resposta[3] != 'Panda-gigante, Tubarão, Tigre' && resposta[3] != 'Mico-leão-dourado, Gorila, Elefante')){

                        resposta[0] = 'Elefante';
                        resposta[1] = 'Avestruz';
                        resposta[2] = 'Guepardo';
                        resposta[3] = 'Onça-pintada, Lobo-guará, Arara-azul';

                        acerto.innerHTML = "<b>Respostas certas: </b>" + "<br>" +
                                               resposta[0] + "<br>" +
                                               resposta[1] + "<br>" +
                                               resposta[2] + "<br>" +
                                               resposta[3];
                    } 
                }                    

            }
        });

    }
    else if(clicked_id == 'animais4_option2'){

        errada[3] = 'Panda-gigante, Tubarão, Tigre';

        document.querySelector('.finalizarAnimais').addEventListener('click', () => {
            animaisImg.style.display = 'none';
            animaisQuestion4.style.display = 'none';
            animais.style.display = 'none';
            tema.style.display = 'none';

            document.querySelector('[tempo4]').style.display = 'none';
            acabouAnimais.style.display = 'none';
            recomecarAnimais.style.display = 'none';

            sectionAnimais.style.display = 'none';
            resultado.style.display = 'block';

            if(resposta[0] == 'Elefante' && resposta[1] == 'Avestruz' && resposta[2] == 'Guepardo' && resposta[3] == 'Onça-pintada, Lobo-guará, Arara-azul'){
                $('.acertos').text('Você acertou todas! Parabéns ^^');
            }
            else{
                
                //Saber quais respostas estão certas e erradas
                if((errada[0] == 'Gorila' || errada[0] == 'Hipopótamo' || errada[0] == 'Baleia') || 
                (errada[1] == 'Serpente' || errada[1] == 'Leão' || errada[1] == 'Águia') || 
                ((errada[2] == 'Leopardo' || errada[2] == 'Tigre' || errada[2] == 'Rinoceronte')) ||
                (errada[3] == 'Tigre-branco, Pinguín, Boto-cor-de-rosa' || errada[3] == 'Panda-gigante, Tubarão, Tigre' || errada[3] == 'Mico-leão-dourado, Gorila, Elefante' )){

                    if(errada[0] == undefined){
                        errada[0] = '';
                    }
                    if(errada[1] == undefined){
                        errada[1] = '';
                    }
                    if(errada[2] == undefined){
                        errada[2] = '';
                    }
                    if(errada[3] == undefined){
                        errada[3] = '';
                    }

                    erro.innerHTML = "<b>Você errou: </b>" + "<br>" + 
                        errada[0] + "<br>" +
                        errada[1] + "<br>" +
                        errada[2] + "<br>" +
                        errada[3] + "<br>";
                        //resposta[3] + "<br>";


                    if((resposta[0] != 'Gorila' && resposta[0] != 'Hipopótamo' && resposta[0] != 'Baleia') || 
                    (resposta[1] != 'Serpente' && resposta[1] != 'Leão' && resposta[1] != 'Águia') || 
                    (resposta[2] != 'Leopardo' && resposta[2] != 'Tigre' && resposta[2] != 'Rinoceronte') ||
                    (resposta[3] != 'Tigre-branco, Pinguín, Boto-cor-de-rosa' && resposta[3] != 'Panda-gigante, Tubarão, Tigre' && resposta[3] != 'Mico-leão-dourado, Gorila, Elefante')){

                        resposta[0] = 'Elefante';
                        resposta[1] = 'Avestruz';
                        resposta[2] = 'Guepardo';
                        resposta[3] = 'Onça-pintada, Lobo-guará, Arara-azul';

                        acerto.innerHTML = "<b>Respostas certas: </b>" + "<br>" +
                                               resposta[0] + "<br>" +
                                               resposta[1] + "<br>" +
                                               resposta[2] + "<br>" +
                                               resposta[3];
                    } 
                }                    

            }
        });

    }
    else if(clicked_id == 'animais4_option3'){

        resposta[3] = 'Onça-pintada, Lobo-guará, Arara-azul';

        document.querySelector('.finalizarAnimais').addEventListener('click', () => {
            animaisImg.style.display = 'none';
            animaisQuestion4.style.display = 'none';
            animais.style.display = 'none';
            tema.style.display = 'none';

            document.querySelector('[tempo4]').style.display = 'none';
            acabouAnimais.style.display = 'none';
            recomecarAnimais.style.display = 'none';

            sectionAnimais.style.display = 'none';
            resultado.style.display = 'block';

            if(resposta[0] == 'Elefante' && resposta[1] == 'Avestruz' && resposta[2] == 'Guepardo' && resposta[3] == 'Onça-pintada, Lobo-guará, Arara-azul'){
                $('.acertos').text('Você acertou todas! Parabéns ^^');
            }
            else{
                
                //Saber quais respostas estão certas e erradas
                if((errada[0] == 'Gorila' || errada[0] == 'Hipopótamo' || errada[0] == 'Baleia') || 
                (errada[1] == 'Serpente' || errada[1] == 'Leão' || errada[1] == 'Águia') || 
                ((errada[2] == 'Leopardo' || errada[2] == 'Tigre' || errada[2] == 'Rinoceronte')) ||
                (errada[3] == 'Tigre-branco, Pinguín, Boto-cor-de-rosa' || errada[3] == 'Panda-gigante, Tubarão, Tigre' || errada[3] == 'Mico-leão-dourado, Gorila, Elefante' )){

                    if(errada[0] == undefined){
                        errada[0] = '';
                    }
                    if(errada[1] == undefined){
                        errada[1] = '';
                    }
                    if(errada[2] == undefined){
                        errada[2] = '';
                    }
                    if(errada[3] == undefined){
                        errada[3] = '';
                    }

                    erro.innerHTML = "<b>Você errou: </b>" + "<br>" + 
                        errada[0] + "<br>" +
                        errada[1] + "<br>" +
                        errada[2] + "<br>" +
                        errada[3] + "<br>";
                        //resposta[3] + "<br>";


                    if((resposta[0] != 'Gorila' && resposta[0] != 'Hipopótamo' && resposta[0] != 'Baleia') || 
                    (resposta[1] != 'Serpente' && resposta[1] != 'Leão' && resposta[1] != 'Águia') || 
                    (resposta[2] != 'Leopardo' && resposta[2] != 'Tigre' && resposta[2] != 'Rinoceronte') ||
                    (resposta[3] != 'Tigre-branco, Pinguín, Boto-cor-de-rosa' && resposta[3] != 'Panda-gigante, Tubarão, Tigre' && resposta[3] != 'Mico-leão-dourado, Gorila, Elefante')){

                        resposta[0] = 'Elefante';
                        resposta[1] = 'Avestruz';
                        resposta[2] = 'Guepardo';
                        resposta[3] = 'Onça-pintada, Lobo-guará, Arara-azul';

                        acerto.innerHTML = "<b>Respostas certas: </b>" + "<br>" +
                                               resposta[0] + "<br>" +
                                               resposta[1] + "<br>" +
                                               resposta[2] + "<br>" +
                                               resposta[3];
                    } 
                }                    

            }
        });
        
    }
    else if(clicked_id == 'animais4_option4'){

        errada[3] = 'Mico-leão-dourado, Gorila, Elefante';

        document.querySelector('.finalizarAnimais').addEventListener('click', () => {
            animaisImg.style.display = 'none';
            animaisQuestion4.style.display = 'none';
            animais.style.display = 'none';
            tema.style.display = 'none';

            document.querySelector('[tempo4]').style.display = 'none';
            acabouAnimais.style.display = 'none';
            recomecarAnimais.style.display = 'none';

            sectionAnimais.style.display = 'none';
            resultado.style.display = 'block';

            if(resposta[0] == 'Elefante' && resposta[1] == 'Avestruz' && resposta[2] == 'Guepardo' && resposta[3] == 'Onça-pintada, Lobo-guará, Arara-azul'){
                $('.acertos').text('Você acertou todas! Parabéns ^^');
            }
            else{
                
                //Saber quais respostas estão certas e erradas
                if((errada[0] == 'Gorila' || errada[0] == 'Hipopótamo' || errada[0] == 'Baleia') || 
                (errada[1] == 'Serpente' || errada[1] == 'Leão' || errada[1] == 'Águia') || 
                ((errada[2] == 'Leopardo' || errada[2] == 'Tigre' || errada[2] == 'Rinoceronte')) ||
                (errada[3] == 'Tigre-branco, Pinguín, Boto-cor-de-rosa' || errada[3] == 'Panda-gigante, Tubarão, Tigre' || errada[3] == 'Mico-leão-dourado, Gorila, Elefante' )){

                    if(errada[0] == undefined){
                        errada[0] = '';
                    }
                    if(errada[1] == undefined){
                        errada[1] = '';
                    }
                    if(errada[2] == undefined){
                        errada[2] = '';
                    }
                    if(errada[3] == undefined){
                        errada[3] = '';
                    }

                    erro.innerHTML = "<b>Você errou: </b>" + "<br>" + 
                        errada[0] + "<br>" +
                        errada[1] + "<br>" +
                        errada[2] + "<br>" +
                        errada[3] + "<br>";
                        //resposta[3] + "<br>";


                    if((resposta[0] != 'Gorila' && resposta[0] != 'Hipopótamo' && resposta[0] != 'Baleia') || 
                    (resposta[1] != 'Serpente' && resposta[1] != 'Leão' && resposta[1] != 'Águia') || 
                    (resposta[2] != 'Leopardo' && resposta[2] != 'Tigre' && resposta[2] != 'Rinoceronte') ||
                    (resposta[3] != 'Tigre-branco, Pinguín, Boto-cor-de-rosa' && resposta[3] != 'Panda-gigante, Tubarão, Tigre' && resposta[3] != 'Mico-leão-dourado, Gorila, Elefante')){

                        resposta[0] = 'Elefante';
                        resposta[1] = 'Avestruz';
                        resposta[2] = 'Guepardo';
                        resposta[3] = 'Onça-pintada, Lobo-guará, Arara-azul';

                        acerto.innerHTML = "<b>Respostas certas: </b>" + "<br>" +
                                               resposta[0] + "<br>" +
                                               resposta[1] + "<br>" +
                                               resposta[2] + "<br>" +
                                               resposta[3];
                    } 
                }                    

            }
        });
        
    }
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
            tempo1 = 0;

            esporteQuestion1.style.display = 'none';
            esporteQuestion2.style.display = 'none';
            esporteQuestion3.style.display = 'none';
            esporteQuestion4.style.display = 'none';

            if((resposta[0] && resposta[1] && resposta[2] && resposta[3] ) || 
                errada[0] && errada[1] && errada[2] && errada[3]){
                    acabouEsporte.style.display = 'none';
                    recomecarEsporte.style.display = 'none';
            }else{
                acabouEsporte.style.display = 'block';
                recomecarEsporte.style.display = 'flex';
            }
            
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
            filmeQuestion1.style.display = 'none';
            filmeQuestion2.style.display = 'none';
            filmeQuestion3.style.display = 'none';
            filmeQuestion4.style.display = 'none';

            if((resposta[0] && resposta[1] && resposta[2] && resposta[3] ) || 
            errada[0] && errada[1] && errada[2] && errada[3]){
                acabouFilme.style.display = 'none';
                recomecarFilme.style.display = 'none';
            }else{
                acabouFilme.style.display = 'block';
                recomecarFilme.style.display = 'flex';
            }
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
            historiaQuestion1.style.display = 'none';
            historiaQuestion2.style.display = 'none';
            historiaQuestion3.style.display = 'none';
            historiaQuestion4.style.display = 'none';

            if((resposta[0] && resposta[1] && resposta[2] && resposta[3] ) || 
            errada[0] && errada[1] && errada[2] && errada[3]){
                acabouHistoria.style.display = 'none';
                recomecarHistoria.style.display = 'none';
            }else{
                acabouHistoria.style.display = 'block';
                recomecarHistoria.style.display = 'flex';
            }

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
            animaisQuestion1.style.display = 'none';
            animaisQuestion2.style.display = 'none';
            animaisQuestion3.style.display = 'none';
            animaisQuestion4.style.display = 'none'; 

            if((resposta[0] && resposta[1] && resposta[2] && resposta[3] ) || 
            errada[0] && errada[1] && errada[2] && errada[3]){
                acabouAnimais.style.display = 'none';
                recomecarAnimais.style.display = 'none';
            }else{
                acabouAnimais.style.display = 'block';
                recomecarAnimais.style.display = 'flex';
            }

        }
    }, 1000);
}





