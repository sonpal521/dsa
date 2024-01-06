function findXOR(arr) {
    let xor = 0;
  
    for (let i = 0; i < arr.length; i++) {
      xor ^= arr[i];
    }
  
    for (let i = 0; i < arr.length; i++) {
      let temp = arr[i] ^ xor;
      if (!arr.includes(temp)) {
        console.log(-1);
        return;
      }
    }
  
    console.log(xor);
  }
  
  // Example usage:
  const arr = [5 ,6 ,9, 10, 13, 14];
  findXOR(arr);
  