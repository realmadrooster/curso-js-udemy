import geraCPF from './modules/GeraCPF'

import './assets/css/style.css';
import GeraCPF from './modules/GeraCPF';

//exemplo com funçao auto invocada
(function() {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf()
})();