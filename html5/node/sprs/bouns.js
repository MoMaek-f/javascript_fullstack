// const caculateBouns = () =>{}
let caculateBouns =null;
// 对象字面量 发钱的策略
let categories={
    'S':(salary)=>{
        return salary*60
    },
    'A':(salary)=>{
        return salary*24
    },
    'B':(salary)=>{
        return salary*18
    },
    'C':(salary)=>{
        return salary*15
    },
    'D':(salary)=>{
        return salary*12
    },
}
// console.log(caculateBouns);
//计算过程
caculateBouns = (salary,type='C') =>{
    
    let bounce =categories[type](salary)
    // categories[type]()
    return bounce;
}
console.log(caculateBouns(2000, 'A'))