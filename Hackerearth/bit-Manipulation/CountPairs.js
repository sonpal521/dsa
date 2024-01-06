function countPairs(arr){
    let count = 0;
    for(let i=0;i<arr.length;i++){
      for(let j = i+1;j<arr.length;j++){
        let min = Math.min(arr[i],arr[j]);
        let xor = ( arr[i]^arr[j]);
        if(min <= xor){
        count++;
        }
    }
    }
    return count;
    }
    
    /* let arr = [4,5,9]; */
    let arr = [1,2];
    console.log(countPairs(arr));
    