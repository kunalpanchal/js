// Filter duplicates from an array

['a','b','a'].filter((val, i, arr) => arr.indexOf(val) == i);   // ['a','b']

// Filter duplicates from an array of objects based on its properties
[{a:1,b:2,c:3},{a:1,b:2,c:4},{a:1,b:4,c:3}].filter((ele, i, self) => i === self.findIndex(t => (t.a === ele.a && t.b === ele.b)))
// Expected output [{a:1,b:2,c:3},{a:1,b:4,c:3}]
