var routes = [];

export default function(href, handler) {
  if(handler != undefined) {
    routes[href] = handler; // register new route
  } else if(href != undefined) {
    if(!route(href)) defaultRoute();
  }

  function route(href) {
    if(typeof routes[href] == 'function') {
      window.history.pushState({href: href}, '', href);
      routes[href](); // route found
      return true;
    }
    return false;
  }

  function defaultRoute() {
    if(typeof routes['*'] == 'function') {
      window.history.pushState({href: '*'}, '', 'notFound');
      routes['*'](); // show error route
      return true;
    }
    return false;
  }

  //if (testHrefParams(href)) routes[getHrefWithoutParams(href)] = handler;

  /*if(testHrefParams(href)) {
   routes[getHrefWithoutParams(href)]({id: getHrefParamValue(href)})
   // /player/:id
   // /player/1234
   }*/

  /*function getHrefWithoutParams(href){
    var regex = /.*(?=\/:)/;
    return href.exec(regex);
  }

  function getHrefParam(href){
    var regex = /.*(?=\/:)/;
    return href.exec(regex);
  }

  function getHrefParamValue(href){
    var tmp = getHrefWithoutParams(href);
    var regex = new RegExp('(?:'+ tmp +').*');
    return href.exec(regex);
  }

  function testHrefParams(href){
    var regex = /(?=\/:\w*)/;
    return href.test(regex);
  }*/
}
