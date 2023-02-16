//metodo antigo
// const request = obj => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener('load', () => {
//         if(xhr.status >= 200 && xhr.status < 300) {
//             obj.sucess(xhr.responseText);
//         } else {
//             obj.error(xhr.statusText);
//         }
//     });
// };

//metodo com promises
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.responseText);
            } else {
            reject(xhr.statusText);
            }
        });
    })
    
};

document.addEventListener('click', e => {
    const el = e.target;//pega o elemento clicado
    const tag = el.tagName.toLowerCase();//pega a tag do elemento clicado

    if(tag === 'a') {
        e.preventDefault();//quando clicar no link ele nao vai pro link
        carregaPagina(el);
    }
});

//metodo antigo com  callbacks

// function carregaPagina(el) {
//     const href = el.getAttribute('href');//pega o atributo href do link clicado
//     request({
//         method: 'GET',
//         url: href,
//         sucess(response) {
//             carregaResultado(response);
//         },
//         error(errorText) {
//             console.log(errorText);
//         }
//     });
// }

// //metodo novo com promises
// function carregaPagina(el) {
//     const href = el.getAttribute('href');//pega o atributo href do link clicado
//     const objConfig = {
//         method: 'GET',
//         url: href,
//         };
//         request(objConfig).then(response => {
//             carregaResultado(response);
//         }).catch(error => console.log(error));
    
// }
//metodo com promises e async
async function carregaPagina(el) {
    const href = el.getAttribute('href');//pega o atributo href do link clicado
    const objConfig = {
        method: 'GET',
        url: href,
        };
        try {
            const response = await request(objConfig);
            carregaResultado(response); 
        } catch(e) {
            console.log(e);
        }
           
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

fetch('pagina2.html').then(resposta => {
    if(resposta.status !== 200) throw new Error('Erro 404 nosso');
    return resposta.text();
}).then(html => console.log(html)).catch(e => console.log(e));