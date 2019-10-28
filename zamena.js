function change(stroka,  position, changeStr) {
    if(typeof(position) == "undefined") {
        position = 0;
    }

    if(typeof(changeStr) == "undefined") {
        changeStr = '';
   }

   let wordsStr = stroka.split(' ');
   for (let i = 0; i < wordsStr.length; i++) {
         let   s=wordsStr[i];
         if (s.length<position+1) { 
                continue; 
            } else 
                    {
                    wordsStr[i]=wordsStr[i].slice(0, position) + changeStr + wordsStr[i].slice(position+1);
            } 
    }
    return wordsStr.join(' '); 
}
 
 console.log("Changed string: " + change('O hushed October morning mild, Thy leaves have ripened to the fall', 2, '*test'));