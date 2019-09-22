## Use spread operator with numbers.

Can we use spread operator with a number so that the output would be an array including numbers start 
from 1 to the number itself ?

Eg: `[...7]` outputs `[1,2,3,4,5,6,7]`

**Hint:** use Symbol.iterator in the number prototype. 

```javascript
Number.prototype[Symbol.iterator] = function* (i=1) {
  while (i < this){
     yield i++;
  }
}
```

Usage: `[…10]`\
Outputs: `[1,2,3,4,5,6,7,8,9,10]`

[Medium Article by Ajit Jain](https://medium.com/@jainajit194/javascript-spread-operator-with-number-datatype-c7407666419)
