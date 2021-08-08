let inputs = document.querySelectorAll('.one input')

function getvalue(){

/* dataset is an object when we add data property along with -anyname 
      that becomes the part of data attribute;
      so we have added data-size="px" so size here becomes they key to the px 
*/
    // console.log(this.dataset);

    // here if we dont add fallback option eg  || ' '  then it will consider as undefined 
    // cause we have added px but while selecting color input it will throw an undefined even if it's throw undefined
    // it will fallback to ' ' so color will append to document without any error;
    let px = this.dataset.size || ' ';
    // console.log(px);


    /* now append the value after getting value from rangebar
    
     to select the css variable we have to select root of the document using documentElement
    */ 

    document.documentElement.style.setProperty(`--${this.name}`, this.value + px)
    console.log(this.value + this.name)
    console.log(this.name);


}

inputs.forEach(input => input.addEventListener('change',getvalue) );
inputs.forEach(input => input.addEventListener('mousemove',getvalue) );





