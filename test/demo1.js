function object (o) {
  function F() {}
  F.prototype = o
  return new F()
}
var o = {
  value: {
    a: 1,
    b: 2
  }
}

var a = new object(o)
a.value.a = 'yy'
var b = new object(o)
console.log(b.value)