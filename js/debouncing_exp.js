const adder = document.querySelector('#adder_cnt');
const remove_cnt = document.querySelector('#remove_cnt');
const textarea = document.querySelector('#text-info-adder');
const optext = document.querySelector('#text-op')


adder.addEventListener('click', debounce)

// dobouncing
function debounce(){

  let timer;
  if(timer){
    clearInterval(timer)
  }
  
   timer = setInterval(()=>{
    optext.innerHTML = textarea.value;
  } ,5000)

 
}
