// The second argument/parameter is expected to be a function
function findWaldo(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        var waldoLocation = 0;
        if (arr[i] === "Waldo") {
            waldoLocation = i;
            callback(waldoLocation);   // execute callback
      }
    }
  }
  
  function actionWhenFound(i) {
    console.log("waldo is at " + i);

   
  }
  
  findWaldo(["Alice", "Waldo", "Bart", "Winston"], actionWhenFound);