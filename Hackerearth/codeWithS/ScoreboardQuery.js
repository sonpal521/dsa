function modifyArray(n, v, queries) {
    const mp = new Map();
    
    for (let i = 0; i < n; i++) {
        mp.set(v[i], (mp.get(v[i]) || 0) + 1);
    }

    const result = [];
    
    for (let i = 0; i < queries.length; i++) {
        const [a, val] = queries[i];
        mp.set(v[a - 1], (mp.get(v[a - 1]) || 0) - 1);
        
        if (mp.get(v[a - 1]) === 0) {
            mp.delete(v[a - 1]);
        }
        
        mp.set(val, (mp.get(val) || 0) + 1);
        v[a - 1] = val;
        
        result.push(mp.size + 1);
    }

    return result;
}

// Example usage:
const n = 4;
const v = [2, 1, 1, 5];
const queries = [
    [2, 3]
];

const result = modifyArray(n, v, queries);
console.log(result); // Output the result array after processing queries