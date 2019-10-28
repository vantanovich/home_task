function palinCheck(stroka){

    let repl = /[^a-zA-Z0-9]/gi    
    let lowerCase = stroka.replace(repl, "").toLowerCase(); 
    
    let revPal = lowerCase.split('').reverse().join(''); 
      
    return(lowerCase === revPal);  
}


function resultPrint(str){
if (palinCheck(str)) {
    console.log(str + " is " +  "a palindrome"); 
} else console.log(str + " is " +  " not a palindrome"); 

 
}


let s1='Bob';
let s2='Race car';
let s3='kitty is cute';


resultPrint(s1);
resultPrint(s2);
resultPrint(s3);
