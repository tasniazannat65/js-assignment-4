function totalFine( fare ) {
          // You have to write your code here
          let ticketPrice = fare;
          let serviceCharge = 30;
          if(fare <= 0 || typeof fare !== 'number'){
            return "Invalid";
          }
          else{
            const fine = ticketPrice + ticketPrice * (20 / 100) + serviceCharge;
            return fine;
          }

}

function  onlyCharacter( str ) {
          // You have to write your code here
          let string = str;
          if(typeof str !== 'string'){
            return "Invalid";
          }
          else{
            string =  str.toUpperCase().split(' ').join('');
            return string;
          }
}

function  bestTeam( player1, player2 ) {
          // You have to write your code here
          let team1 = player1.foul + player1.cardY + player1.cardR;
          let team2 = player2.foul + player2.cardY + player2.cardR;
          if(typeof player1 !== 'object' || typeof player2 !== 'object'){
            return "Invalid";
          }
          else if(team1 < team2){
            return player1.name;
          }
          else if(team2 < team1){
            return player2.name;
          }
          else{
            return "Tie";
          }

        
}

function  isSame(arr1 , arr2 ) {
          // You have to write your code here
          let array1 = arr1.length;
          let array2 = arr2.length;
          if(Array.isArray(arr1) === false || Array.isArray(arr2) === false){
            return "Invalid";
          }

          if(array1 !== array2){
            return false;
          }

          for(let i = 0; i < arr1.length; i++){
            if(arr1[i] !== arr2[i]){
                return false;
                
            }
          }
          return true;
}

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