const name1 = document.querySelector('#name');
const date1 = document.querySelector('#date');
const button_primary = document.querySelector('#btn-primary');
/*const response = document.querySelector('#p-response');*/


button_primary.addEventListener('click',calculating_response);
/*button_primary.addEventListener('click',calculate_negative);
button_primary.addEventListener('click',empty_field);
button_primary.addEventListener('click',excessive_age);*/

function calculating_response(){
    let  birthday = date1.value.split('-');
    let current_date = new Date();
    console.log(current_date);
    let year = current_date.getFullYear();
    console.log(year);
    let month = current_date.getMonth();
    console.log(month);

    let day = current_date.getDate();
    console.log(day);

    let result = year - birthday[0];
    console.log(result);
    
    if (result <= 0){
        console.log('Usted es mayor de edad, si puede votar.')
    }
    else{
        console.log('No puede votar');
    }
}

/*
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
}*/
/*let birthday = date_birthdar.valule.split('.'); */
