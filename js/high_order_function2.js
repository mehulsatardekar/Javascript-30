const ages = [ 12,33,44,115,99,110];

// some 
// it tests if one element from an array passes the condition it immediately returns true otherwise false

const isAdult = ages.some(age => {
   return (age %2 == 0)? true: false;
   // or 
//    if(age%2 == 0 ){
//        retun true;
//    }  else {
//        return false;
//    }

})

console.log(isAdult);


// every
// if only all elements passes the condition it return true otherwise false

const checkeligible = ages.every(age =>{
    return (age>=19)? true : false;
})

console.log(checkeligible)


// find
// it kinda works as filter but instead of returning of subset of array it return a 1st element of array 

/* so here it went all through the array and we have condition find greater than 33 so we have 44,115,99,110 so
 it returns 1'st element from array */

const findme = ages.find(age => {
    return (age> 33 )? true : false
})

console.log(findme);


// findindex 
// it works same as find but  it returns the 1'st index  insted of element 

const isgreater= ages.findIndex(age =>{
    return (age > 33 )? true :false
})

console.log((isgreater)); // returns the 44th element's index


const findmyindex = ages.findIndex(age =>{
    return (age === 199)? true :false
})

console.log(findmyindex) // it didnt find element in array so returnde -1



// delete the element from array

const delme = ages.findIndex(age =>{
    return (age===12) ? true :false
})

console.log(delme)

ages.splice(delme,2);  //splice takes 2 param first one is starting and last one is ending position

console.table(ages)
