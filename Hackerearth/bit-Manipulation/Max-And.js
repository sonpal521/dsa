function maxAnd(a,b,n){
    /*    a.sort();
       b.sort();
       let c = [];
       for(let i=0;i<n;i++){
          let d = a[i]&b[i];
          c.push(d);
       }
       let max = c[0];
       for(let i=1;i<c.length;i++){
       
         max = max & c[i];
       }
       return max; */
        a.sort((x, y) => x - y);
            b.sort((x, y) => x - y);
    
            let c = [];
            c.push(a[0] & b[0]);
    
            for (let j = 1; j < n; j++) {
                c.push(a[j] & b[j] & c[j - 1]);
            }
    
            return (c[c.length - 1]);
        
    
    
    }
    let a = [3,2];
    let b =[ 2,3];
    let n = 2;
    console.log(maxAnd(a,b,n));