//泛型
//声明泛型变量<T> 它用于捕获开发者传入的参数类型，我们就可以使用这个变量T做参数类型，和返回值的参数类型
function returnItem<T>(para: T):T {
  return para
}
function swap<T,U>(tuple:[T,U]) {
  return [tuple[0],tuple[1]]
}
swap([7,'seven'])

function getArraylength<T>(arg: Array<T>):Array<T> {
  console.log(arg.length)
  return arg
}
//泛型接口
interface ReturnItem<T> {
  (para: T):T
}
const ReturnItem: ReturnItem<number> = para=> para

//泛型类
// class Stack<T> {
//   private arr: number[] = []

//   public push(item: T) {
//     this.arr.push(item)
//   }
//   public pop() {
//     this.arr.pop()
//   }
// }
// const app =new Stack
// app.push('123')

//泛型约束  
type Params = number | string 
class Stack<T extends Params> {
  private arr: T[] = []

  public push(item: T) {
    this.arr.push(item)
  }
  public pop() {
    this.arr.pop()
  }
}
const app =new Stack<number>()
const app2 =new Stack<boolean>()
//泛型约束与索引类型
function getValue<T extends object,U extends keyof T>(obj: T,key: U) {
  return obj[key]
}
const a = {
  name: 'ftl',
  id: 1
}
getValue(a,'id')