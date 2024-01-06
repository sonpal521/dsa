function caseConversion(s){
    let result  = '';
    let isFirstChar = true;
    for(let i=0;i<s.length;i++){
        const currentChar = s[i];

        if(currentChar === currentChar.toUpperCase()){
            result += isFirstChar ? currentChar.toLowerCase(): ('_'+ currentChar.toLowerCase());

        }else{
            result += currentChar;
        }
        isFirstChar = false;
    }
    return result;

}
let s = "ComputerHope";
console.log(caseConversion(s));