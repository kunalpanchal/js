// Filter duplicates from an array

['a','b','a'].filter((val, i, arr) => arr.indexOf(val) == i);   // ['a','b']
