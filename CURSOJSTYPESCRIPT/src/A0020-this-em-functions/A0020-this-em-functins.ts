export function funcao(this: Date, nome: string, age: number): void {
  console.log(this); //this é o objeto date
  console.log(nome, age);
}

//formas de chamar a funçao acima

funcao.call(new Date(), 'Luiz', 44);
funcao.apply(new Date(), ['Luiz', 30]);
