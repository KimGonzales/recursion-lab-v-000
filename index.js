function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

// function reverseString(myString) {
//  return myString.split("").reverse().join("");
// }

// function reverseString(str){
//   var reversed = "";
//   for (let i = str.length - 1; i >=0; i--){
//     reversed += str[i];
//   }
//   return reversed;
// }

function reverseString(str){
  if (str === ""){
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0)
  }
}

