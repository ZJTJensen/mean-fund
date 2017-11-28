function magic_multiply(x, y){
    // --- your code here ---
    if (typeof y === "string"){
        return "can not multiply by string"
    }
    if (typeof x ==="string" && (typeof y != "string" && y.constructor != Array)){
        arr = [];
        for (i = 0; i < y; i ++)
        arr.push(x);

        return arr;
    }
    if ((x.constructor != Array && y.constructor != Array)|| (x == 0 || y == 0)){
        z = x*y;
        return z;
    }

    if (x.constructor == Array){
        for (i=0; i < x.length; i++){
            x[i]=x[i] * y;
        }
        return x;
    }
    if (y.constructor == Array){
        for (i=0; i < y.length; i++){
            y[i]=y[i] * x;
        }
        return y;
    }


    

}
let test1 = magic_multiply(5, 2);
console.log(test1);
let test2 = magic_multiply(0, 0);
console.log(test2);
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
let test4 = magic_multiply(7, "three");
console.log(test4);
let test5 = magic_multiply("Brendo", 4);
console.log(test5);