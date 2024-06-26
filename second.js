let a= 10;
let b= 2;
console.log(a**b); //a^b
let c=3;
let d="3";
console.log(c==d); //prints true because js converts string 3 to number first and then compares; to avoid this, we use ===
console.log(c===d); //prints false because here datatype is compared first, theefore doesnt allow string to be compared to number
console.log(c===d?"this is equal condition":"this is equal and type condition");//ternary operator; 3 operands; syntax= condition?output if true:output if false; // compact if-else operator
alert("this is javascript lect 2");//popup//appears everytime page is refreshed  
prompt("do you accept the cookies? y if yes, n if no");// appears everytime page is refreshed; takes input as well
 // prompt always accepts string even if number is typed in, so be careful if using some condition with prompt, don't use === or !== as it wont let number entered by user as string get converted to number

