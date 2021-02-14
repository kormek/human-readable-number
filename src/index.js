module.exports = function toReadable (number) {
    number = number.toString();
    number = number.split('');
  let numbers = {
      0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine",10:"ten",11:"eleven",
      12:"twelve",13:"thirteen",14:"fourteen",15:"fifteen",16:"sixteen",17:"seventeen",18:"eighteen",19:"nineteen",
      20:"twenty",30:"thirty",40:"forty",50:"fifty",60:"sixty",70:"seventy",80:"eighty",90:"ninety",100:"one hundred",
      200:"two hundred",300:"three hundred",400:"four hundred",500:"five hundred",600:"six hundred",700:"seven hundred",
      800:"eight hundred",900:"nine hundred"
  };
  let word ="";
    if(number.length == 1) word+=numbers[parseInt(number[0])];
    if(number.length == 2){
        if(number[0] == 1) {
            word+=number[0];
            word+=number[1];
            word = numbers[parseInt(word)];
        } else {
            word+=numbers[parseInt(number[0]+"0")];
            if(number[1]!=0){ word+=" ";
            word+=numbers[parseInt(number[1])];}
           
        }
    }
    if(number.length == 3){
        word+=numbers[parseInt(number[0]+"00")];
        if(number[1] == 1) {
            word+=" ";
           
            word+= numbers[parseInt(number[1]+number[2])];
        } else {
            
            if(number[1]!=0){word+=" ";word+=numbers[parseInt(number[1]+"0")] ;}
            
            if(number[2] != 0){
                word+=" ";
                word+=numbers[parseInt(number[2])];
            }
            
        }
    }
    return word;
}
