import storage  from "redux-persist/lib/storage";//salba no localstorage do navegador
import { persistReducer } from "redux-persist";

// eslint-disable-next-line import/no-anonymous-default-export
export default reducers => {
  const persistedReducers = persistReducer(
    {
    key: 'REACT-BASE',//nome da aplicaçao
    storage,
    whitelist: ['example'], //quem nos queremos que salve chave no rootreducer
    },
  reducers
  );
  return persistedReducers;
};
