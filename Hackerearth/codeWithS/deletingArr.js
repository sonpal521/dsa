function calculateOperations(n, k) {
    let ans;
    if (k >= n) {
      ans = 1;
    } else {
      const num = n;
      const denm = 2 * k + 1;
      ans = Math.ceil((num + denm - 1) / denm);
    }
    return ans;
  }
  
  // Example usage:
  const n = 4;
  const k = 1;
  const result = calculateOperations(n, k);
  console.log(result);