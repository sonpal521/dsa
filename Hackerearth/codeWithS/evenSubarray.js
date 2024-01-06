function countSubarrays(n, arr) {
    let v = [-1];
  
    // Iterate through the elements and store the indices if the element is even
    for (let i = 0; i < n; i++) {
      if (arr[i] % 2 === 0) {
        v.push(i);
      }
    }
  
    v.push(n);
  
    // Store ans initially as total number of subarrays
    let ans = (n * (n + 1)) / 2;
  
    // Iterate and subtract total number of subarrays whose product will be odd
    for (let i = 1; i < v.length; i++) {
      // Store current length
      let cnt = v[i] - v[i - 1] - 1;
  
      // Subtract the number of subarrays whose product will be odd
      ans -= (cnt * (cnt + 1)) / 2;
    }
  
    // Finally, ans will be the number of subarrays that will be even
    return ans;
  }
  
  // Example usage:
  const n = 4;
  const arr = [3,5,2,3];
  const result = countSubarrays(n, arr);
  console.log(result);
  