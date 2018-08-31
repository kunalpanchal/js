let arrMerger = (data1, data2) => {
    let data = [];
	  const propertyName='ts'

    let i = 0, j = 0, k = 0;

    while (i < data1.length && j < data2.length) {
        if (data1[i][propertyName] < data2[j][propertyName])
            data[k++] = data1[i++];
        else
            data[k++] = data2[j++];
    }

  // Store remaining elements of array
    while (i < data1.length)
        data[k++] = data1[i++];
    
    while (j < data2.length)
        data[k++] = data2[j++];
    return data;
}

// Merge two array of objects based on a property "ts". 

//Complexity O(n+m).
let d1=[{ts:1},{ts:4}];
let d2=[{ts:3},{ts:5}]
console.log(arrMerger(d1,d2))

//Simple javascript method
console.log(d1.concat(d2).sort((a,b)=>a.ts-b.ts))
