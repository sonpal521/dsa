function isPalindromicStr(str){
    if(str == str.split('').reverse().join('')){
        return "YES";
    }else{
        return "NO";

    }

}
let str = "aba";
console.log(isPalindromicStr(str));