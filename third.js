let string = "Uditi";
for(let i of string)
    {console.log("i=",i);}
// for-of loop ; i=iterator; used for strings and arrays
// for loop without initialisation and inc cond


const profile= {
    username: "uditi"+ "03" ,
    title : "Uditi Raymangia",
    isOfficial: false,
    posts: 0,
    followers: 450,
    following: 400,
    isX: false,
    profession: "Student",
    qalifications: "Apna College| ex-Microsoft| DRDO" ,
    bio: "To educate someone is the highest privellege",


};
for(let i in profile ) //i returns the keys in object
{console.log("key=",i, "value=", profile[i]);}
// used for objects

let output= `this is the profile of ${profile["username"]} and their followers count is ${profile.followers}`; 
//template literal=way of embedding expressions in strings; cleaner way to write; keys become a part of string so not highlighted as it would have if used directly in console.log 
//also called String Interpolation= to create strings by doing substitution of placeholders(variables)
//first value is calculated inside curly brackets of placeholder and that comes out of the brackets
//can do math operation inside the brackets.
console.log(output); 

// \n and \t are escape characters


let stringMethod='Uditi Raymangia'
console.log(stringMethod.toUpperCase()); //everything changed to capitals //original string not changed
console.log(stringMethod);//same as original. 
console.log(stringMethod.toLowerCase());
let stringMethod2= "   Uditi  ";
console.log(stringMethod2.trim()); //trims start and end spaces

