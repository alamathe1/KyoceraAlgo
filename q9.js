function findDuplicates(data) {

  var counter = 0;
  if(data.length>1000) return;
  
  for(var i=0;i<data.length;i++){
    if(data[i]>1000) return;
    if(data.indexOf(data[i])!==i){
      counter++;
    }
  }
  return counter;
}

//findDuplicates([8,1,3,1,4,5,6,3,2]);