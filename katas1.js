
function oneThroughTwenty() {
    let resultado1= [];

    for (let counter = 1; counter <= 20; counter++) {
       resultado1.push(counter);
    }
    return resultado1;   
    };
    oneThroughTwenty();




function evensToTwenty() {  
   let num = 0; 
      while(num <= 20) {
      if ((num % 2 === 0)) {
         console.log(num)       
      }
      num++;
   }  
   }; 
   evensToTwenty();





function oddsToTwenty() {
   let num = 0; 
      while(num <= 20) {
      if ((num % 2 === 1)) {
         console.log(num)       
      }
      num++;
   }  
   }; 
   oddsToTwenty();




function multiplesOfFive() {    
    let num = 5; 
    while(num <= 100) {
      if ((num % 5 === 0)) {
        console.log(num)       
      }
     num++;
   }  
  }; 
   multiplesOfFive();




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




function countingBackwards() {
   let resultado= [];  
   for (let counter = 20; counter >= 1; counter--) {
      resultado.push(counter);
   }
   return resultado;  
   };
   countingBackwards();




function evenNumbersBackwards() {
   let num = 20; 
   while(num >= 1) {
     if ((num % 2 === 0)) {
       console.log(num)       
     }
    num--;
  }  
 }; 
   evenNumbersBackwards();
   



function oddNumbersBackwards() {
   let num = 20; 
   while(num >= 1) {
      if ((num % 2 === 1)) {
         console.log(num)       
      }
      num--;
   }  
   };
   oddNumbersBackwards(); 




function multiplesOfFiveBackwards() {
   let num = 100; 
   while(num >= 5) {
      if ((num % 5 === 0)) {
         console.log(num)       
      }
      num--;
   }  
   };
   multiplesOfFiveBackwards();  



 
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




















    








