
const lists = document.querySelector('.list-items')
console.log(lists);

function childclicks(e){
    console.log(e);
    console.log(e.target.innerText);
   
    if(e.target.innerText === "Snacks"){
        e.target.classList.toggle('li1')
    }else if(e.target.innerText === "Kebabs"){
        e.target.classList.toggle('li2')
    }else if(e.target.innerText === "Tandoori"){
        e.target.classList.toggle('li3')
    }else {
        e.target.classList.toggle('li4')
    }

}



lists.addEventListener('click', childclicks);


const boxmodel = document.querySelector('.root');
const conslog = document.querySelector('.console')
console.log(boxmodel);


boxmodel.addEventListener('click', (e)=>{
    //console.log(e.target);

    console.log(`you click on ${e.target.className}`);
    conslog.innerText = `you click on ${e.target.className}`;
})