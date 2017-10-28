/* This explains closures */

// CASE 1 - What happens is by the time setTimeout is executed the value of i is set to 6 and thus 6 times 6 is printed.
for (var i = 1; i <= 5; i++) 
    setTimeout(function() { console.log('case1',i); }, 1000*i);     // 6 6 6 6 6
    
// CASE 2
for (let i = 1; i <= 5; i++) 
    setTimeout(function() { console.log('case2',i); }, 1000*i);     // 1 2 3 4 5

// CASE 3
for (var i = 1; i <= 5; i++)
    setTimeout(function(x) { return function() { console.log('case3',x); }; }(i), 1000*i);  // 1 2 3 4 5
