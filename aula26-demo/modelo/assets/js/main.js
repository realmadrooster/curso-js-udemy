

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
    const inputPeso = e.target.querySelector('#peso');
    const inputaltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputaltura.value);
    
    if (!peso){
        setResultado('Peso invalido',false);
        return;
    }
    if (!altura){
        setResultado('Altura invalida',false);
        return;
    }
    
    const imc = getImc(peso,altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`; 

    setResultado(msg,true);
});

function getNivelImc(imc){
    const nivel =['Abaixo do peso','Peso Normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3'];
//como o return para o fluxo da funçao nao preciso de else if, como o if so possui uma instruçao nao preciso das chaves
    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];    
}

function getImc(peso,altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);;
}

function criaP(className){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector
    ('#resultado');
    resultado.innerHTML = '';
    
    const p = criaP();
    
    if (isValid){
        p.classList.add('paragrafo-resultado');
    }else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p)
}