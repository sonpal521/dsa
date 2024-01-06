function SumOfAbsoluteDifferences(a){
    const numC = new Map();
    const numFI = new Map();
    const numSI = new Map();

    for(let i=0;i<a.length;i++){
        const num =a[i];

        if(numC.has(num)){
            numC.set(num, numC.get(num)+1);
        }else{
            numC.set(num,1);

        }

        if(!numFI.has(num)){
            numFI.set(num,i);
        }
        numSI.set(num,i);
    }
    let sum =0;
    for(let [num,count] of numC.entries()){
        if(count >= 2){
            const fi =  numFI.get(num);
            const li =  numSI.get(num);
            sum += Math.abs(fi-li);
        }
    
    }
    return sum;
}
let a = [1,2,3,2,3];
console.log(SumOfAbsoluteDifferences(a));