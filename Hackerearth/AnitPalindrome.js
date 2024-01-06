function antipalindrome(s){
    let i = 0;
    let j = s.length-1;
    let str = s.split('');
     while(i < j){
        if(str[i] !== str[j] ){
            str.sort();
            return str.join('');

        }
        i++;
        j--;
     }
     return -1;
}
let s = "bpc";
console.log(antipalindrome(s));