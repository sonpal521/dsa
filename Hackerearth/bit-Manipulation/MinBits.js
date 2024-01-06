function countSetBits(num) {
    let count = 0;
    while (num > 0) {
      count += num & 1;
      num >>= 1;
    }
    return count;
  }
  
  function findNumberWithMinSetBits(L, R) {
    let minCount = Infinity;
    let result = -1;
  
    for (let i = L; i <= R; i++) {
      const setBits = countSetBits(i);
      if (setBits < minCount) {
        minCount = setBits;
        result = i;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const L = 10;
  const R = 1000;
  
  const number = findNumberWithMinSetBits(L, R);
  console.log("Number with minimum set bits:", number); // Output will be 16 for the given range (10 to 1000)
  