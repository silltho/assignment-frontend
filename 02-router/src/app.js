import $ from 'jquery'
import router from './router'
import homeTpl from './templates/home.hbs'
import contactTpl from './templates/contact.hbs'
//import playerTpl from './templates/player.hbs'
import notFoundTpl from './templates/not-found.hbs'

const $app = $('#app')

function index() {
  $app.html(homeTpl())
}

function contact() {
  $app.html(contactTpl())
}

/*function player(id) {
  $app.html(playerTpl({id: id}))
}*/

function notFound() {
  $app.html(notFoundTpl())
}

router('/', index)
router('/contact', contact)
//router('/players/:id', player)
router('*', notFound)

let aTags = $('a');
for(let i = 0; i < aTags.length; i++){
  aTags[i].addEventListener("click", (e) => {
    e.preventDefault();
    router($(e.currentTarget).attr("href"));
  });
}

window.addEventListener('load', function(e) {
  router(window.location.pathname); //handle path after pageload
})

window.addEventListener('popstate', function(e) {
  router(e.state.href); //handle path after back or forward button
})
