
document.addEventListener('DOMContentLoaded', e=>{



    let body = document.querySelector('body');
    let input = document.querySelector('input');
    let div = document.querySelector('div');
    let result;
    const reader = new FileReader();


    input.addEventListener('change', e =>{
        let file = input.files[0];
        
      
        reader.readAsText(file);
        reader.addEventListener('load', e =>{
            result = reader.result;
        })


 
    })


    






})//End of DOMContentLoaded