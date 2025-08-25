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
