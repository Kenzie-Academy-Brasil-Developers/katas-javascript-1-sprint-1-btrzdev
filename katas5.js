function squareNumbersBackwards() {
    let num = 1; 
    while(num <= 100) {
      if (Number.isInteger(Math.sqrt(num)) == true){
        console.log(num)       
      }
      num++;
    }
  };
    squareNumbersBackwards();