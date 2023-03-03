const fs = require('fs').promises;
const path = require('path');


// // fs.readdir('./')//pega o caminho das pastas dentro de node

// fs.readdir(path.resolve(__dirname))//pega o caminho do arquivo index.js
// .then(files => console.log(files))
// .catch(e => console.log(e));

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files,rootDir);
}

async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        if (/\.git/g.test(fileFullPath)) continue;//remove a pasta git

        if (/\node_modules/g.test(fileFullPath)) continue;//remove a pasta node_modules

        

        if(stats.isDirectory()) {
            readdir(fileFullPath);
            continue;//se for diretorio lista o conteudo dos arquivos neles
        }

        if (!/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)) continue;//exibe so os arquivos com extensao css e html
       
        console.log(file, stats.isDirectory());
    }
}

readdir('/home/lskwr/Documentos/JAVASCRIPT/Curso JS UDEMY/curso-js-udemy');