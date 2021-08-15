let checkboxes = document.querySelectorAll('input[type =checkbox]')
console.log(checkboxes)


let lastchecked;
function checkme(e) {
    console.log(e.ctrlKey);
   
    let between = false;
    //selecting elements with ctrl is press while selecting
    if (e.ctrlKey && this.checked) {
     
      checkboxes.forEach(checkbox => {
        console.log(checkbox);
        if (checkbox === this || checkbox === lastchecked) {
          between = !between;
          console.log('checking started');
        }
  
        if (between) {
          checkbox.checked = true;
        }
      });
    }
  
    lastchecked = this;
  }
  
checkboxes.forEach(checkbox =>{
    checkbox.addEventListener('click',checkme)})