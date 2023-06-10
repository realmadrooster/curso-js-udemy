import { legacy_createStore as createStore} from 'redux';
// import { createStore } from 'redux';
const initialState = {
  botaoClicado: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state};
      newState.botaoClicado = !newState.botaoClicado;//inverte o sinal de botaoClicado
      return newState;
    }

    default: {
      return state;
    }

  }

};

const store = createStore(reducer);

export default store;

