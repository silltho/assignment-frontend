import $ from 'jquery'
import router from './router'
import homeTpl from './templates/home.hbs'
import playerTpl from './templates/player.hbs'
import contactTpl from './templates/contact.hbs'
import notFoundTpl from './templates/not-found.hbs'

const $app = $('#app')

function index() {
  $app.html(homeTpl())
}

function contact() {
  $app.html(contactTpl())
}

function players(ctx) {
  let player;
  switch (ctx.params.player) {
    case 'magnus':
      player = {
        id: 1,
        name: "magnus",
        description: "Magnus description",
        imageHref: "https://cdn.worldchess.com/static/img/nyfide/carlsen_2x.png"
      }
      break;
    case 'sergey':
      player = {
        id: 2,
        name: "sergey",
        description: "Sergey description",
        imageHref: "https://cdn.worldchess.com/static/img/nyfide/karjakin_2x.png"
      }
      break;
  }
  $app.html(playerTpl(player))
}

function notFound() {
  $app.html(notFoundTpl())
}

router('/', index)
router('/players/:player', players)
router('/contact', contact)
router('*', notFound)
router()
