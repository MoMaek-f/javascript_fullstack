let a = {
  name: 'wn',
  age: 18
}
// let b = a
// b.sex = 'boy'
let c = Object.create(a)
c.sex = 'boy'
console.log(a)