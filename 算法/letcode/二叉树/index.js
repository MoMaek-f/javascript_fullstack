var tree = {   
    value:1,
    left: {
        value: 2
    },
    right:{
        value:3
    }
}
//递归遍历
var preOrder = function (node) {
    if (node) {
        console.log(node.value)
        preOrder(node.left)
        preOrder(node.right)
    }
}

//深度优先且非递归
var preOrderUnRecur = function(node) {
    if(!node) {
        throw new Error('Empty Tree')
    }
    var stack = []
    stack.push(node)
    while (stack.length !==0) {
        node = stack.pop()
        console.log(node.value)
        if (node.right) {
            stack.push(node.right)
        }
        if (node.left) {
            stack.push(node.left)
        }
    }
}
//广度优先且非递归
function BreadthFirstUnRecur (biTree) {
    let queue = []
    queue.push(biTree)
    while (queue.length !== 0){
        let node = queue.shift()
        console.log(node.value)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
}
BreadthFirstUnRecur(tree)