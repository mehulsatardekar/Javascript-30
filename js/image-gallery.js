let images = document.getElementsByClassName('panel');

console.log(images);


Array.from(images).map(image => image.addEventListener('click',()=>{
    console.log('works fine mate');
    image.classList.toggle('addflex');  
}))

// images[0].addEventListener('click',()=>{
    
//     images[0].classList.toggle('addflex')

// })