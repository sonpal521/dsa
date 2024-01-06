function primeFactorsMod3(v, n) {
    for (let i = 2; i * i <= n; i++) {
      while (n % i === 0) {
        v[i]++;
        v[i] %= 3;
        n /= i;
      }
    }
    if (n !== 1) {
      v[n]++;
      v[n] %= 3;
    }
  }
  
  function calculateAnswers(arr) {
    let ans = 0;
    const mp = new Map();
    const v = Array(101).fill(0);
    mp.set(v.toString(), 1);
  
    for (let i = 0; i < arr.length; i++) {
      const a = arr[i];
      primeFactorsMod3(v, a);
      const key = v.toString();
      
      ans += mp.has(key) ? mp.get(key) : 0;
      mp.set(key, (mp.get(key) || 0) + 1);
    }
  
    return ans;
  }
  
  // Example usage:
  const tests = 2;
  const arrays = [
    [2, 3, 4],
    [27, 1, 2, 4, 2]
  ];
  
  for (let t = 0; t < tests; t++) {
    const result = calculateAnswers(arrays[t]);
    console.log(result);
  }
  