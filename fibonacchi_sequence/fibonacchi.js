// fibonacchi sequence is a sequnce in which the element is represent by sum of previous two numbers


// question : find ythe fibonacchi of given number


function fibonacchi (n){
    let fib = [0,1]
    for(let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}

const result = fibonacchi(7)
console.log(result)