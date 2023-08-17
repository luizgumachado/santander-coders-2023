const fibonacci =  (n) => {
    let fiboArr = [];
    let num1 = 0;
    let num2 = 1;

    if(n === 0) {
        return fiboArr;
    }

    fiboArr.push(num1);
    if(n === 1) {
        return fiboArr;
    }

    fiboArr.push(num2);
    if(n === 2) {
            return fiboArr;
    }

    for(let i = 2, aux = 0; i <= n; i++) {
        aux = fiboArr[(i - 1)] + fiboArr[(i - 2)];
        fiboArr.push(aux);
    }

    return fiboArr;
}

console.log(fibonacci(12));
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));