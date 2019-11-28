var list = [-1 ,-100 , 3, 99], k=2

// function Rshift(list,k){
//     const copy= [...list]
//     const n = list.length
//     for (let i=0;i<n;i++) {
//         list[i] = copy[(k+i)%n]
//     }
//     return list
// }


// function Rshift(list,k){
//     const n = list.length
//     if(k%n===0) return
//     let cnt = Math.abs(k>0?k%n:k+(k%n))
//     let t = null
//     while (cnt--) {
//         t=list[n-1]
//         for(let i=n-1;i>0;i--){
//             list[i] = list[i-1]
//         }
//         list[0]=t
//     }
//     return list
// }
function reverse(list,start,end){
    let t = null
    while (start < end) {
        t = list[start]
        liist[start] = list[end]
        list[end] = t
        start++
        end--
    }
}

function Rshift (list,k) {
    const n = list.length
    if(k%n===0) {return}
    reverse(list,0,n-k-1)
    reverse(list,n-k,n-1)
    reverse(list,0,n-1)
    return list

}
console.log(list)