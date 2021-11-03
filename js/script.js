$(document).ready(() => {
  addActiveToNav();
  $('.carousel').carousel()
});

/**
 * Irá buscar a barra de navegação do arquivo e colocar em todas
 * as páginas para evitar copia e colo de código
 */
var loadNavBar = () => {
  $("#nav").load("./nav.html", () => {
    addActiveToNav();
  });
}

/**
 * Verifica o link atual e altera a classe na barra de navegação para
 * ficar destacado a página atual
 */
var addActiveToNav = () => {
  let loc = window.location.href; // returns the full URL
  let navId = '#main';
  if (/robo/.test(loc)) {
    navId = '#robot'
  } else if (/diario/.test(loc)) {
    navId = '#board'
  } else if (/institution/.test(loc)) {
    navId = "#institution"
  }


  $(navId).addClass('active');
  console.log(loc);
}