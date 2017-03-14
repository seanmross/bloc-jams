
function forEach(array, executeCallback){
  for (var i=0; i<array.length; i++){
    executeCallback(array[i]);
  }
}
