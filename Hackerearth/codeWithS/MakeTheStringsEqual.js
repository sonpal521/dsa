function solve(n, s1, s2) {
    let str1 = s1.split('').sort().join('');
    let str2 = s2.split('').sort().join('');
    
    if (str1 !== str2) return "No";
    
    for (let i = 0; i + 1 < n; i++) {
        if (str1[i] === str1[i + 1] || str2[i] === str2[i + 1]) return "Yes";
    }
    
    str1 = '';
    str2 = '';
    for (let i = 0; i < n; i++) {
        if (s1[i] !== s2[i]) {
            str1 += s1[i];
            str2 += s2[i];
        }
    }
    
    n = str1.length;
    let cnt = 0;
    const mp = new Map();
    for (let i = 0; i < n; i++) mp.set(str1[i], i);
    
    for (let i = 0; i < n; i++) {
        const j = mp.get(str2[i]);
        cnt += (j - i);
        for (let k = j; k > i; k--) {
            const temp = str1[k];
            str1 = str1.slice(0, k) + str1[k - 1] + str1.slice(k + 1);
            str1 = str1.slice(0, k - 1) + temp + str1.slice(k);
            mp.set(str1[k], k);
            mp.set(str1[k - 1], k - 1);
        }
    }
    
    if (cnt % 2 !== 0) return "No";
    return "Yes";
}

// Example usage:
const result = solve(4, "abcd", "dacb");
console.log(result); // This will log the result of the solve function
