function findWaldo(arr, callback) {
  var waldoLocation = 0;
  arr.forEach(function(name, i){
    if (name === "Waldo"){
      waldoLocation = i;
      callback(waldoLocation)
    }
  });
}
  
  function actionWhenFound(i) {
    console.log("waldo is at " + i);
  }
  
  findWaldo(["Alice", "Waldo", "Bart", "Winston"], actionWhenFound);