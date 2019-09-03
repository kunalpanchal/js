//This function will promisify any error-first callback.

function promise_wrapper(func){
   // checks type of func
   if(typeof func !== 'function'){
       throw new Error('argument should be function only.');
   }
   
   // create an wrapper for corresponding func which is promisified version.
   
   const asyncFunction = function(){
       return new Promise((resolve,reject)=>{
       
            args = Array.from(arguments);
            
            // append the callback function which supposed to call at the end asynchronous operation of func
            args.push(function(){
               let arr = Array.from(arguments);
                if(arr[0]){
                    reject(arr[0]);
                }else{
                   sliced_args = arr.slice(1);
                   /*
                    returns parameters received from func. I am returning it as an array but can convert it as you want.
                   */
                   resolve(sliced_args.length ? (sliced_args.length===1 ? sliced_args[0] : sliced_args) : []);
                }
           });
           func.apply(func,args)
       });
   };
   return asyncFunction;
}


Usage:- 

function callback_function1(value,callback){
  console.log(value);
  callback(null,value);
}

let promisified_func = promise_wrapper(callback_function1);
promisified_func(10).then(function(value){
  console.log(value);
})


function callback_function2(value,value1,callback){
  console.log(value);
  callback(null,value,value2);
}

let promisified_func2 = promise_wrapper(callback_function2);
promisified_func2(10).then(function(values){
  console.log(values);
});
