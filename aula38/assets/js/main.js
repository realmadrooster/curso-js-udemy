const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);//pega todo css do body
const backgroundColorBody = estilosBody.backgroundColor;//pega o backgroundColor especifico 

//console.log(backgroundColorBody)

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody;//seta o background color do paragra com o do body
    p.style.color = 'white';//seta a cor do texto do paragrafo de branco
    
}