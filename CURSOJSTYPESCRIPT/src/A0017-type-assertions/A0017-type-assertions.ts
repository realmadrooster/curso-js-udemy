// Condicional -> recomendado
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Non null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type assertion ->informa ao ts que o body e html -> recomendado
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// Asserçao de tipos com HTMLElement -> recomendado
const input = document.querySelector('input') as HTMLInputElement;
input.value = 'qualquer coisa';
input.focus();

// Type assertion -> nao recomendavel
const body4 = document.querySelector('body') as unknown as number; //consigo setar o body como um number
