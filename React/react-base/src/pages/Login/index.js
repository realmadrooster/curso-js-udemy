import React from "react";

import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
    <Title>
      Login
      <small>Galo</small>
    </Title>
    <Paragrafo>Galo Forte Vingador</Paragrafo>
    <a href="https://www.atletico.com.br" target="_blank">Champ</a>
    </Container>
  );
}
