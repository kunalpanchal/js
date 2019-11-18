let foo = function(one,two,three){
	console.log(this,one,two,three);
}

let context = 4;

/* Call (Added in ES3)*/
foo.call(context,1,2,3); //{4} 1 2 3

/* Apply - apply accepts second value as a array (Added in ES3)*/
foo.apply(context,[1,2,3]); // {4} 1 2 3

/* Bind - bind returns a value (Added in ES5)*/
let bindFunc = foo.bind(context);
bindFunc(1,2,3); // {4} 1 2 3
