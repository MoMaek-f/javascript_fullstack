Function.prototype.myBind = function (oThis, ...aArgs) {
  var fToBind = this;
  //fToBind 有 prototype.abc
  var fBound = function (...bArgs) {
    //拿到所有的参数
    //没有考虑优先级
    //如果被 new 调用 this 指向new 完的实例
    //否则就是第一个参数 othis
    
    return fToBind.apply(oThis,aArgs.concat(bArgs));
  }
  //fBound 没有 prototype.abc
  //继承一下
  fBound.prototype = Object.create(this.prototype)
  return fBound;
}
function sum(a, b, c) {
  return a + b + c;
}
let obj = sum
// 第一步调用
var a = sum
  .myBind(null, 1);
// 第二步调用

console.log(a(2, 3))
