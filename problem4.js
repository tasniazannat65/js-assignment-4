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
console.log(isSame([2 , 5 , 6] ,256))

