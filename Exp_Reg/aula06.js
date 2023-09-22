const { cpfs } = require('./base');
const { ips } = require('./base');


console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g));

console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g));//mais simples

console.log(cpfs.match(/(\d{3}\.){2}\d{3}\-\d{2}/g));//usando grupos

//console.log(cpfs.match(/\S+/g));

//console.log(ips.match(/\S+/g));

// acha os ips de 

//250 a 255 -> 25[0-5]
//200 - 249 2[0-4][0-9]
//100 - 199 1\d{2}
//10 - 99 [1-9]\d
//0 - 9 \d

//^ -> no inicio da expressao significa começa com
//$ -> termina com

const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// for (let  i =0; i <= 300; i++) {
//     const ip = `${i}.${i}.${i}.${i}`;
//     console.log(ip, ip.match(ipRegExp));
// }

 console.log(ips.match(ipRegExp));

