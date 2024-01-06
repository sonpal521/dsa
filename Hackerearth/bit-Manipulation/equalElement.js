function equalElements(arr){

    let even = 0;
    let odd = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i]%2 ==0){
            even++;
        }else{
            odd++;
        }
    }
    let ans = Math.min(even,odd);
    return ans;
}

let arr = [3,5,3,2];
console.log(equalElements(arr));