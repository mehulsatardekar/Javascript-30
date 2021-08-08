let hours = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let session = document.getElementById('timesession');
let Timesession;
function Setdata(){
    
const date = new Date();
let [hour,minute,second] = [date.getHours(),date.getMinutes(),date.getSeconds()]

  
   if(hour<12){
       Timesession="AM";
    }else{
        hour-=12;
        Timesession="PM";
    }

    
   hours.innerHTML = parseInt(hour);
   minutes.innerText = minute;
   seconds.innerHTML = second;
   session.innerHTML = Timesession;
   console.log(second);
}


setInterval(Setdata,1000)