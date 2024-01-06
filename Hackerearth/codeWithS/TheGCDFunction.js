function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

function solve(n) {
    if (n === 1) {
        return [1, 1];
    }
    let a = 1;
    for (let i = 2; i <= n; i++) {
        a = (a * i) / gcd(a, i);
    }
    let x = (n * (n + 1)) / 2;
    return [x, a];
}

let n = 3;
console.log(solve(n));