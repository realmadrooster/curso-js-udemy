const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);//pega todo css do body
const backgroundColorBody = estilosBody.backgroundColor;//pega o backgroundColor especifico 

//console.log(backgroundColorBody)

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
    
}