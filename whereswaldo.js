// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
    for (var i = 0; i < arr.length; i++) {
        var waldoLocation = 0;
        if (arr[i] === "Waldo") {
            waldoLocation = i;
            found();   // execute callback
      }
    }
  }
  
  function actionWhenFound(waldoLocation) {
    console.log("waldo is at " + waldoLocation);

   
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);