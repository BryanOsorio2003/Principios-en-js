const name1 = document.querySelector('#name');
const age1 = document.querySelector('#age');
const button_primary = document.querySelector('#btn-primary');
const response = document.querySelector('#p-response');


button_primary.addEventListener('click',calculating_response);

function calculating_response (){

    if (parseInt(age1.value) >=18){
        response.textContent = name1.value +  ' SI PUEDE VOTAR';
    }
    else{
        response.textContent = name1.value + ' NO PUEDE VOTAR MMGV';
    }
}
