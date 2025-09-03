// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,


/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
let a = 0
    let b = 1
    if (n === 0 ) {
        return 0
    }else if(n ===1){
        return 1

    }
    for(let i = 2;i<=n; i++){
        let c = a+b
        a = b
        b = c

    }
    return b
};
const result = fib(3)
console.log(result)