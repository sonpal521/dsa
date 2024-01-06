// function twinStr(str){

//     let freq = {};
//     let s = str.split('');
//     for(let i=0;i<s.length;i++){
//         if(freq[s[i]]){
//             freq[s[i]]++;
//         }else{
//             freq[s[i]] = 1;
//         }
//     }
//     let twinC = 0;
//     for(let key in freq){
//         if(key == 2){
//             twinC++;
//         }
//     }
//     return twinC;

// }
// let str = "abccba";
// console.log(twinStr(str));