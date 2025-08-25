function  resultReport( marks ) {
          // You have to write your code here
         let studentResult = {
            finalScore: 0,
            pass: 0,
            fail: 0

         };
          if(Array.isArray(marks) === false){
            return "Invalid";
          }
          let sum = 0;
         for(n = 0; n < marks.length; n++){
            sum = sum + marks[n];
             

            if(marks[n] >= 40){
               
                studentResult.pass++;

            }
            else{
                studentResult.fail++;
            }
            

         }
         studentResult.finalScore = Math.round(sum / marks.length);
       return studentResult;
}
console.log(resultReport(100))

