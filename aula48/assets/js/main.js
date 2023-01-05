const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';//espaço entre o li e o botao apagar
    const BotaoApagar = document.createElement('button');
    BotaoApagar.innerText = 'Apagar';
    //BotaoApagar.classList.add('pagar');
    BotaoApagar.setAttribute('class', 'apagar');//setando um atributo para o botao apagar
    BotaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(BotaoApagar);
    
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;//se o input estiver vazio nao faz nada
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
    const el = e.target;
    if (el.classList.contains('apagar')){//se o elemento clicado possui a classe apagar remove o elemento pai dele
    el.parentElement.remove();//remove o elemento pai
    salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li'); //joga para a variavel tarefas todos os li usando node list
    const listaDeTarefas = [];
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();//trim remove espaço
        //console.log(tarefaTexto);
        listaDeTarefas.push(tarefaTexto);
        
    }
    //console.log(listaDeTarefas);
    
    const tarefasJSON = JSON.stringify(listaDeTarefas);//salvo como uma string do array e convertido para string no formato json => é uma string que posso pegar depois de volta e converter em um array
    localStorage.setItem('tarefas', tarefasJSON);//nome tarefas e tarefasJSON o que sera salvo 
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');//pega as tarefas armazenadas no navegador
    const listaDeTarefas = JSON.parse(tarefas);//converte de string no formato json para um array
    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
    
}
adicionaTarefasSalvas();