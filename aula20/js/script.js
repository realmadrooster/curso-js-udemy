function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = [];
    const pessoa ={};
/*
    form.onsubmit = function(evento){
        evento.preventDefault();//impedi o navegador de executar o comportammento padrao como nesse caso atualizar a cada vez que o botao enviar é pressionado
        alert('galooooo')
        console.log("campeao mundial")
    };
*/  

    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        console.log(pessoas);

        pessoas.push({
            nome:nome.value,sobrenome: sobrenome.value,peso:peso.value,altura:altura.value 
        });
        console.log(pessoas);
        resultado.innerHTML +=`<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
        }
        
        form.addEventListener('submit',recebeEventoForm);
    }
    

meuEscopo();