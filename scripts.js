
document.addEventListener('DOMContentLoaded', e=>{


    const clean =/<[^>]+>|&\w+|[.;:,#"()]|x\d+|\n/g;
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
            result.replace(clean, "");
;        })


 
    })


    






})//End of DOMContentLoaded