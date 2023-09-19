const { html } = require('./base');

// <.+>.+<\/.+>
console.log(html.match(/<.+>.+<\/.+>/g)); //greedy -> pega tudo inclusive o fechamento da tag

console.log(html.match(/<.+?>.+?<\/.+?>/g)); //non-greedy -> pega o minimo possivel 