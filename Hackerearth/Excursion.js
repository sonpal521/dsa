function excursion(n,m,k){
    if(n%2 == 0 && m%2 ==0){
        return Math.floor((n+m)/k);
    }else{
        return Math.floor(((n+m)/k)+1);
    }

}
let n = 13, m = 7;
let k = 2;
console.log(excursion(n,m,k));