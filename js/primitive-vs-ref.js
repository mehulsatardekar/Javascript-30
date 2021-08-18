// Primitive datatype = number string boolean symbol undefined null
//check the ref of this post for better understanding :=
// https://stackoverflow.com/questions/23436437/why-can-i-change-a-constant-object-in-javascript


// reference type = function object array

let a =2;
let b=a;

console.log(a,b); // a's value get copied into b .

a=3;
console.log(a,b); // b's value get change hence they are primitive so no changes in b.


let fname = "alex";
let lname = fname;

console.log(fname, lname);

fname = "peter";
console.log(fname,lname);



// coming to reference type

let arr = [2,33,44];
let newarr = arr;

console.log(arr,newarr);

arr[0] =222; 
// so arrays are reference type hence they are pointing to same location and we made 
// changes in arr and arr and newarr is pointing to arr so whatever changes made in arr it will
// reflect in newarr
console.log(arr,newarr); //[222,33,44]  [222,33,44]

// so how to fix this 

const one = ["alex","michelle","scott","ryan"];

const two = one.slice(); // we can do this using same concat and spread  and Arrya.from

//  const rom = [].concat(one);

// const rom2 = [...one];

//const rom3 = Array.from(one)
// slice create a new array and old array gets untouched even if we made changes in old one 

console.log(one , two);

one[0] ="romeo"
// this way we can make change into array without doing modification

console.log(one,two);

const user ={
    name:'alex',
    age:22,
    location:["bali","vietnam"]
}

//console.log(user.location[1]);

const newuser = user;
//user = user.hometown ="usa" // this will throw an error when we have const object and we ressigning
// with the assignment operator   

user.hometown = "usa" // what but how we manage to do that, how we manage to add property when obj is constant
// 1] object here is constant not a read only (both are different)
// 2] we can make it object read-only using object.freeze to make property also immutable

console.log(user, newuser);


// how to make copy of that object

const userinfo ={
    name:"sejal",
    age:29
}

const copyOfuserinfo = {...userinfo} //using spread operator

console.log(copyOfuserinfo , userinfo);

userinfo.hometown ="mumbai"; // it will not modify copyOfuserinfo 

console.log(copyOfuserinfo , userinfo); 

// another way is Object.assign 

let newusers = Object.assign({}, userinfo, {lname:"surve"})

console.log(newusers);

// for low level deep copy use helper functions of loadash (cloneDeep)

// above code will do only one level deep means suppose what we have object like this 

// it will add one level deep on name and age propert only not on workingfrom
const emp ={
    name:"mehul",
    age:23,
    workingfrom:{
        india:'mumbai',
        usa:'NY',
        germany : 'berlin'
    }

}

//const newemp = Object.assign({}, emp , {lname:'satardekar'}) 

const newemp = {...emp}
console.log(emp, newemp);
 
newemp.workingfrom.india="delhi"; // it made changes in original objects too so we have to do clone deep


console.log( emp, newemp);


// not a recommended way it might give some performance issue 

const deepcopy = JSON.parse(JSON.stringify(emp))
// here object get converted first into string using stringify and converted back to object 

deepcopy.workingfrom.india="aurangabad";

console.log(emp , newemp , deepcopy);