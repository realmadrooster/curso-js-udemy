
function relogio(){
    const relogio = document.querySelector('.relogio');
    // const iniciar = document.querySelector('.iniciar');
    // const pausar = document.querySelector('.pausar');
    // const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }
    //o codigo abaixo faz a mesma coisa que o codigo comentado abaixo, contudo permite que cada evento click seja capturado fazendo referencia a um elemento sem ter que ficar digitando item por item
    document.addEventListener('click', function(evento) {
        const elemento = evento.target;
        if (elemento.classList.contains('zerar')){
            clearInterval(timer);
            relogio.innerHTML='00:00:00';
            relogio.classList.remove('pausado');
            segundos = 0;
        }
        if (elemento.classList.contains('iniciar')){
            relogio.classList.remove('pausado');//remove a classe pausado
            clearInterval(timer);//impede 2 timers simultaneos
            iniciaRelogio();
        }
        if (elemento.classList.contains('pausar')){
            relogio.classList.add('pausado')//adiciona a classe pausado
            clearInterval(timer);//para de executar
        }
    })
    // iniciar.addEventListener('click', function(event) {
    //     relogio.classList.remove('pausado');//remove a classe pausado
    //     clearInterval(timer);//impede 2 timers simultaneos
    //     iniciaRelogio();
    // })

    // pausar.addEventListener('click', function(event) {
    //     relogio.classList.add('pausado')//adiciona a classe pausado
    //     clearInterval(timer);
    // })

    // zerar.addEventListener('click', function(event) {
    //     clearInterval(timer);
    //     relogio.innerHTML='00:00:00';
    //     segundos = 0;
    // })

    function criaHoraDosSegundos(segundos) {
        let data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-br',{ 
            hour12: false,
            timeZone:'GMT'
        })
    }
    }
relogio();//fazendo com o codigo englobado em uma funçao nenhuma das variaveis tocam o escopo global
