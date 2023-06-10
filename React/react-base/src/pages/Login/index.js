import React from "react";
import { useDispatch } from "react-redux";

import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from './styled';

// import axios from '../../services/axios';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch({
      type: 'BOTAO_CLICADO',
    });
   
  }
  // React.useEffect(() => {
  //   async function getData() {
  //     const response = await axios.get('/alunos');
  //     const { data } = response;
  //     console.log(data);
  //   }
  //   getData();

  // },[]);
  return (

    <Container>
    <Title>
      Login
      <small>Galo</small>
    </Title>
    <Paragrafo>Galo Forte Vingador</Paragrafo>

    <button type='button' onClick={handleClick}>Enviar</button>
    </Container>
  );
}
