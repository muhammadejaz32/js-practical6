let string1 = "hello world ";
//REMOVING SPACES
console.log("string after removing the spaces =>  " +string1.trim());

//SUBSTRING
console.log("the substring  =>  " +string1.substring(5,10));

//FIRST 5 CHARACTER
console.log("first 5 character =>  " +string1.slice(0,6));

let string2 = "hello-world";
//CONVERTING INTO ARRAY
console.log("converting into array =>  "+ string2.split("-"))

//join the array 

let var3 = ["hello","world"];
console.log("converting array  to string "+var3.join(" "));


//FINDING INDEX OF O
console.log("index of O is =>  " +string2.indexOf("o"));


let string3 ="hello world world";
//FINDING LAST INDEX 
console.log("last index of world =>  " +string3.lastIndexOf("world"));


let string4 = "world";
//STRING START WITH 
console.log("start with wor =>  " +string4.startsWith("wor"));

let string5 = "hello world"
//STRING END WITH
console.log("ends with world  =>  " +string5.endsWith("world"));

//STRING INCLUDE 
console.log("includes the O =>  " +string5.includes("o"));