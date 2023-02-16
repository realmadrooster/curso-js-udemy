//metodo com promises
// const request = obj => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true);
//         xhr.send();

//         xhr.addEventListener('load', () => {
//             if(xhr.status >= 200 && xhr.status < 300) {
//             resolve(xhr.responseText);
//             } else {
//             reject(xhr.statusText);
//             }
//         });
//     })
    
// };

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
// function carregaPagina(el) {
//     const href = el.getAttribute('href');//pega o atributo href do link clicado
    
//     fetch(href)
//     .then(response => {
//         if(response.status !== 200) throw new Error('Erro 404');
//         return response.text()
//     }).then(html => carregaResultado(html)).catch(e => console.log(e));
        
// }

//fazendo com async e await

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);
        if(response.status !== 200) throw new Error('Erro 404');
        const html = await response.text();
        carregaResultado(html);
    } catch(e) {
        console.log(e);
    }
    
}


function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

