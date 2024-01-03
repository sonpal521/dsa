function numberOfSteps(n, a,b){
    let count = 0;
  let mi = Math.min(...a);
  let i = 0;
   
  while (i < n) {
    if (a[i] >= b[i]) {
      while (a[i] > mi) {
        a[i] -= b[i];
        count++;
      }
    }
   
    if (a[i] < mi) {
      mi = a[i];
      i = 0;
    }
   
    if (a[i] !== mi) {
      count = -1;
      break;
    }
   
    i++;
  }
   
  return count;
   
  }