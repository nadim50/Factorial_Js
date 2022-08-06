
// declare function

let sum = 1;

function factorial(n) {
    i = n;

    while (i >= 1) {
        sum = sum * i;
        i--;

    }
    return sum;

}

///// called function

factorial(6);
console.log('Factorial is : ', sum);