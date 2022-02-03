
var esporteImg = document.querySelector(".esporte-img");
var esporteQuestion1 = document.querySelector(".ocultar-esporte");
var esportes = document.querySelector(".buttonEsportes");
var sectionEsporte = document.querySelector(".esporte");

var sectionFilme = document.querySelector(".filme");
var filmeImg = document.querySelector(".filme-img");
var filmeQuestion1 = document.querySelector(".ocultar-filme");
var filmes = document.querySelector(".buttonFilme");

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
    



