/* 
CASE 1 Explanation

When we run the given loop,we see that hello would be printed 100000 times first and only after that the console within the setTimeout 
gets printed.Also the fact that if it did take 10 seconds to run the for loop and to print "hello" 100000 times then the first 10 "inside setTimout" 
would be printed suddenly and after that it would print after 1 sec each.This is due to the fact that after the setTimeOut was completed for 
first few,they were pushed to the event loop and it waited till the call stack was empty (printing hello 100000 times), and only after that 
"inside setTimeout started to print".

Just run the code in the browser console for clarity.
*/

// CASE 1
for (let i = 1; i <= 100000; i++) {
    setTimeout(function() { console.log('inside setTimout',i); }, 1000*i);     // 1 2 3 4 5    
    console.log('hello');
}
