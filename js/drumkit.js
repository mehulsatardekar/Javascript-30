window.addEventListener('keyup',(e)=>{

    console.log(e);
    let audiosong = document.querySelector(`audio[data-id="${e.keyCode}"]`);
    let audioclass = document.querySelector(`div[data-id="${e.keyCode}"]`);
    console.log(e.key);
   
    console.log(audiosong);

    console.log(audioclass);

    if(audiosong){ audiosong.currentTime=0; audiosong.play();}
     else console.log('not supported for this key');


     audioclass.classList.toggle('play')

},)