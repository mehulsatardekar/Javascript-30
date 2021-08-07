let hours = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

function Setdata(){
    
const date = new Date();
const[hour,minute,second] = [date.getHours(),date.getMinutes(),date.getSeconds()]

  
   hours.innerHTML = parseInt(hour/2);
   minutes.innerText = minute;
   seconds.innerHTML = second;

   console.log(second);
}


setInterval(Setdata,1000)