foo=function(one,two,three){
	console.log(this,one,two,three);
}
context = 4;
foo.call(context,1,2,3);
foo.apply(context,[1,2,3]);
foo.bind(context)(1,2,3);