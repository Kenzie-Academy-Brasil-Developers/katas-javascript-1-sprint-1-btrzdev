function squareNumbersBackwards() {
    let num = 100; 
    while(num >= 0) {
      if (Number.isInteger(Math.sqrt(num)) == true){
        console.log(num)       
      }
      num--;
    }
  };
    squareNumbersBackwards();