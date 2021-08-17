console.log("works");

let video = document.querySelector('#videoplayer')
let play = document.querySelector('#play');
let volume = document.querySelector('#volume');
let fullScreen = document.querySelector('#full-screen') 
let forward = document.querySelector('#forward');
let backward = document.querySelector('#backward');
const progressBar = document.querySelector('  .progress-bar');
const watchedBar = document.querySelector(' .progress-bar .watched-bar');

console.log(watchedBar);
watchedBar.style.width = '0px';

function volumeAndMute(){

    video.muted = !video.muted;
    if(video.muted){
        volume.src='../icons/volume-x.svg'
    }else{
        volume.src='../icons/volume-2.svg'
    }
   
}
function tooglePlay(){
    if(video.paused){
        video.play();
        play.src='../icons/pause.svg'
    }else{
        video.pause();
        play.src='../icons/play.svg'
    }
}

function toogleFullScreen(){
  if(!document.fullscreenElement){
     video.requestFullscreen()
     fullScreen.src= '../icons/maximize.svg'
  }else {
    document.exitFullscreen();
    fullScreen.src = '../icons/minimize.svg'
  }
}



play.addEventListener('click', tooglePlay)
volume.addEventListener('click', volumeAndMute)
fullScreen.addEventListener('click', toogleFullScreen)
// video.addEventListener('timeupdate',()=>{
//     let percentage = (video.currentTime /video.duration) *100;    
//     progressBar.value= percentage

// })

video.addEventListener('timeupdate', () => {
    watchedBar.style.width = ((video.currentTime / video.duration) * 100) + '%';
    // TODO: calculate hours as well...
    const totalSecondsRemaining = video.duration - video.currentTime;
    const time = new Date(null);
    time.setSeconds(totalSecondsRemaining);
    let hours = null;
  
    if(totalSecondsRemaining >= 3600) {
      hours = (time.getHours().toString()).padStart('2', '0');
    }
  
    let minutes = (time.getMinutes().toString()).padStart('2', '0');
    let seconds = (time.getSeconds().toString()).padStart('2', '0');
  
    timeLeft.textContent = `${hours ? hours : '00'}:${minutes}:${seconds}`;
  });

progressBar.addEventListener('click', (event) => {
    const pos = (event.pageX  - (progressBar.offsetLeft + progressBar.offsetParent.offsetLeft)) / progressBar.offsetWidth;
    video.currentTime = pos * video.duration;
  });

forward.addEventListener('click',()=>{
    console.log("clicking");
    video.currentTime +=10;
    
})

backward.addEventListener('click',()=>{
    console.log("clicking");
    video.currentTime -=10;
})


console.log(video);
