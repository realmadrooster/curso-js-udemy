// try {
//     //É executada quando nao ha erros
//     //console.log(a);
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');
//     try {
//         console.log(b);
//     } catch(e) {
//         console.log('Deu erro');
//     } finally {
//         console.log('Tambem sou finally.');
//     }
// } catch (e) {
//     //É executada quando ha erros
//     console.log('tratando o erro');
// } finally {
//     //executada sempre - pode ser omitida
//     console.log('Finally: Eu sempre sou executado');
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de data');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-br',{hour:'2-digit',
    minute:'2-digit',
    second:'2-digit',
    hour12: false});
}
//retornaHora(new Date());
try {
    //é executada quando nao ha erros
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(13);
    console.log(hora);
} catch(e) {
    //é executada quando ha erros
    //tratar erro
    //console.log(e);
} finally {
    //sempre é executada
    console.log('tenha um bom dia.');
}