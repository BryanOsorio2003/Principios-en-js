const name1 = document.querySelector('#name');
const age1 = document.querySelector('#age');
const button_primary = document.querySelector('#btn-primary');
const response = document.querySelector('#p-response');


button_primary.addEventListener('click',calculating_response);
button_primary.addEventListener('click',calculate_negative);
button_primary.addEventListener('click',empty_field);
button_primary.addEventListener('click',excessive_age);

function calculating_response (){

    if (parseInt(age1.value) >=18){
        response.textContent = name1.value +  ' si puede votar.';
    }
    
    else{
        response.textContent = name1.value + ' no puede votar.';
    }
}
function calculate_negative (){
    if (age1.value <0){
        response.textContent = 'El numero es erroneo, por favor indique un valor correcto.';
    }
}
function empty_field(){
    if (age1.value == '')
        response.textContent = 'El campo está vacio, por favor digite el campo.';
}
function excessive_age(){
    if (parseInt(age1.value) >=120){
        response.textContent =   'El individuo ' + name1.value + ' podría haber muerto, por favor verifique su edad.';
    }
}
