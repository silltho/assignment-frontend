import $ from 'jquery'

var routes = [];

export default function(href, handler) {
  if(href && handler) {
    routes[href] = handler; // register new route
  }
  if(href && !handler) {
    if(!goto(href)) gotoDefaultRoute();
  }
  if(!href && !handler){
    startRouting();
  }

  function goto(href) {
    for(let route in routes){
      let param, paramStart;

      if(route === href) {
        window.history.pushState({href: href}, '', href);
        routes[route]();
        return true;
      }

      paramStart = route.indexOf(':');
      if(paramStart >= 0) {
        param = href.substring(paramStart, href.length);
        if (route.substring(0, paramStart) === href.substring(0, paramStart)) {
          window.history.pushState({href: href}, '', href);
          routes[route](param)
          return true;
        }
      }
    }
    return false;
  }

  function gotoDefaultRoute() {
    if(typeof routes['*'] == 'function') {
      window.history.pushState({href: '*'}, '', 'notFound');
      routes['*']();
      return true;
    }
    return false;
  }

  function startRouting(){
    let aTags = $('a');
    for(let i = 0; i < aTags.length; i++){
      aTags[i].addEventListener("click", (e) => {
        e.preventDefault();
        goto($(e.currentTarget).attr("href"));
      });
    }

    window.addEventListener('load', function(e) {
      goto(window.location.pathname); //handle path after pageload
    })

    window.addEventListener('popstate', function(e) {
      goto(e.state.href); //handle path after back or forward button
    })
  }
}
