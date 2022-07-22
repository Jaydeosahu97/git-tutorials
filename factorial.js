function factorial(a){
    let result=1;
    for (let index = 1; index <= a; index++) {
        result*=index;
    }
    return result;
}
console.log(factorial(6));