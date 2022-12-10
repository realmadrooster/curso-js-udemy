

/*
function calcular(){  
    let res = document.querySelector('#resultado');
    let peso = document.querySelector('.inppeso');
    let altura = document.querySelector('.inpaltura');
    let npeso = peso.value;
    let naltura = altura.value;
    let IMC = npeso / (naltura * naltura);

    
    if (IMC < 18.5){
        res.innerHTML = `o IMC é: ${IMC} (Abaixo do peso)`;
    }else if(IMC >= 18.5 && IMC < 24.9){
        res.innerHTML = `O IMC é: ${IMC} (Peso normal)`;
    }else if(IMC >=25 && IMC <=29.9){
        res.innerHTML = `O IMC é: ${IMC} (Obesidade grau 1)`;

    }else if(IMC >= 30 && IMC <= 34.9){
        res.innerHTML = `O IMC é: ${IMC} (Obesidade grau 2)`;

    }else{
        res.innerHTML = `O IMC é: ${IMC} (Obesidade grau 3)`;
    }
    
}
*/

//capturar evento de submit do formulario
const form = document.querySelector('#formulario');

form.addEventListener('submit',function(e) {
    e.preventDefault();
    console.log('evento previnido');
})