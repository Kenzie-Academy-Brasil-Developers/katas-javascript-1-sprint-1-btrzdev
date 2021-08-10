
function oneThroughTwenty() {
    let result1= [];

    for (let counter = 1; counter <= 20; counter++) {
       result1.push(counter);
    }
    return result1;   
    };
    oneThroughTwenty();


   function evensToTwenty() {
   let result2 = [];
   
   for (let counter = 1; counter <=20; counter++) {
         if (counter % 2 === 0){
         result2.push(counter);
   }
         
   };
   return result2; 
   
}
   evensToTwenty();

   
function oddsToTwenty() {
   let result3 = [];
   
   for (let counter = 1; counter <=20; counter++) {
         if (counter % 2 === 1){
         result3.push(counter);
   }
            
   };
   return result3;
}
   oddsToTwenty();



function multiplesOfFive() {    
   let result4 = [];
   
   for (let counter = 5; counter <=100; counter++) {
         if (counter % 5 === 0){
         result4.push(counter);
   }
          
   };
   return result4; 
}
   multiplesOfFive();



function squareNumbers() {
   let result5 = [];
   
   for (let counter = 1; counter <=100; counter++) {
         if (Number.isInteger(Math.sqrt(counter)) == true){
         result5.push(counter);
   }
          
   };
   return result5;  
}
   squareNumbers();


function countingBackwards() {
   let resultado6= [];  
   for (let counter = 20; counter >= 1; counter--) {
      resultado6.push(counter);
   }
   return resultado6;  
   };
   countingBackwards();



function evenNumbersBackwards() {
   let resultado7 = [];  
   for (let counter = 20; counter >= 1; counter--) {
      if(counter % 2 === 0){
      resultado7.push(counter);
   }
   
} 
return resultado7;
   };
   evenNumbersBackwards();
   



function oddNumbersBackwards() {
   let resultado8= [];  
   for (let counter = 20; counter >= 1; counter--) {
      if(counter % 2 ===1){
      resultado8.push(counter);
   }
   
} 
return resultado8; 
   };
   oddNumbersBackwards(); 




function multiplesOfFiveBackwards() {
   let resultado9 = [];  
   for (let counter = 100; counter >= 1; counter--) {
      if(counter % 5 === 0){
      resultado9.push(counter);
   }
}
return resultado9;  
   };
   multiplesOfFiveBackwards();  



 
function squareNumbersBackwards() {
   let result10 = [];
   
   for (let counter = 100; counter >=1; counter--) {
         if (Number.isInteger(Math.sqrt(counter)) == true){
         result10.push(counter);
   }           
   }
   return result10; 
};
   squareNumbersBackwards();














    








