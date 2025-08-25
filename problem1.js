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
