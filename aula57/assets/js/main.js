function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
            
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
              if (e.keyCode === 13) {
                this.realizaConta();
              }
            });
        },
        // pressionaEnter() {
        //     this.display.addEventListener('keypress', e => {
        //         alert('1');
        //         console.log(e.keyCode);
        //         if (e.keyCode === 13) {
                    
        //             this.realizaConta();
        //         }
        //     });
        // },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta invalida');
                    return;
                }
                this.display.value = String(conta);
            }catch(e) {
                alert('Conta invalida');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0,-1);//apaga o ultimo elemento da string
        },

        
        cliqueBotoes() {//o this passa a apontar para document
            document.addEventListener('click', e => {//utilizando arrow function sempre teremos o this travado em quem criou o elemento nesse caso calculadora 
                
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    

                    this.btnParaDisplay(el.innerText);//como um metodo é chamado dentro de outro metodo é necessario a palavra this
                    
                };

                if(el.classList.contains('btn-clear')) {
                    
                    this.clearDisplay();
                };

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                };

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                };
                this.display.focus();
            });//informa para a funçao que o this se refere a calculadora
            // document.addEventListener('click', function(e) {
            //     const el = e.target;
            //     if(el.classList.contains('btn-num')) {
            //         this.btnParaDisplay(el.innerText);//como um metodo é chamado dentro de outro metodo é necessario a palavra this
            //     }
            // }.bind(this));//informa para a funçao que o this se refere a calculadora
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },


    };
}

const calculadora = criaCalculadora();
calculadora.inicia();


// function criaCalculadora() {
//     return {
//       display: document.querySelector('.display'),
  
//       inicia() {
//         this.cliqueBotoes();
//         this.pressionaBackSpace();
//         this.pressionaEnter();
//       },
  
//       pressionaBackSpace() {
//         this.display.addEventListener('keydown', e => {
//           if (e.keyCode === 8) {
//             e.preventDefault();
//             this.clearDisplay();
//           }
//         });
//       },
  
//       pressionaEnter() {
//         this.display.addEventListener('keyup', e => {
//           if (e.keyCode === 13) {
//             this.realizaConta();
//           }
//         });
//       },
  
//       realizaConta() {
//         let conta = this.display.value;
  
//         try {
//           conta = eval(conta);
  
//           if(!conta) {
//             alert('Conta inválida');
//             return;
//           }
  
//           this.display.value = String(conta);
//         } catch(e) {
//           alert('Conta inválida');
//           return;
//         }
//       },
  
//       clearDisplay() {
//         this.display.value = '';
//       },
  
//       apagaUm() {
//         this.display.value = this.display.value.slice(0, -1);
//       },
  
  
//       cliqueBotoes() {
//         document.addEventListener('click', e => {
//           const el = e.target;
  
//           if(el.classList.contains('btn-num')) {
//             this.btnParaDisplay(el.innerText);
//           }
  
//           if(el.classList.contains('btn-clear')) {
//             this.clearDisplay();
//           }
  
//           if(el.classList.contains('btn-del')) {
//             this.apagaUm();
//           }
  
//           if(el.classList.contains('btn-eq')) {
//             this.realizaConta();
//           }
  
//           this.display.focus();
//         });
//       },
  
//       btnParaDisplay(valor) {
//         this.display.value += valor;
//       }
  
//     };
//   }
  
//   const calculadora = criaCalculadora();
//   calculadora.inicia();
  