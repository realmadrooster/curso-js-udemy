const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

//const a3 = a1.concat(a2);
//const a3 = a1.concat(a2, [7, 8, 9], 'Luiz');

//...rest -> ...spread(espalhar)
const a3 = [...a1, 'luiz', ...a2, ...[7, 8, 9]];//...[7 ,8 , 9] espalha os elementos no array

console.log(a3);