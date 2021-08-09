const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
 const ages1 = [2,44,1,55,6,77,8,9,0,100];
// foreach map filter sort reduce

// foreach
// show all companies employee name

  companies.forEach(comapany=> console.table(comapany.name))

//map (it create new array instead of touching the original one)  
// list out all information of comapnies have

 const company = companies.map(company => console.table(company));

// append first  blue star name  to companies name 

  const companyname = companies.map(company => `Blue star ${company.name} ` )

// console.log(companyname);

// multiple the ages by 2 and whos's ages are greater than 50 include it

 const agesAboveFifty= ages1.map(age => age * 2).filter(age => age>50);

// console.log(agesAboveFifty);


 const splitname = companies.map(company => company.name.split(' '))

// console.log(splitname);



//filter 
// used to filter out the data 
 
// print all customer name where category is technology .

  const category = companies.filter( (company) => company.category ==='Auto' ? company : false );

//   console.log(category);

//get all 1980 companies

 const company = companies.filter(company => (company.start > 1980 && company.start < 1990 ) ? true : false)

// console.log(company);

// companies have been there for 10 or more years 

 const yearsofcompanies = companies.filter(company => (company.end - company.start >= 10) ?  true : false)

// console.log(yearsofcompanies)


//sort 

//sort the ages

  const sortedages = ages.sort((a,b) => (a>b)? -1 : 1) 
 // or
  const sortedages = ages.sort((a,b) => a-b)  // asc order and for desc b-a


// console.log(sortedages);

 // sort by category of comp
  const compsort = companies.sort((a,b)=>(a.category > b.category)? 1: -1 )
// console.log(compsort); 


// reduce

//count the category of companies by grouping them;

const categoryCounter = companies.reduce( (obj,item)=> {

     if(!obj[item.category]){
         obj[item.category]=0
     }

    obj[item.category]++;
    return obj;
  
},{})

console.log(categoryCounter);

// sum of number

const nums = [2,5,10,55];

const sumofnums = nums.reduce( (accum,num) => { accum+=num; return accum },0)

console.log(sumofnums);