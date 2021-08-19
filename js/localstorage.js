const btnsubmit = document.querySelector('.btn-submit')
const dishlist = document.querySelector('.dish-list');
const input_dish = document.querySelector('#add-dish');

console.log(input_dish);

const dishesh = JSON.parse( localStorage.getItem('dishlists')) || []; // if dishlist is empty its going to fall down to empty array

function dishadd(){
const name = input_dish.value
   const dish ={
    text:name
    }

   dishesh.push(dish);
   localStorage.setItem('dishlists', JSON.stringify(dishesh));
   load_dishesh()
   input_dish.value=""

}


btnsubmit.addEventListener('click',dishadd)

function load_dishesh(){
    dishlist.innerHTML = dishesh.map(dish => {
        return `<li>${ dish.text }</li>` 
      }).join('')
}

load_dishesh()