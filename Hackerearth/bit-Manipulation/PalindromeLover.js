function palindromeLover(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] = a[i] % 2;
    }

    let i = 0;
    let j = a.length - 1;

    while (i < j) {
        if (a[i] !== a[j]) {
            return 0;
        } else {
            i++;
            j--;
        }
    }

    return 1;
}

let a = [1, 2, 3, 3, 3, 3];
console.log(palindromeLover(a));