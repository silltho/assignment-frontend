export function es5() {
  return {
    i: 0,
    next: function() {
      return this.i += 1
    }
  }
}

export function es6() {
  const i = 0
  return {
    i,
    next(){
      return this.i += 1;
    }
  }
}
