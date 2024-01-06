/* function xorPairs(arr){

let count = 0;
for(let i=0;i<arr.length;i++){
for(let j = i+1; j<arr.length;j++){
    if((arr[i] ^ j) == (arr[j]^i)){
    
    count++;
    }
}
}
return count;
}
let arr = [3,4,1,2];
console.log(xorPairs(arr)); */

function countPairs(a) {
    let count = 0;
    const n = a.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((a[i] ^ j) === (a[j] ^ i)) {
                count++;
            }
        }
    }

    return count;
}

/* const arr = [0,0,0]; */
const arr = [3, 4, 1, 2];

const result = countPairs(arr);
console.log("Number of pairs satisfying the condition:", result);