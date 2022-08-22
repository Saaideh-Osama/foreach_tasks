

var arr=[]
let names=["jack","slim","jamal","rocky"]
names.forEach((n) => {
    var st1= n[0]; 
    var st2=n[n.length-1];
    var stgroup=st1+st2; 
    arr.unshift(stgroup)
})
console.log(arr)