export function es5(val) {
  var C = function(hello) {
    this.hello = hello
  }
  C.prototype.say = function() {
    return this.hello
  }

  var o = new C(val)
  return o.say()
}

export function es6(val) {
  class C {
    constructor(val) {
      this.val = val;
    }
    say() {
      return this.val;
    }
  }

  let o = new C(val)
  return o.say()
}
