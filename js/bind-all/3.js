Function.prototype.myBind = function(oThis,...aArgs) {
  console.log(this===sum);
 //先获取要绑定的函数
  var fTobind = this;
  var fBound = function() {
    // call apply
    fTobind.apply(oThis);
  }
  return fBound;
}

function sum(a,b,c) {
  return a+b+c;
}
var a = sum.myBind(null,1);
a(2,3);
function Foo () {

}
Foo.prototype.say = function( ) {
  console.log(this === f);
}
var f = new Foo();
f.say();