-es5
在js中 函数是一等公民
-js的过去 没有class 关键字
function LRUcache
类的构造函数
定义了一个类
new LRUCache 可以被实例化
new 过程发生了什么
生成了一个对象 {} Object
内存之中生成一个空的对象 {} new
对象中加上属性  构造函数 this 

面向对象 类，构造函数 方法 属性 
    class constructor
      function A  函数本身 prototype this.
    函数具有prototype 属性
    火车头 是我们的构造函数 constructor prototype对象
    基于原型的面向对象 


-任何函数都有pritotype 属性 它的值是对象，
key=>function(){}
-任何对象都是__proto__,指向 构造函数的prototype属性
js的面向对象，类和实例的关系，不是父子关系，没有血缘
基于原型
new 的过程 构造函数 被执行，创造一个this 指向对象
加了属性 对象的__proto__属性 找到原型链上的方法
cache instanceof LRUCache 
js 中没有类的概念， LRUCache 其实也是对象
{
var obj = new A();中new一共实现了三步操作：

创建一个空对象obj var obj= {}
将构造函数的prototype赋给对象的__proto__obj.__proto__ = A.prototype
构造函数对象的this指针指向objA.call(obj)

}

-es6 7 8 9
         2
1        1
[1 2]      0
get(1)
[2 1]
 - 装  有容量
 - push  最后一个元素 是最重要的
 - [0]  元素可以被删除的
 -空间还有吗？
 -get 在哪？ 放到最后面来 在原始位置删除 并且放至最后