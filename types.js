let a=[
  `NaN===NaN`,  //false
  `typeof undefined==='undefined'` //true



];

a.forEach((e)=>console.log(e,eval(e)));
