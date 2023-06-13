import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Sucesso');
      const newState = { ...state};
      newState.botaoClicado = !newState.botaoClicado;//inverte o sinal de botaoClicado
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro =(');
      // const newState = { ...state};
      // newState.botaoClicado = !newState.botaoClicado;//inverte o sinal de botaoClicado
      // return newState;
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou fazendo a requisiçao');
      // const newState = { ...state};
      // newState.botaoClicado = !newState.botaoClicado;//inverte o sinal de botaoClicado
      // return newState;
      return state;
    }

    default: {
      return state;
    }

  }

};
