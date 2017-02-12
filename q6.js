function mergeString(a,b){
  var res=""
  if(a.length<=25000 || b.length<=25000){
    res = a+b;
  }else{
    throw 'Invaid input parameters';
  }
  return res;
}

//mergeString("abc","def");