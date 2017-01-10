Solid Waffle Beginner JavaScript Solutions


testStr = "Loops are cool, loops ar fun, till you've done the same thing over, \
and over, and over. But you'd be able to put any string of characters here, and possibly\
even numeric strings, and get the same result?";

function findChar() { 
  var newArr = [ ];
  var i = 0;       //

    while( testStr.length > 0 ) {
       if(testStr [ i ] === " ") {   console.log ("Found a space character!");   } //nested if statement
        if( testStr [i] === "'" ) {  //nested if statement
        break; }  
    i++  //do something, i++ belongs to the while loop, indent accordingly 
    newArr.push( testStr[i] );  //push method belongs to while loop, indent accordingly
    }
return newArr.length;
} 
console.log("Found an apostrophe");   
newArr();




