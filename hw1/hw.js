var x = []
x.push('coding', 'dojo', 'rocks')
x.pop()
console.log(x)
/* ************************* */
const y = []
console.log(y)
y.push(88)
/* ************************ */
var z = [9, 10, 6, 5, -1, 20, 13, 2]
for (i = 0; i < arr.length; i++){
    console.log(z[i]);
}
for (i = 0; i < arr.length-1; i++){
    console.log(z[i]);
}
/* ********************** */
var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']
for (i = 0; i < arr.length; i++){
    console.log(names[i]);
}
for (i = 0; i < arr.length; i++){
    if(arr[i].length> 5){
        console.log(names[i]);
    }
}
/* ********************** */
function yell(string){
    return string.toUpperCase();
}
yell("Hello darkness my old friend")