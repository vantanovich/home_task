function palinCheck(stroka){

    let repl = /[^a-zA-Z0-9]/gi    
    let lowerCase = stroka.replace(repl, "").toLowerCase(); // Bring all letters to lower case and remove special characters
    
    let revPal = lowerCase.split('').reverse().join(''); //Reversing a strokaing
      
    return(lowerCase === revPal);  // Checking if reversed strokaing is equal to modified strokaing and return results
}


function resultPrint(str){

    console.log(str + " - is " + ((palinCheck(str)) ? "" : "not ") +  "a palindrome"); //prints result into console

}


let str1='Bob';
let str2='Race car';
let str2='kitty is cute';


resultPrint(str1);
resultPrint(str2);
resultPrint(str3);
resultPrint(str4);