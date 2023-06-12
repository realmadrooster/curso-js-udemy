const initialState = {
  botaoClicado: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
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
