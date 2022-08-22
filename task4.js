function addKeyAndValue(arr, key, value) {
   arr.forEach(function(val) {
     val[key] = value;
   })
   
   return arr;
 }
 
 console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'))