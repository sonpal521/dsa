function fac(n){
    if(n==0 || n==1 ){
        return n;
    }
    let res = n*fac(n-1);
    return res;
}
let n = 3;
console.log(fac(n));