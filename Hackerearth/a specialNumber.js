function findSpecialNumber(a){
    for(let n = a; ;n++){
        let sumOfDigits = 0;
        let num = n;
     while(num>0){
        sumOfDigits += num%10;
        num = Math.floor(num/10);
     }
     if(sumOfDigits % 4 === 0){
        return n;
     }

    }
}
let a = 432;
console.log(findSpecialNumber(a));