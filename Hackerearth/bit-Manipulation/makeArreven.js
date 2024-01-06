function calculateC(arr) {
    let c = 0;
    let i = 0;
    const n = arr.length;
  
    while (i < n - 1) {
      if (arr[i] % 2 !== 0) {
        if (arr[i + 1] % 2 !== 0) {
          c++;
          arr[i] = 2;
          arr[i + 1] = 2;
        } else {
          c += 2;
          arr[i] = 2;
          i++;
        }
      } else {
        i++;
      }
    }
  
    if (arr[n - 1] % 2 !== 0) {
      c += 2;
    }
    
    console.log(c);
  }
  
  // Example usage:
  const inputArray = [1,3,2,2];
  calculateC(inputArray);

  function calculateResult(arr) {
    let ans = 0;
    let len = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        len++;
      } else {
        ans += Math.floor((len + (len % 2) * 3) / 2);
        len = 0;
      }
    }
  
    ans += Math.floor((len + (len % 2) * 3) / 2);
    console.log(ans);
  }
  
  // Example usage:

  calculateResult(inputArray);
  