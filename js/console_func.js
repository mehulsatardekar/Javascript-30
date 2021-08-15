
let names = [{name:'alex',age:12},{name:'alex',age:22},{name:'simran',age:13}]

//log
console.log("it works");


//error
console.error('oops we got an error')


//table
console.table(names)


// warning
console.warn("oops you've got an warning not to worry about")


//info  -- note that this might not works in update browsers
console.info("this is an info");


// clear  -- clear the console
console.clear()


//interpolation  (means adding) .
console.log('this is ','mehul', 'ok' , 'alright man'); 
   // or better use template literals


console.log(`this is ${names[0].name} and age his is ${names[0].age} `)


// styling 
// for adding style prefix %c in string
console.log("%c hey its styled context",'color:red; font-size:23px;')


// assertion only fires when it is wrong and shows bool value based on results
console.log(1===2,"really");


//viewing doms elements
console.log(window) // note that in node environment there no thing such window
console.dir(window) // act as directory

//grouping 

names.forEach(names =>{
    console.group(`${names.name}`);
    console.log(`this is ${names.name} and his age is ${names.age * 2}`);
    console.groupEnd(`${names.name}`);
})

//count
//simple exp
console.count("its me")
console.count("its me")
console.count("its mes")
console.count("its me")

//with an array exp
names.forEach( name => { console.count(name.name) })


//timing -- it counts the how much time it tooks for an action

// exp with function

console.time('func');
const me =  me => console.log("hello mehul")

console.log(me);
console.timeEnd('func');

// exp with fetch api 
console.log("fetching time took for api is");

const url = 'https://api.github.com/users/mehulsatardekar'

console.time('fetching')
fetch(url)
 .then( (data)=>{
   data.json();
  })
 .then((data)=>{
   console.timeEnd('fetching');
   console.log(data);
})

