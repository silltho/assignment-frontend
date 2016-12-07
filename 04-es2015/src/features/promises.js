export function es5(cb) {
  setTimeout(function() {
    cb(null, 10)
  }, 1)
}

export function es6() {
  const p = new Promise(async);
  function async() {
    setTimeout(function () {
      p.resolve(10)
    }, 1);
  }
  return p;
}
