//question 1
var x = "123";
console.log(Number(x) + 7);

//question 2
function isFalsy(value){
    if(
        value === "" ||
        value === undefined ||
        value === 0 ||
        value === null ||
        value === false
    ){
        console.log("invalid");

    }else{
        console.log("valid");

    }
}
isFalsy();

//question 3
for(let i = 1; i<=10; i++){
    if(i%2==0){
        continue;
    }
    console.log(i)
}

//question 4
let arr = [1,2,3,4,5,6,7,8,9]
let filter = arr.filter((ele)=>{
    if(ele % 2 == 0){
        return ele
    }
})
console.log(filter)

//question 5
let arr1 = [10,20,30]
let arr2 = [40,50,60]
let arr3 = [...arr1 , ...arr2]
console.log(arr3)

//question 6
let key = 2;
switch(key){
    case 1 : console.log("saturday")
    break;
    case 2 : console.log("sunday")
    break;
    case 3 : console.log("monday")
    break;
    case 4 : console.log("tuesday")
    break;
    case 5 : console.log("wednesday")
    break;
    case 6 : console.log("thursday")
    break;
    case 7 : console.log("friday")
    break;
    default:
        console.log("error ya bro")
}

//question 7
let names = ["hazem" , "ali" , "amin"]
let nameLengthArray = names.map((ele)=>{
    return ele.length
})
console.log(nameLengthArray)

//question 8
function isDivisable_53 (value){
    if(value%3==0 && value%5==0){
        return "divisable by both"
    }else{
        return "not divisable by 3 and 5 together"
    }
}
console.log(isDivisable_53(45))

//question 9
let square = (number) =>{
    return number**2
}
console.log(square(5))

//question 10
function destructValues(person){
    const {name , age} = person;
    return `my name is ${name} and my age is ${age}`
}
console.log(destructValues({name:"hazem" , age: 21}))

//11
function sum(...nums){
    total = 0
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
        
    }
    return total
}
console.log(sum(2,3,5));
//question 12 Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade) 
 function returnPromise(){
    return new Promise ((resolve , reject)=>{
        setTimeout(() => {
            resolve("Success")
        }, 3000);
    })
 }
returnPromise().then(
    (result)=>{console.log(result)}
)
//question 13. Write a function to find the largest number in an array. (0.5 Grade)
var myArray = [1,2,3,4,5]
function findLargest(value){
    var s = 0;
    for(let i=0; i<myArray.length; i++){
        if(myArray[i]>s){
            s = myArray[i]
        }
    }
    return s
}
console.log(findLargest(myArray))

//question 14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
function keyFinder(person){
    const {name , address} = person;
    return Object.keys(person)
}
console.log(keyFinder({name:"hazem" , address:"giza"}))

//question 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
function split(value){
    return value.split(" ")
}
console.log(split("dshushd ljscojidc"))



// essay questions ============================================

//question 1 
/*
FOR OF: it works as a reqular for loop but its good feature is in using an element which loop on every element
in the array so we dont have to write arr[i] in for loop to loop on elements in the array 
ex.... for(const ele of arr){console.log(ele)}    (u can use break & continue)
FOR EACH: works on arrays only it seems like map,find,filter its a function taking arrow function as a parameter this arrow function 
taking 3 parameter (ele,index,arr) its main idea is when u want to make a function on array and the result back not in array
as map (u can not use break & continue)
*/

//question 2 
/*
Hoisting: is a javascript behavior of moving declaration of variable at the top of scope (declaration not initialization)
ex: 
consol.log(x)
var x = 5           // undefiend
TDZ : is a time between start of scope and the pont where the variable declared
ex: 
consol.log(x)
const (let) x = 5         // error
*/

//quesion 3
/*
 == : its a compare operation it compare two values without compating datatype
 ex:
 5 == "5" .......true
 === : its a compare operation it compare two values and comparing datatype aswell
 ex:
 5 == "5" .......false
 0 === false ....false

//quesion 4
try and catch is important in async functions which recive results from promis operator
it try the to run the resolve part by try{..} and if it doesnt it go to catch(err){..} which it get from reject
catch prevent function from craches

//question 5
type conversion: is when you want change data type of the value it also means casting
ex: Number("5") five data type changed from string to number
type coercion : it when system convert datatype automatic for mme 
ex: "5" + 1   the result becom 51 as a string by default (concatination)
*/



