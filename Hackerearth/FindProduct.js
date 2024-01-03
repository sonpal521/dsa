function findProduct(arr,n){
    let product = 1;
    for(let i= 0;i<n;i++){
        product *= arr[i];

    }
    return product;

}
let arr = [1,2,3,4,5];
let n = 5;
console.log(findProduct(arr,n));


function product(n, a) {
    const x = Math.pow(10, 9) + 7;
    let res = 1;
    for (let i = 0; i < n; i++) {
      res = (res * (a[i] % x)) % x;
    }
    return res;
  }
   
  function main(input) {
    var input_ = input.trim().split('\n');
   
    var idx_ = 0;
   
    var n = parseInt(input_[idx_++].trim(), 10);
    var a = input_[idx_++].trim().split(" ").map(function (el) {
      return parseInt(el, 10);
    });
   
    var out_ = product(n, a);
    process.stdout.write(out_.toString());
  }
   
  process.stdin.resume();
  process.stdin.setEncoding("utf-8");
  var stdin_input = "";
   
  process.stdin.on("data", function (input) {
    stdin_input += input; // Reading input from STDIN
  });
   
  process.stdin.on("end", function () {
    main(stdin_input); // Call the main function with the collected input
  });