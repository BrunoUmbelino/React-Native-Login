import React, { useState } from "react";
import Header from "../../components/Header";
import {
  ButtonSubmit,
  Container,
  Input,
  KeyboradView,
  Title,
  TextSubmit,
} from "./style";

function Signin() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    const input = e.target.value;
    console.log(input);
  };

  return (
    <>
      <KeyboradView>
        <Header />
        <Container>
          <Title>Login</Title>
          <Input placeholderTextColor="#fff" placeholder="E-mail" />
          <Input
            onChange={handleLogin}
            placeholderTextColor="#fff"
            placeholder="Senha"
            secureTextEntry
          />
          <ButtonSubmit>
            <TextSubmit>Entrar</TextSubmit>
          </ButtonSubmit>
        </Container>
      </KeyboradView>
    </>
  );
}

export default Signin;
