
const endpoint="https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities=[];


const result = fetch(endpoint)
.then(data => data.json())
.then(data => cities.push(...data));
    // we could do the cities = data if it's not const type


function findcities(cityTofind,cities){
      
        // reges to search the word -g means find globally and i means for case sensitive
      const cityregex = new RegExp(cityTofind,'gi'); 
        
      return cities.filter(cities => {
          
          return cities.city.match(cityregex)
        })

}

function getinputvalue(){

    const value = this.value;
    if(value){
  const addcities = document.getElementById('citycard');
  let res =  findcities(value, cities)
 
 const city = res.map(data => {
     return `<li class="listofcity">
       <span class="cityname"> ${data.city} <span>,
       <span class="population"> ${data.population} <span>
     </li>`
  }).join('')

  addcities.innerHTML= city;
    }
   

}



let findcity = document.getElementById('findcity')


findcity.addEventListener('change',getinputvalue)
