function solve(n, v) {
    let ans = 0;

    for (let mask = 0; mask <= 30; mask++) {
        let cnt_of_bits = 0;
        for (let i = 0; i < n; i++) {
            if ((1 << mask) & v[i]) {
                cnt_of_bits++;
            }
        }
        if (cnt_of_bits % 2) {
            ans += (1 << mask);
        }
    }
    return ans;
}

// Example usage:
const vector = [5,6,9,10,13,14];
const result = solve(vector.length, vector);
console.log(result); // This will log the result of the solve function
