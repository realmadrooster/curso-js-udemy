import React from "react";

import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from './styled';

// import axios from '../../services/axios';

export default function Login() {
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

    <button type='button'>Enviar</button>
    </Container>
  );
}
